"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" } // adjust if your nav height is different
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        solid
          ? "bg-white shadow-sm text-gray-900"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
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

        <div className="flex items-center gap-6 text-sm">
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
          <Link
            href="/vehicles"
            className={`rounded-lg px-3 py-1.5 font-medium transition ${
              solid
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white/90 text-gray-900 hover:bg-white"
            }`}
          >
            View Cars
          </Link>
        </div>
      </nav>
    </header>
  );
}
