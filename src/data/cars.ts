import type { Car } from "@/types/car";
import { supabaseServer } from "@/lib/supabase/server";

export async function getPublishedAvailableCars(): Promise<Car[]> {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, brand, model, year, price, condition, status, mileage, transmission, fuel, body, doors, seats, color, location, image_url"
    )
    .eq("published", true)
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load cars:", error);
    return [];
  }

  return (data ?? []) as Car[];
}
