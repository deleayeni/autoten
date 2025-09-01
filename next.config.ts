import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Narrow allow-list: EXACT project host + ONLY public storage path.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mswknjxlvcfhkbrulymt.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // Send a safer referrer on cross-origin requests (helps signed URLs if you use them later).
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
