import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-white text-lg">Auto Ten LTD</h3>
          <p className="mt-2 text-sm">Driven by Trust.</p>
          <p className="mt-2 text-sm">
            19B, Mobolaji Bank Anthony Way,
            <br />
            Opposite Army Cantonment, Maryland, Ikeja
          </p>
          <p className="mt-2 text-sm">Phone: 08097994400</p>
          <p className="mt-1 text-sm">WhatsApp: +234 704 065 8608</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white text-lg">Quick Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/vehicles" className="hover:text-white">
                Vehicles
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white text-lg">Opening Hours</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Mon – Fri: 9:00 – 18:00</li>
            <li>Saturday: 9:00 – 16:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Socials */}
        {/* Socials */}
        <div>
          <h3 className="font-semibold text-white text-lg">Connect</h3>
          <div className="flex gap-4 mt-3">
            <a
              href="https://wa.me/2347040658608"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="h-6 w-6 invert"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/autotenltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="h-6 w-6 invert"
              />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/AutoTenLtd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="h-6 w-6 invert"
              />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/autotenltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src="/icons/twitter.svg"
                alt="Twitter / X"
                className="h-6 w-6 invert"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Strip */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Auto Ten LTD. All rights reserved.
      </div>
    </footer>
  );
}
