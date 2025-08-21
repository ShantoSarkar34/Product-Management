"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, LucideEyeClosed } from "lucide-react/dist/cjs/lucide-react";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("Account created successfully! Now you can log in.");
      } else {
        alert("Error creating account.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 via-white to-yellow-50 px-6">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <button
              onClick={handleShow}
              type="button"
              className="cursor-pointer absolute right-3 top-10 text-gray-600"
            >
              {show ? <EyeIcon /> : <LucideEyeClosed />}
            </button>
            <input
              type={show ? "password" : "text"}
              name="password"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 font-semibold">
            Sign In
          </a>
        </p>
      </motion.div>
    </section>
  );
}
