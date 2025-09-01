import Image from "next/image";

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number | null;
  price: number | null;
  condition: string | null;
  status?: string | null;
  mileage: number | null;
  transmission: string | null;
  fuel?: string | null;
  body?: string | null;
  doors?: number | null;
  seats?: string | null;
  color?: string | null;
  location: string | null;
  image_url: string | null;
};

function formatPrice(v: number | null) {
  if (v == null) return "—";
  return `₦${Math.round(v).toLocaleString("en-NG")}`;
}

export default function VehicleCard({ car }: { car: Car }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      {/* Bounded container so <Image fill> doesn’t cover the page */}
      <div className="relative h-48 w-full">
        <Image
          src={car.image_url || "/placeholder-car.jpg"}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {car.brand} {car.model}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          {car.year ?? "—"} • {car.condition ?? "—"} • {car.transmission ?? "—"}
        </p>
        <p className="mt-2 text-xl font-bold">{formatPrice(car.price)}</p>
        <p className="mt-1 text-sm text-gray-500">
          {car.mileage != null ? `${car.mileage.toLocaleString()} km` : "—"} •{" "}
          {car.location ?? "—"}
        </p>
      </div>
    </article>
  );
}
