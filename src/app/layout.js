import { ThemeProvider } from "next-themes";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Product Managment",
  description: "A simple product managment built with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black"
       cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
