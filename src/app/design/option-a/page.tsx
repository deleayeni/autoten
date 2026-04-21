import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, BadgeDollarSign, Wrench, ArrowUpRight } from "lucide-react";

const brands = [
  { name: "Toyota", src: "/icons/toyota.svg", href: "/vehicles?brand=Toyota" },
  { name: "Lexus", src: "/icons/lexus-2.svg", href: "/vehicles?brand=Lexus" },
  { name: "Land Rover", src: "/icons/land-rover.svg", href: "/vehicles?brand=Land%20Rover" },
  { name: "Mercedes-Benz", src: "/icons/mercedes-benz.svg", href: "/vehicles?brand=Mercedes" },
  { name: "Honda", src: "/icons/honda.svg", href: "/vehicles?brand=Honda" },
];

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Premium Cars",
    body: "Hand-picked inventory from trusted global brands. Every vehicle is vetted before it reaches our showroom floor.",
  },
  {
    num: "02",
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    body: "Clear, upfront pricing with no hidden costs. What you see on the tag is what you pay at the door.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "After-Sales Support",
    body: "Dependable service and support long after your purchase. A relationship, not a transaction.",
  },
];

export default function OptionAPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="hero" className="oa-hero">
        <video
          className="oa-hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/brands/mercedes.webp"
        >
          <source src="/brands/car-passing-through-highway-tunnel.mp4" type="video/mp4" />
        </video>
        <div className="oa-hero__scrim" aria-hidden />
        <div className="oa-hero__grain" aria-hidden />

        <div className="oa-hero__inner">
          <div>
            <span className="eyebrow oa-hero__eyebrow">
              AutoTen — Lagos, Nigeria
            </span>
            <h1 className="oa-hero__title">
              Driven by <em>Trust.</em>
            </h1>
            <p className="oa-hero__sub">
              Find your next car with us. Premium vehicles, vetted with care and
              delivered with a standard of service Lagos has come to expect.
            </p>

            <div className="oa-hero__ctas">
              <Link href="/vehicles" className="oa-btn oa-btn--primary">
                View Vehicles
                <ArrowUpRight size={16} className="oa-btn__arrow" />
              </Link>
              <Link href="tel:+2347040658608" className="oa-btn oa-btn--ghost">
                Call +234 704 065 8608
              </Link>
            </div>
          </div>

          <div className="oa-hero__meta">
            <div className="oa-hero__meta-item">
              <span className="oa-hero__meta-label">Established</span>
              <span className="oa-hero__meta-value">Lagos · Since 2014</span>
            </div>
            <div className="oa-hero__meta-item">
              <span className="oa-hero__meta-label">Marques</span>
              <span className="oa-hero__meta-value">Toyota · Lexus · Mercedes · Land Rover · Honda</span>
            </div>
            <div className="oa-hero__scroll">
              <span className="oa-hero__scroll-line" aria-hidden />
              Scroll
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE AUTOTEN STANDARD ============ */}
      <section className="oa-standard">
        <div className="oa-standard__wrap">
          <div className="oa-standard__head">
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="oa-standard__title">
                The AutoTen <em>Standard.</em>
              </h2>
            </div>
            <p className="oa-standard__intro">
              At AutoTen, we pride ourselves on delivering premium vehicles with
              transparency, trust, and excellent service — the three principles
              every car leaves our lot with.
            </p>
          </div>

          <div className="oa-grid">
            {pillars.map(({ num, icon: Icon, title, body }) => (
              <article key={num} className="oa-card">
                <span className="oa-card__num">{num} / 03</span>
                <Icon className="oa-card__icon" strokeWidth={1.25} />
                <h3 className="oa-card__title">{title}</h3>
                <p className="oa-card__body">{body}</p>
              </article>
            ))}
          </div>

          <div className="oa-standard__cta">
            <Link href="/about" className="oa-btn oa-btn--ghost">
              Read More About Us
              <ArrowUpRight size={16} className="oa-btn__arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MARQUES ============ */}
      <section className="oa-marques">
        <div className="oa-marques__wrap">
          <div className="oa-marques__head">
            <span className="eyebrow">Marques</span>
            <h2 className="oa-marques__title">
              Brands we <em>proudly</em> offer.
            </h2>
          </div>

          <div className="oa-marques__grid">
            {brands.map((b) => (
              <Link key={b.name} href={b.href} className="oa-marque" aria-label={`View ${b.name}`}>
                <Image
                  src={b.src}
                  alt={b.name}
                  width={140}
                  height={70}
                  className="oa-marque__logo"
                />
                <span className="oa-marque__label">View {b.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT ============ */}
      <section className="oa-visit">
        <div className="oa-visit__wrap">
          <div>
            <span className="eyebrow">Visit Us</span>
            <h2 className="oa-visit__title">
              Find us in <em>Lagos.</em>
            </h2>

            <div className="oa-visit__details">
              <div className="oa-detail">
                <span className="oa-detail__label">Showroom</span>
                <span className="oa-detail__value">
                  19B Mobolaji Bank Anthony Way,<br />Maryland, Ikeja, Lagos
                </span>
              </div>
              <div className="oa-detail">
                <span className="oa-detail__label">Direct Line</span>
                <span className="oa-detail__value">
                  <a href="tel:+2347040658608">+234 704 065 8608</a>
                </span>
              </div>
              <div className="oa-detail">
                <span className="oa-detail__label">WhatsApp</span>
                <span className="oa-detail__value">
                  <a href="https://wa.me/2348123456789" target="_blank" rel="noreferrer">
                    Message us
                  </a>
                </span>
              </div>
              <div className="oa-detail">
                <span className="oa-detail__label">Hours</span>
                <span className="oa-detail__value">
                  Mon — Sat · 9:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="oa-visit__mapwrap">
            <iframe
              title="AutoTen showroom map"
              className="oa-visit__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.584011554882!2d3.3627396999999997!3d6.574067199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9273bf378d91%3A0x31fa41dda000b88d!2s19B%20Mobolaji%20Bank%20Anthony%20Way%2C%20Maryland%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sbe!4v1756460258633!5m2!1sen!2sbe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ============ OUTRO ============ */}
      <section className="oa-outro">
        <div className="oa-outro__inner">
          <span className="eyebrow">Your Next Car</span>
          <h2 className="oa-outro__title">
            Ready when <em>you are.</em>
          </h2>
          <p className="oa-outro__sub">
            Browse the current inventory or speak to a specialist. Either way,
            you leave with a car you can trust.
          </p>
          <div className="oa-outro__ctas">
            <Link href="/vehicles" className="oa-btn oa-btn--primary">
              View Vehicles
              <ArrowUpRight size={16} className="oa-btn__arrow" />
            </Link>
            <Link href="/contact" className="oa-btn oa-btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
