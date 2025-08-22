"use client";
import { useState } from "react";
import { EyeIcon, LucideEyeClosed } from "lucide-react/dist/cjs/lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const router = useRouter();

  const handleShow = () => {
    setShow(!show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error(res.error || "No account found");
    } else {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Logged in successfully!",
        timer: 2000,
        showConfirmButton: false,
      });
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 via-white to-yellow-50 px-6">
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
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
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            {loading ? "Login Account..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-yellow-500 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
