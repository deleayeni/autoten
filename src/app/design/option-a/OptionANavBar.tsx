"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/design/option-a" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Rentals", href: "/rentals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function OptionANavBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`oa-nav ${solid ? "oa-nav--solid" : ""}`}>
      <div className="oa-nav__inner">
        <Link href="/design/option-a" className="oa-nav__brand" aria-label="AutoTen home">
          <span className="oa-nav__brand-dot" aria-hidden />
          <span className="oa-nav__brand-name">
            Auto<em>Ten</em>
          </span>
        </Link>

        <nav className="oa-nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="oa-nav__link">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="oa-nav__cta">
          <Link href="/vehicles" className="oa-nav__btn">
            View Cars <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
