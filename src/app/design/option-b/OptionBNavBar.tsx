import Link from "next/link";

const links = [
  { name: "Home", href: "/design/option-b" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Rentals", href: "/rentals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function OptionBNavBar() {
  return (
    <header className="ob-nav">
      <div className="ob-nav__inner">
        <Link href="/design/option-b" className="ob-nav__brand" aria-label="AutoTen home">
          <span className="ob-nav__brand-mark" aria-hidden>❦</span>
          <span className="ob-nav__brand-name">
            Auto<em>Ten</em>.
          </span>
        </Link>

        <nav className="ob-nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="ob-nav__link">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="ob-nav__cta">
          <span className="ob-nav__meta">
            No. 01 <span className="ob-nav__meta-sep">·</span> MMXXVI
          </span>
          <Link href="/vehicles" className="ob-nav__btn">
            Browse Cars <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
