// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Nunito_Sans, Heebo } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auto Ten — Driven by Trust",
  description:
    "Premium cars, transparent pricing, dependable after-sales support.",
};

// Headings font
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // bold weights for headings
  variable: "--font-nunito",
  display: "swap",
});

// Body & UI font
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // body and medium UI
  variable: "--font-heebo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${heebo.variable}`}>
      <body className="min-h-screen antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
