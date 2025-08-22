import "./globals.css";
import ClientProviders from "./components/ClientProviders";

export const metadata = {
  title: "Product Management",
  description: "A simple product management built with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-white text-gray-800">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
