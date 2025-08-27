"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  brand: string;
  headline?: string;
  image: string; // /public relative path
  href: string;
  cta?: string;
};

const slides: Slide[] = [
  {
    brand: "Toyota",
    headline: "Land Cruiser • Fortuner • Corolla",
    image: "/brands/toyota.webp",
    href: "/vehicles?brand=Toyota",
    cta: "View Toyota",
  },
  {
    brand: "Lexus",
    headline: "LX • RX • ES",
    image: "/brands/lexus.webp",
    href: "/vehicles?brand=Lexus",
    cta: "View Lexus",
  },
  {
    brand: "Mercedes-Benz",
    headline: "G-Class • E-Class • C-Class",
    image: "/brands/mercedes.webp",
    href: "/vehicles?brand=Mercedes",
    cta: "View Mercedes",
  },
  {
    brand: "Land Rover",
    headline: "Range Rover • Defender • Discovery",
    image: "/brands/landrover.webp",
    href: "/vehicles?brand=Land%20Rover",
    cta: "View Land Rover",
  },
  {
    brand: "Honda",
    headline: "CR-V • Accord • Civic",
    image: "/brands/honda.webp",
    href: "/vehicles?brand=Honda",
    cta: "View Honda",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        aria-label="Premium brands carousel"
      >
        <div className="flex">
          {slides.map((s, i) => (
            <div key={s.brand} className="relative min-w-0 flex-[0_0_100%]">
              {/* Background */}
              <div className="relative h-[70vh] w-full sm:h-[78vh]">
                <Image
                  src={s.image}
                  alt={`${s.brand} featured`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0">
                <div className="mx-auto flex h-full max-w-6xl items-center px-4">
                  <div className="max-w-xl text-white">
                    <p className="text-xs uppercase tracking-widest text-white/80">
                      Premium Brand
                    </p>
                    <h2 className="mt-1 text-4xl font-bold sm:text-5xl">
                      {s.brand}
                    </h2>
                    {s.headline && (
                      <p className="mt-3 text-white/90">{s.headline}</p>
                    )}
                    <div className="mt-6">
                      <Link
                        href={s.href}
                        className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
                      >
                        {s.cta ?? "View Details"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
        {slides.map((_, i) => (
          <span
            key={i}
            className={
              "h-2 w-2 rounded-full bg-white/50 " +
              (i === index ? "scale-110 bg-white" : "opacity-80")
            }
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
