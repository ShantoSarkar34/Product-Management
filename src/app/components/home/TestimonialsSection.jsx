import React from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "This platform saved us countless hours managing our product catalog.",
    },
    {
      name: "Sophia Lee",
      role: "E-commerce Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The dashboard is clean and intuitive. Highly recommend!",
    },
    {
      name: "Michael Smith",
      role: "Product Lead",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "Secure and easy-to-use product management solution for our team.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 text-lg">
          Trusted by teams and businesses worldwide
        </p>
      </div>

      <div className="flex gap-6 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
