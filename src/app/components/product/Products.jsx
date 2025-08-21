"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const router = useRouter()

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

  const handleNavigate = (id) => {
    router.push(`/products/details/${id}`)
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className={`bg-[#f8f8f8] w-full py-20 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <motion.h1
          className={`text-center font-semibold mb-4 text-3xl`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Product
        </motion.h1>

        <motion.p
          className={`mb-10 lg:mb-14 text-center text-secondary`}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Discover our premium collection of electronics, gadgets and
          essentials.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((pro, index) => (
            <motion.div
              key={pro._id}
              className="border border-gray-500 rounded-md overflow-hidden flex flex-col items-center lg:items-start bg-white shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <motion.img
                  src={pro.image}
                  alt="product"
                  className="hover:scale-110 ease-in-out transition-all duration-300 object-cover"
                />
              </div>

              <div className="text-center lg:text-start p-4 lg:p-5 w-full">
                <h2 className="font-bold text-lg mb-2">{pro.name}</h2>
                <p className="text-secondary">
                  Price: <span className="text-black">${pro.price}</span>
                </p>
                <p className="text-secondary mb-1">
                  Brand: <span className="text-black">{pro.brand}</span>
                </p>
                <p className="text-[#11111190] text-sm mb-4 mx-auto w-[80%] lg:w-full">
                  {pro.description}
                </p>
                <motion.button
                  onClick={() => handleNavigate(pro._id)}
                  className="py-4 rounded-lg cursor-pointer text-lg font-semibold border-none shadow-none w-full text-[#111111] hover:text-white bg-[#ffbb38] hover:bg-[#e6a92f] transition"
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 lg:mt-20 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 cursor-pointer py-2 bg-[#ffbb38]/90 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 cursor-pointer py-2 rounded transition duration-200 ${
                currentPage === index + 1
                  ? "bg-[#ffbb38] text-black font-bold"
                  : "bg-white border"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 cursor-pointer py-2 bg-[#ffbb38]/90 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
