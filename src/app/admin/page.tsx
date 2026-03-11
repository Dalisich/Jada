import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  // Redirect directly to the posts dashboard when accessing /admin
  redirect("/admin/posts");
}
