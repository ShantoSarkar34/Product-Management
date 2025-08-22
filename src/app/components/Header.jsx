"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigate = () => {
    router.push("/login");
  };

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
          <Link href={`${status === "authenticated" ? '/dashboard' : '/login'}`} className="hover:text-yellow-500">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-8">
          {/* Right side: Theme toggle + mobile menu button */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full cursor-pointer p-2 "
            >
              {theme === "dark" ? (
                <Sun className="text-lg text-amber-300" />
              ) : (
                <Moon className="text-lg text-gray-400" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden cursor-pointer p-2 rounded "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="py-3 px-10 rounded-lg cursor-pointer text-lg font-semibold border-none shadow-none text-[#111111] hover:text-white bg-[#ffbb38] hover:bg-[#e6a92f] transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleNavigate}
              className="py-3 px-10 rounded-lg cursor-pointer text-lg font-semibold border-none shadow-none text-[#111111] hover:text-white bg-[#ffbb38] hover:bg-[#e6a92f] transition"
            >
              LogIn
            </button>
          )}
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
          <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}
