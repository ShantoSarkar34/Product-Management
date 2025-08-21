"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50  bg-gray-700 text-white py-4">
      <div className="mx-auto flex container items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-yellow-500">
          ProductHub
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-500">
            Products
          </Link>
          <Link href="/login" className="hover:text-yellow-500">
            Login
          </Link>
          <Link href="/dashboard" className="hover:text-yellow-500">
            Dashboard
          </Link>
        </nav>

        {/* Right side: Theme toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white dark:bg-gray-900 border-t">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}
