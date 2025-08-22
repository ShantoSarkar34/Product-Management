"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientProviders({ children }) {
  const [mounted, setMounted] = useState(false);

  // only render after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SessionProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  );
}
