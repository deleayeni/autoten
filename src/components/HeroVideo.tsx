import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section
      id="hero"
      className="relative h-[70vh] min-h-[520px] w-full overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/brands/car-passing-through-highway-tunnel.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="h1">Unleash Your Drive</h1>
        <p className="lead mt-3 text-white">Find your next car with us</p>
        <Button asChild className="mt-6">
          <Link href="/vehicles">View Vehicles</Link>
        </Button>
      </div>
    </section>
  );
}
