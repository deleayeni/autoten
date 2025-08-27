// src/app/vehicles/page.tsx

import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "Vehicles • Auto Ten",
  description: "Browse our latest inventory of premium vehicles.",
};

export default function VehiclesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Vehicles</h1>
      <p className="mt-2 text-gray-600">Browse our latest inventory.</p>
      <HeroCarousel />
    </main>
  );
}
