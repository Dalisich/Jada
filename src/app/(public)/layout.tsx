import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      {/* Mobile nav spacer: pushes content below the fixed pill nav on small screens */}
      <div className="h-20 sm:h-24 lg:hidden" aria-hidden="true" />
      <main className="overflow-x-hidden max-w-full">{children}</main>
      <Footer />
    </>
  );
}
