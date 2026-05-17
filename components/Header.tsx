"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <header className="px-5 py-4 flex items-center justify-between bg-white">
      <Link href="/" className="text-sm font-normal tracking-wide lowercase">
        frida häggström gerdt
      </Link>
      <nav className="flex items-center gap-6">
        {navLinks.map(({ href, label }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide ${active ? "font-bold text-black" : "font-normal text-gray-400 hover:text-black"} transition-colors`}
            >
              {label}
            </Link>
          );
        })}
        <Link href="/shop" aria-label="Cart" className="relative">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
