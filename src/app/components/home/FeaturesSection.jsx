import React from 'react'
import Image from 'next/image';
import HeroIllustration1 from "../../../../public/hero.jpg";

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <Image 
            src={HeroIllustration1}
            alt="Features"
            className="rounded-xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            All-in-One <span className="text-yellow-500">Product Management</span> Platform
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Manage products, track analytics, and grow your business from one dashboard with ease.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              ✅ Easy product creation & editing
            </li>
            <li className="flex items-center gap-3">
              ✅ Secure authentication with NextAuth
            </li>
            <li className="flex items-center gap-3">
              ✅ Real-time analytics and performance tracking
            </li>
            <li className="flex items-center gap-3">
              ✅ Responsive and mobile-friendly dashboard
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

