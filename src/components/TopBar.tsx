import { Phone } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="top-0 left-0 w-full z-50 bg-primary text-white text-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-center sm:justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+234 704 065 8608</span>
        </div>
        <Link
          href="https://wa.me/2348123456789"
          target="_blank"
          className="hidden sm:inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-primary hover:bg-gray-100"
        >
          WhatsApp Us
        </Link>
      </div>
    </div>
  );
}
