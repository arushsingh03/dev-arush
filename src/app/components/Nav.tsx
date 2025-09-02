"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6 z-50">
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-sm tracking-wide uppercase font-exulta">
        <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
          Home
        </Link>
        <a
          href="/about"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          About
        </a>
        <a
          href="/works"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Works
        </a>
        <a
          href="/contact"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Contact
        </a>
      </nav>

      <button
        className="md:hidden ml-auto z-[60]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl uppercase font-exulta px-6 py-10 transform transition-all duration-500 ease-in-out z-[55] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Home
        </Link>
        <a
          href="/about"
          onClick={() => setIsOpen(false)}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          About
        </a>
        <a
          href="/works"
          onClick={() => setIsOpen(false)}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Works
        </a>
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
