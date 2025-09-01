"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setSolid(true);
      return;
    } // non-hero pages: solid

    const varPx = getComputedStyle(document.documentElement)
      .getPropertyValue("--header-h")
      .trim();
    const headerPx = Number.parseInt(varPx || "80", 10);

    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: `-${headerPx}px 0px 0px 0px`, threshold: 0 }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        solid
          ? "bg-white shadow-sm text-gray-900"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
      style={{ height: "var(--header-h)" }} /* keeps hit area stable */
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 h-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Auto Ten"
            width={120}
            height={120}
            priority
          />
          <span className="sr-only">Auto Ten</span>
        </Link>

        <div className="flex items-center gap-6 text-xl">
          {links.map(({ name, href }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? solid
                      ? "font-medium text-gray-900"
                      : "font-medium text-white"
                    : solid
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-200 hover:text-white"
                }
              >
                {name}
              </Link>
            );
          })}
          <Button
            asChild
            variant={solid ? "dark" : "light"}
            className="text-xl"
          >
            <Link href="/vehicles">View Cars</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
