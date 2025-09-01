import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";
import MapEmbed from "@/components/MapEmbed";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <HeroVideo />
      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="h2">Why Choose Us</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At AutoTen, we pride ourselves on delivering premium vehicles with
            transparency, trust, and excellent service.
          </p>

          {/* 3 Columns */}
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg">Premium Cars</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Hand-picked inventory from trusted global brands.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg">Transparent Pricing</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Clear, upfront pricing with no hidden costs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg">After-Sales Support</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Dependable service and support long after your purchase.
              </p>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-10">
            <Link href="/about" className="btn btn-dark">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <TopBar />
      <MapEmbed />
    </>
  );
}
