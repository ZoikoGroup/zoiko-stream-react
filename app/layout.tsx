import type { Metadata } from "next";
import { Space_Grotesk, Inter, Sora, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "ZoikoStream",
  description: "ZoikoStream by Zoiko Tech and Zoiko Cloud",
  verification: {
    google: "_8lcZUHsZF0-b1c7mQchWFb-OZD8w1VjmuSqvTYuC3Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${spaceGrotesk.variable} ${inter.variable} ${sora.variable} ${ibmPlexMono.variable}`}>
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
