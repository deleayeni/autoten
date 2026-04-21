import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  BadgeDollarSign,
  Wrench,
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Premium Cars",
    body: "Hand-picked inventory from trusted global brands — every vehicle vetted before it hits the floor.",
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
    body: "Dependable service and support long after your purchase — a relationship, not a transaction.",
  },
];

const brands = [
  {
    name: "Toyota",
    src: "/icons/toyota.svg",
    models: "Land Cruiser · Fortuner · Corolla",
    href: "/vehicles?brand=Toyota",
  },
  {
    name: "Lexus",
    src: "/icons/lexus-2.svg",
    models: "LX · RX · ES",
    href: "/vehicles?brand=Lexus",
  },
  {
    name: "Mercedes-Benz",
    src: "/icons/mercedes-benz.svg",
    models: "G · E · C-Class",
    href: "/vehicles?brand=Mercedes",
  },
  {
    name: "Land Rover",
    src: "/icons/land-rover.svg",
    models: "Range Rover · Defender",
    href: "/vehicles?brand=Land%20Rover",
  },
  {
    name: "Honda",
    src: "/icons/honda.svg",
    models: "CR-V · Accord · Civic",
    href: "/vehicles?brand=Honda",
  },
];

export default function OptionCPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="hero" className="oc-hero">
        <div className="oc-hero__grid">
          {/* LEFT — headline, sub, CTAs, chips */}
          <div className="oc-hero__left">
            <span className="oc-kicker oc-kicker--red oc-hero__kicker">
              <span className="oc-kicker__dot" aria-hidden />
              AutoTen · Lagos, Nigeria
            </span>

            <h1 className="oc-hero__title">
              Driven by{" "}
              <span className="oc-hero__title-accent">Trust.</span>
            </h1>

            <p className="oc-hero__sub">
              Find your next car with us. Premium vehicles, transparent pricing
              and dependable after-sales support — all under one roof in Lagos.
            </p>

            <div className="oc-hero__ctas">
              <Link href="/vehicles" className="oc-btn oc-btn--primary">
                View Vehicles
                <ArrowUpRight size={18} className="oc-btn__arrow" />
              </Link>
              <Link href="tel:+2347040658608" className="oc-btn oc-btn--outline">
                <Phone size={16} /> +234 704 065 8608
              </Link>
            </div>

            <div className="oc-hero__chips">
              <span className="oc-hero__chips-label">Shop by brand</span>
              {brands.map((b) => (
                <Link key={b.name} href={b.href} className="oc-chip">
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — featured car */}
          <div className="oc-hero__feature">
            <div className="oc-hero__feature-frame">
              <video autoPlay muted loop playsInline poster="/brands/mercedes.webp">
                <source
                  src="/brands/car-passing-through-highway-tunnel.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <span className="oc-hero__tag">
              <span className="oc-hero__tag-dot" aria-hidden />
              New arrivals weekly
            </span>

            <div className="oc-hero__badge">
              <span className="oc-hero__badge-label">Inventory</span>
              <span className="oc-hero__badge-value">Updated weekly</span>
              <span className="oc-hero__badge-row">
                Browse now <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROMISE / WHY CHOOSE US ============ */}
      <section className="oc-promise">
        <div className="oc-promise__wrap">
          <div className="oc-promise__head">
            <div>
              <span className="oc-kicker">
                <span className="oc-kicker__dot" style={{ background: "var(--red)" }} aria-hidden />
                Why Choose Us
              </span>
              <h2 className="oc-promise__title">
                The AutoTen <span>promise.</span>
              </h2>
            </div>
            <p className="oc-promise__deck">
              At AutoTen, we pride ourselves on delivering premium vehicles with
              transparency, trust, and excellent service — three principles
              every car leaves our lot with.
            </p>
          </div>

          <div className="oc-promise__grid">
            {pillars.map(({ num, icon: Icon, title, body }) => (
              <article key={num} className="oc-card">
                <div className="oc-card__top">
                  <span className="oc-card__num">{num}</span>
                  <span className="oc-card__icon-wrap">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="oc-card__title">{title}</h3>
                <p className="oc-card__body">{body}</p>
                <span className="oc-card__foot">
                  Learn more <ArrowUpRight size={14} className="oc-card__foot-arrow" />
                </span>
              </article>
            ))}
          </div>

          <div className="oc-promise__cta">
            <Link href="/about" className="oc-btn oc-btn--dark">
              Read More About Us
              <ArrowUpRight size={18} className="oc-btn__arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BRANDS ============ */}
      <section className="oc-brands">
        <div className="oc-brands__wrap">
          <div className="oc-brands__head">
            <div>
              <span className="oc-kicker">
                <span className="oc-kicker__dot" style={{ background: "var(--red)" }} aria-hidden />
                The Lineup
              </span>
              <h2 className="oc-brands__title">
                Shop by <span>brand.</span>
              </h2>
            </div>
            <Link href="/vehicles" className="oc-btn oc-btn--ghost">
              Browse all vehicles
              <ArrowUpRight size={16} className="oc-btn__arrow" />
            </Link>
          </div>

          <div className="oc-brands__grid">
            {brands.map((b) => (
              <Link key={b.name} href={b.href} className="oc-brand">
                <span className="oc-brand__arrow" aria-hidden>
                  <ArrowUpRight size={16} />
                </span>
                <div className="oc-brand__logo">
                  <Image
                    src={b.src}
                    alt={b.name}
                    width={140}
                    height={60}
                  />
                </div>
                <div className="oc-brand__body">
                  <span className="oc-brand__name">{b.name}</span>
                  <span className="oc-brand__models">{b.models}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT ============ */}
      <section className="oc-visit">
        <div className="oc-visit__wrap">
          <div>
            <span className="oc-kicker" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>
              <span className="oc-kicker__dot" style={{ background: "var(--red)" }} aria-hidden />
              Visit Us
            </span>
            <h2 className="oc-visit__title">
              Find us in <span>Lagos.</span>
            </h2>
            <p className="oc-visit__intro">
              Stop by the showroom, call ahead, or message us on WhatsApp —
              we&apos;ll have a car ready for you to see.
            </p>

            <div className="oc-visit__details">
              <div className="oc-visit__detail">
                <span className="oc-visit__detail-label">
                  <MapPin size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  Showroom
                </span>
                <span className="oc-visit__detail-value">
                  19B Mobolaji Bank Anthony Way,<br />Maryland, Ikeja, Lagos
                </span>
              </div>
              <div className="oc-visit__detail">
                <span className="oc-visit__detail-label">
                  <Phone size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  Direct Line
                </span>
                <span className="oc-visit__detail-value">
                  <a href="tel:+2347040658608">+234 704 065 8608</a>
                </span>
              </div>
              <div className="oc-visit__detail">
                <span className="oc-visit__detail-label">
                  <MessageCircle size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  WhatsApp
                </span>
                <span className="oc-visit__detail-value">
                  <a href="https://wa.me/2348123456789" target="_blank" rel="noreferrer">
                    Message us
                  </a>
                </span>
              </div>
              <div className="oc-visit__detail">
                <span className="oc-visit__detail-label">
                  <Clock size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  Hours
                </span>
                <span className="oc-visit__detail-value">
                  Mon – Sat · 9:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="oc-visit__mapwrap">
            <span className="oc-visit__maptag">
              <MapPin size={12} /> Maryland, Ikeja
            </span>
            <iframe
              title="AutoTen showroom map"
              className="oc-visit__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.584011554882!2d3.3627396999999997!3d6.574067199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9273bf378d91%3A0x31fa41dda000b88d!2s19B%20Mobolaji%20Bank%20Anthony%20Way%2C%20Maryland%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sbe!4v1756460258633!5m2!1sen!2sbe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ============ OUTRO ============ */}
      <section className="oc-outro">
        <div className="oc-outro__inner">
          <span className="oc-outro__label">Your Next Car</span>
          <h2 className="oc-outro__title">
            Ready when<br />you are.
          </h2>
          <p className="oc-outro__sub">
            Browse the current inventory or speak to a specialist. Either way,
            you leave with a car you can trust.
          </p>
          <div className="oc-outro__ctas">
            <Link href="/vehicles" className="oc-btn oc-btn--primary">
              View Vehicles
              <ArrowUpRight size={18} className="oc-btn__arrow" />
            </Link>
            <Link href="/contact" className="oc-btn oc-btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
