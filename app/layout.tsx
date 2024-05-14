import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Modal from "@/app/components/modals/Modal";

const font = League_Spartan({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Adventure Georgia",
  description: "Adventure Tours in Georgia & Caucasus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
