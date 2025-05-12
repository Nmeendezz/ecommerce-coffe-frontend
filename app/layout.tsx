import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const urbanist = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "TarreDev E-commerce",
  description: "Welcome to my e-commerce from TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
