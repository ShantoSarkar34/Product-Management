"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;

  // For now, static product data
  const data = [
    {
      _id: "66bf737e1fa105a7569bec0c",
      name: "Drone",
      image: "https://i.ibb.co/KVck0yY/39.jpg",
      description: "Compact drone with HD camera and easy-to-use controls.",
      price: 249.99,
      category: "Electronics",
      brand: "DJI",
      ratings: 4.8,
      createdAt: "2024-07-05T10:00:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bebf9",
      name: "Cordless Vacuum Cleaner",
      image: "https://i.ibb.co/qY0JPQG/20.jpg",
      description: "Lightweight cordless vacuum cleaner with powerful suction.",
      price: 199.99,
      category: "Appliances",
      brand: "Dyson",
      ratings: 4.8,
      createdAt: "2024-07-24T14:30:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bec04",
      name: "Smart Light Bulb",
      image: "https://i.ibb.co/D4JzLR5/31.jpg",
      description:
        "Wi-Fi enabled smart light bulb with customizable colors and scheduling.",
      price: 19.99,
      category: "Home Automation",
      brand: "Philips Hue",
      ratings: 4.5,
      createdAt: "2024-07-13T09:45:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bebf7",
      name: "LED Desk Lamp",
      image: "https://i.ibb.co/VHCsr8w/18.jpg",
      description:
        "Energy-efficient LED desk lamp with adjustable brightness and color temperature.",
      price: 29.99,
      category: "Home And Office",
      brand: "Philips",
      ratings: 4.4,
      createdAt: "2024-07-26T16:00:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bec07",
      name: "Digital Voice Assistant",
      image: "https://i.ibb.co/RjzcnNk/34.jpg",
      description:
        "AI-powered digital voice assistant with smart home integration.",
      price: 49.99,
      category: "Electronics",
      brand: "Amazon Echo",
      ratings: 4.6,
      createdAt: "2024-07-10T10:20:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bebf0",
      name: "Coffee Maker",
      image: "https://i.ibb.co/pX0PrgT/11.jpg",
      description:
        "Automatic coffee maker with programmable settings and brew strength control.",
      price: 79.99,
      category: "Appliances",
      brand: "Keurig",
      ratings: 4.4,
      createdAt: "2024-08-02T15:30:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bec0d",
      name: "Gaming Headset",
      image: "https://i.ibb.co/j5hsBdR/40.jpg",
      description:
        "Comfortable gaming headset with surround sound and noise-canceling microphone.",
      price: 79.99,
      category: "Electronics",
      brand: "HyperX",
      ratings: 4.7,
      createdAt: "2024-07-04T14:15:00Z",
    },
    {
      _id: "66bf737e1fa105a7569bebf6",
      name: "Portable Charger",
      image: "https://i.ibb.co/vq7X8ZK/17.jpg",
      description:
        "High-capacity portable charger with fast charging technology.",
      price: 39.99,
      category: "Electronics",
      brand: "Anker",
      ratings: 4.5,
      createdAt: "2024-07-27T12:25:00Z",
    },
  ];

  const product = data.find((p) => p._id === id);

  if (!product) return <p className="p-10 text-center">Product not found!</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-xl p-8 flex flex-col md:flex-row gap-8 lg:gap-20 md:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center w-[40%] ">
            <img
              src={product.image}
              alt={product.name}
              className=" h-auto rounded-xl object-cover"
            />
          </div>
          <div className=" flex flex-col gap-4 ">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-semibold">
              Price: <span className="text-[#ffbb38]">${product.price}</span>
            </p>
            <p>
              Category: <span className="font-medium">{product.category}</span>
            </p>
            <p>
              Brand: <span className="font-medium">{product.brand}</span>
            </p>
            <p>
              Ratings: <span className="font-medium">{product.ratings}⭐</span>
            </p>
            <div className="pt-10">
          <button className="py-4 px-16 lg:px-20 rounded-lg cursor-pointer text-lg font-semibold border-none shadow-none text-[#111111] hover:text-white bg-[#ffbb38] hover:bg-[#e6a92f] transition">Buy Now</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
