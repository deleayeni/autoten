// src/app/about/page.tsx
export const metadata = { title: "About Us • Auto Ten" };
export default function AboutPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 text-gray-600">
          Auto Ten is a family-run dealership focused on quality vehicles and
          long-term trust.
        </p>
      </main>
    </div>
  );
}
