"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const router = useRouter();

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

  const handleNavigate = (id) => {
    router.push(`/products/details/${id}`);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`bg-[#f8f8f8] w-full py-20 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <motion.h1
          className={`text-center font-semibold mb-4 text-3xl text-[#ffbb38]  `}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Product
        </motion.h1>

        <motion.p
          className={`mb-10 lg:mb-14 text-center text-gray-700`}
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
                <p className="text-gray-700">
                  Price: <span className="text-black">${pro.price}</span>
                </p>
                <p className="text-gray-700 mb-1">
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
