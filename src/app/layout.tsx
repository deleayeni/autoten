// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans, Heebo } from "next/font/google";
import NavBar from "@/components/NavBar";

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
        <main className="pt-20">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Auto Ten LTD. Driven by Trust.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gray-800">
                Privacy
              </a>
              <a href="/terms" className="hover:text-gray-800">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
