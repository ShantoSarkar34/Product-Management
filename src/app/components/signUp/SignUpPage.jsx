"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, LucideEyeClosed } from "lucide-react/dist/cjs/lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [passError, setPassError] = useState("");
  const [nameError, setNameError] = useState("");
  const router = useRouter();

  const handleShow = () => {
    setShow(!show);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPassError("");
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      // Auto login after signup
      const loginRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (loginRes?.error) {
        toast.error(loginRes.error);
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "SignUp in successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
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
              className="w-full border border-black text-gray-800 rounded-lg py-3 px-4  focus:border-yellow-400 outline-none"
            />
            {nameError && (
              <p className="text-sm text-red-500 mt-1">{nameError}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-black text-gray-800 rounded-lg py-3 px-4  focus:border-yellow-400 outline-none"
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
              className="w-full border border-black text-gray-800 rounded-lg py-3 px-4  focus:border-yellow-400 outline-none"
            />
            {passError && (
              <p className="text-sm text-red-500 mt-1">{passError}</p>
            )}
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
            Log In
          </a>
        </p>
      </motion.div>
    </section>
  );
}
