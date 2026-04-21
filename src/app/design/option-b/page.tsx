import Link from "next/link";

const pillars = [
  {
    roman: "I",
    title: "Premium Cars",
    body: "Hand-picked inventory from trusted global brands. Every vehicle is vetted — from paperwork to paint — before it reaches our showroom floor.",
    pull: "— Every car, pre-screened.",
  },
  {
    roman: "II",
    title: "Transparent Pricing",
    body: "Clear, upfront pricing with no hidden costs. What appears on the tag is what you pay at the door — no asterisks, no surprises.",
    pull: "— The tag is the price.",
  },
  {
    roman: "III",
    title: "After-Sales Support",
    body: "Dependable service and support long after your purchase. We treat a sale as the beginning of a relationship, not the end of a transaction.",
    pull: "— A relationship, not a receipt.",
  },
];

const roster = [
  { num: "01", name: "Toyota", models: "Land Cruiser · Fortuner · Corolla", href: "/vehicles?brand=Toyota" },
  { num: "02", name: "Lexus", models: "LX · RX · ES", href: "/vehicles?brand=Lexus" },
  { num: "03", name: "Mercedes-Benz", models: "G-Class · E-Class · C-Class", href: "/vehicles?brand=Mercedes" },
  { num: "04", name: "Land Rover", models: "Range Rover · Defender · Discovery", href: "/vehicles?brand=Land%20Rover" },
  { num: "05", name: "Honda", models: "CR-V · Accord · Civic", href: "/vehicles?brand=Honda" },
];

