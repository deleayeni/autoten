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
