"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/consulting", label: "Kommunikationsberatung" },
    { href: "/kids-ai", label: "Kids x AI Hub" },
    { href: "/results", label: "Ergebnisse" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 w-full nav-warm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gradient-orange">
            KT
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 focus-ring-warm ${
                  pathname === item.href
                    ? "bg-orange-100 text-orange-600 border border-orange-200"
                    : "text-warm-secondary hover:text-warm-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="card-warm p-2 rounded-lg text-warm-primary focus-ring-warm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 