export default function OptionBPage() {
  return (
    <>
      {/* ============ MASTHEAD ============ */}
      <header className="ob-masthead">
        <div className="ob-masthead__row">
          <span className="ob-masthead__item">
            <strong>Issue 01</strong>
            <span className="ob-masthead__flourish">❦</span>
            Volume MMXXVI
          </span>
          <span className="ob-masthead__item">
            <strong>AutoTen</strong> <span className="ob-masthead__flourish">·</span> Lagos Edition
          </span>
          <span className="ob-masthead__item">
            Established <strong>MMXIV</strong>
          </span>
        </div>
      </header>

      {/* ============ HERO / COVER STORY ============ */}
      <section id="hero" className="ob-hero">
        <div className="ob-hero__grid">
          {/* Left — headline & deck */}
          <div className="ob-hero__left">
            <div>
              <div className="ob-hero__kicker reveal-1">
                <span className="ob-hero__kicker-dot" aria-hidden />
                <span className="label label--red">Cover Story · No. 01</span>
              </div>
              <h1 className="ob-hero__title reveal-2">
                Driven <span className="ob-hero__title-amp">by</span>{" "}
                <em>Trust.</em>
              </h1>
              <p className="ob-hero__deck reveal-3">
                Find your next car with us. A Lagos showroom built on the
                quiet art of vetting every vehicle before it reaches the road.
              </p>
            </div>

            <div className="reveal-4">
              <div className="ob-hero__ctas">
                <Link href="/vehicles" className="ob-btn ob-btn--solid">
                  View Vehicles
                  <span className="ob-btn__arrow">↗</span>
                </Link>
                <Link href="tel:+2347040658608" className="ob-btn ob-btn--outline">
                  Call +234 704 065 8608
                </Link>
              </div>

              <div className="ob-hero__byline">
                <span>
                  Written for the <span className="ob-hero__byline-author">AutoTen</span> reader.
                </span>
                <span>Continued below →</span>
              </div>
            </div>
          </div>

          {/* Right — cover image */}
          <div className="ob-hero__cover reveal-3">
            <span className="ob-hero__stamp">Featured · MMXXVI</span>
            <video autoPlay muted loop playsInline poster="/brands/mercedes.webp">
              <source src="/brands/car-passing-through-highway-tunnel.mp4" type="video/mp4" />
            </video>
            <div className="ob-hero__cover-caption">
              <span>Plate I</span>
              <em>The tunnel at dusk.</em>
              <span>↘</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TABLE OF CONTENTS ============ */}
      <nav className="ob-toc" aria-label="Inside this issue">
        <span className="ob-toc__label">Inside this issue</span>
        <div className="ob-toc__list">
          <Link href="#standard" className="ob-toc__item">
            <sup>I</sup> The AutoTen Standard
          </Link>
          <Link href="#roster" className="ob-toc__item">
            <sup>II</sup> The Roster
          </Link>
          <Link href="#visit" className="ob-toc__item">
            <sup>III</sup> Correspondence
          </Link>
          <Link href="#close" className="ob-toc__item">
            <sup>IV</sup> Invitation
          </Link>
        </div>
      </nav>

      {/* ============ FIELD NOTES / WHY CHOOSE US ============ */}
      <section id="standard" className="ob-feature">
        <div className="ob-feature__head">
          <div className="ob-feature__eyebrow">
            <span className="label label--red">Feature · I</span>
            <span className="ob-feature__eyebrow-num">01</span>
          </div>
          <div>
            <h2 className="ob-feature__title">
              The AutoTen <em>Standard.</em>
            </h2>
            <p className="ob-feature__deck">
              At AutoTen, we pride ourselves on delivering premium vehicles with
              transparency, trust, and excellent service — the three principles
              every car leaves our lot with.
            </p>
          </div>
        </div>

        <div className="ob-pillars">
          {pillars.map((p) => (
            <article key={p.roman} className="ob-pillar">
              <span className="ob-pillar__roman">{p.roman}.</span>
              <h3 className="ob-pillar__title">{p.title}</h3>
              <p className="ob-pillar__body">{p.body}</p>
              <p className="ob-pillar__pull">{p.pull}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 64, display: "flex", justifyContent: "flex-end" }}>
          <Link href="/about" className="ob-btn ob-btn--outline">
            Read More About Us
            <span className="ob-btn__arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ============ THE ROSTER ============ */}
      <section id="roster" className="ob-roster">
        <div className="ob-roster__wrap">
          <div className="ob-roster__head">
            <div>
              <span className="label label--red">Feature · II</span>
              <h2 className="ob-roster__title">
                The <em>Roster.</em>
              </h2>
            </div>
            <p className="ob-roster__deck">
              Five marques. Each represented in depth, each vetted by the same
              standard. Browse the full house.
            </p>
          </div>

          <div className="ob-roster__list">
            {roster.map((r) => (
              <Link key={r.name} href={r.href} className="ob-roster__row">
                <span className="ob-roster__num">{r.num}</span>
                <span className="ob-roster__name">{r.name}</span>
                <span className="ob-roster__models">{r.models}</span>
                <span className="ob-roster__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CORRESPONDENCE (VISIT) ============ */}
      <section id="visit" className="ob-correspondence">
        <div className="ob-correspondence__grid">
          <div>
            <span className="label label--red">Feature · III</span>
            <h2 className="ob-correspondence__title">
              <em>Correspondence.</em>
            </h2>
            <p className="ob-correspondence__intro">
              The showroom door is always open. Call ahead, or simply arrive —
              we&apos;ll have a car waiting.
            </p>

            <div className="ob-correspondence__details">
              <div className="ob-detail">
                <span className="ob-detail__label">Showroom</span>
                <span className="ob-detail__value">
                  19B Mobolaji Bank Anthony Way,<br />Maryland, Ikeja, Lagos
                </span>
              </div>
              <div className="ob-detail">
                <span className="ob-detail__label">Direct Line</span>
                <span className="ob-detail__value">
                  <a href="tel:+2347040658608">+234 704 065 8608</a>
                </span>
              </div>
              <div className="ob-detail">
                <span className="ob-detail__label">WhatsApp</span>
                <span className="ob-detail__value">
                  <a href="https://wa.me/2348123456789" target="_blank" rel="noreferrer">
                    Message us
                  </a>
                </span>
              </div>
              <div className="ob-detail">
                <span className="ob-detail__label">Hours</span>
                <span className="ob-detail__value">
                  Mon – Sat<br />9:00 – 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="ob-correspondence__mapwrap">
            <iframe
              title="AutoTen showroom map"
              className="ob-correspondence__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.584011554882!2d3.3627396999999997!3d6.574067199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9273bf378d91%3A0x31fa41dda000b88d!2s19B%20Mobolaji%20Bank%20Anthony%20Way%2C%20Maryland%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sbe!4v1756460258633!5m2!1sen!2sbe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ============ INVITATION (CLOSE) ============ */}
      <section id="close" className="ob-close">
        <div className="ob-close__inner">
          <span className="ob-close__label">Feature · IV · Invitation</span>
          <h2 className="ob-close__title">
            Ready when <em>you are.</em>
          </h2>
          <p className="ob-close__sub">
            Browse the current inventory or speak to a specialist. Either way,
            you leave with a car you can trust.
          </p>
          <div className="ob-close__ctas">
            <Link href="/vehicles" className="ob-btn ob-btn--solid">
              View Vehicles
              <span className="ob-btn__arrow">↗</span>
            </Link>
            <Link href="/contact" className="ob-btn ob-btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============ COLOPHON ============ */}
      <footer className="ob-colophon">
        <span>AutoTen · Lagos <em>❦</em> Since MMXIV</span>
        <span>Set in Fraunces &amp; DM Sans</span>
        <span>No. 01 · Cover Story</span>
      </footer>
    </>
  );
}
