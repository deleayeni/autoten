"use client";

import Image from "next/image";

const logos = [
  { name: "Toyota", src: "/icons/toyota.svg" },
  { name: "Lexus", src: "/icons/lexus-2.svg" },
  { name: "Land Rover", src: "/icons/land-rover.svg" },
  { name: "Mercedes-Benz", src: "/icons/mercedes-benz.svg" },
  { name: "Honda", src: "/icons/honda.svg" },
  // Add more logos as needed
];

export default function BrandLogos() {
  const BOX = { w: 200, h: 100 }; // Fixed box dimensions for logos

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="h2 text-center mb-8">Brands We Offer</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-30">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
              style={{ width: BOX.w, height: BOX.h }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={BOX.w} // Explicit width
                height={BOX.h} // Explicit height
                className="object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
