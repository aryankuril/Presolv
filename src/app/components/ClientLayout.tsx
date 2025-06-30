"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const excludeLayout = ["/subcourse" , "/course"];

  const showLayout = !excludeLayout.includes(pathname);

  return showLayout ? (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  ) : (
    <>{children}</>
  );
}
