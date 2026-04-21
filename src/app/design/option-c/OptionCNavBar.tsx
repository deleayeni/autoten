"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/design/option-c" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Rentals", href: "/rentals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function OptionCNavBar() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`oc-nav ${floating ? "oc-nav--float" : ""}`}>
      <div className="oc-nav__inner">
        <Link href="/design/option-c" className="oc-nav__brand" aria-label="AutoTen home">
          <span className="oc-nav__brand-mark" aria-hidden />
          <span className="oc-nav__brand-name">AutoTen</span>
        </Link>

        <nav className="oc-nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="oc-nav__link">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="oc-nav__cta">
          <Link href="/vehicles" className="oc-nav__btn">
            View Cars
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
