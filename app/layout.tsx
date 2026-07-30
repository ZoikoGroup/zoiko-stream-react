import type { Metadata } from "next";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZoikoStream",
  description: "ZoikoStream by Zoiko Tech and Zoiko Cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
