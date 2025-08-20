import Image from "next/image";
import { motion } from "framer-motion";
import HeroIllustration1 from "../../../../public/hero.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Manage Your Products Like a Pro
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Add, update, and track all your products seamlessly with Product
            Management Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 cursor-pointer py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="px-8 cursor-pointer py-4 border border-gray-300 text-gray-800 rounded-xl hover:bg-gray-100 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Floating Cards */}
        <div className="flex-1 relative w-full ">
          {/* Main illustration */}
          <Image
            src={HeroIllustration1}
            alt="Product Management Illustration"
            className="w-full h-full object-contain rounded-xl shadow-xl"
          />

          {/* Floating Product Cards */}
          <div className="absolute top-10 left-1/4 bg-white p-4 rounded-xl shadow-lg w-40 animate-bounce-slow">
            <h3 className="font-bold text-gray-900 text-lg">Product A</h3>
            <p className="text-gray-600 text-sm">Description here</p>
            <p className="font-semibold text-yellow-500">$99</p>
          </div>

          <div className="absolute bottom-20 right-1/4 bg-white p-4 rounded-xl shadow-lg w-40 animate-bounce-slow delay-200">
            <h3 className="font-bold text-gray-900 text-lg">Product B</h3>
            <p className="text-gray-600 text-sm">Description here</p>
            <p className="font-semibold text-yellow-500">$149</p>
          </div>
        </div>
      </div>
    </section>
  );
}
