import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookies-consent";
import Topbar from "@/components/top-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gusto Professionals",
  description: "Develop. Empower. Excel",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" flex flex-col min-h-screen relative">
          <Topbar />
          <Navbar />
          {/* <Suspense fallback={<div>Loading content...</div>}> */}
          <div className="flex-grow flex-1 bg-gray-50 ">{children}</div>
          <Toaster />
          <CookieConsent /> {/* Add cookie consent banner */}
          <Footer />
          {/* <FooterWrapper /> */}
        </main>
      </body>
    </html>
  );
}
