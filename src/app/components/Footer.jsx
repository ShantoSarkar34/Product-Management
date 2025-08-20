import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">ProductHub</h2>
          <p className="text-gray-400 text-sm">
            Manage your products efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 transition">Home</li>
            <li className="hover:text-yellow-400 transition">Products</li>
            <li className="hover:text-yellow-400 transition">Login</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-yellow-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 transition cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe for latest updates
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 cursor-pointer py-2 bg-yellow-400 text-black rounded-r hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 ProductHub. All rights reserved.
      </div>
    </footer>
  );
}
