// src/app/vehicles/page.tsx
import HeroCarousel from "@/components/HeroCarousel";
import { supabaseServer } from "@/lib/supabase/server";
import VehicleCard from "@/components/VehicleCard";
import { getPublishedAvailableCars } from "@/data/cars";
import type { Car } from "@/types/car";

export const metadata = {
  title: "Vehicles • Auto Ten",
  description: "Browse our latest inventory of premium vehicles.",
};

export default async function VehiclesPage() {
  const cars: Car[] = await getPublishedAvailableCars();
  return (
    <div className="pt-[var(--header-h)]">
      {/* Hero carousel at the top */}
      <HeroCarousel />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">Vehicles</h1>
        <p className="mt-2 text-gray-600">Browse our latest inventory.</p>

        {cars.length === 0 ? (
          <p className="mt-8 text-gray-500">No vehicles available right now.</p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <li key={car.id}>
                <VehicleCard car={car} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
