"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  const product = products.find((p) => p._id === id);

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
              <button className="py-4 px-16 lg:px-20 rounded-lg cursor-pointer text-lg font-semibold border-none shadow-none text-[#111111] hover:text-white bg-[#ffbb38] hover:bg-[#e6a92f] transition">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
