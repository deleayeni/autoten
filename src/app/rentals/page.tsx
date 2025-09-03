import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rentals • Brownview by AutoTen",
  description:
    "Lagos car rentals with vetted drivers. Airport pickups, day/weekly hire.",
};

export default function Rentals() {
  const phone = "+2348012345678"; // TODO update
  const whatsapp =
    "https://wa.me/2348012345678?text=Hi%20Brownview%2C%20I%27d%20like%20to%20rent%20a%20car."; // TODO update

  return (
    <div className="pt-[var(--header-h)]">
      <main className="mx-auto max-w-6xl px-4 py-12">
        <header className="flex flex-col items-center gap-3">
          <Image
            src="/brownviewlogohd.png"
            alt="Brownview"
            width={320} // Increased width
            height={240} // Increased height
            className="h-60 w-80" // Tailwind classes for consistent sizing
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Brownview Car Rentals (with Driver)
            </h1>
            <p className="text-sm text-gray-600">
              RC: 1374621 • Operated by AutoTen (same office/team).
            </p>
          </div>
        </header>

        <section className="mt-6 rounded-2xl border p-6">
          <p className="text-gray-700">
            For internationals visiting Lagos: clean vehicles, punctual drivers
            who know the city. Daily/weekly hire, airport pickups, and corporate
            trips.
          </p>
          <ul className="mt-4 grid gap-2 text-gray-700">
            <li>• Sedans, SUVs, luxury, and vans</li>
            <li>• Driver included • Invoices available</li>
            <li>• Fuel/tolls arranged on request</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#request"
              className="rounded-xl px-4 py-2 font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]"
            >
              Request a car
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 font-medium border hover:bg-gray-50"
            >
              WhatsApp (fast reply)
            </a>
            <a
              href={`tel:${phone}`}
              className="rounded-xl px-4 py-2 font-medium border hover:bg-gray-50"
            >
              Call {phone}
            </a>
          </div>
        </section>

        <section id="request" className="mt-8 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Quick request</h2>
          <form
            className="mt-4 grid gap-3 sm:grid-cols-2"
            action={`mailto:rentals@autoten.ng`}
            method="post"
            encType="text/plain"
          >
            <input
              className="rounded-xl border p-3"
              name="Name"
              placeholder="Full name"
              required
            />
            <input
              className="rounded-xl border p-3"
              name="Email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="rounded-xl border p-3"
              name="Phone"
              placeholder="Phone / WhatsApp"
            />
            <input
              className="rounded-xl border p-3"
              name="Dates"
              placeholder="Dates (e.g., 12–15 Oct)"
            />
            <select className="rounded-xl border p-3" name="Vehicle">
              <option>Sedan</option>
              <option>SUV</option>
              <option>Luxury SUV</option>
              <option>Van (7–12)</option>
            </select>
            <textarea
              className="sm:col-span-2 rounded-xl border p-3"
              name="Notes"
              rows={3}
              placeholder="Pickup (LOS), itinerary…"
            />
            <button className="rounded-xl px-4 py-2 font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]">
              Send
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
