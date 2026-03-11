const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function reset() {
  try {
    const password = await bcrypt.hash('jada2026', 12);
    await prisma.user.update({
      where: { email: 'admin@jada.ch' },
      data: { password }
    });
    console.log('Password reset successfully for admin@jada.ch');
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

reset();
