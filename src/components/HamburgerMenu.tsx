import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HamburgerMenuProps {
  links: { name: string; href: string }[];
}

export default function HamburgerMenu({ links }: HamburgerMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="text-5xl"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md">
          {links.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="block text-center py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
