"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    ratings: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Product added successfully!");
        setFormData({
          name: "",
          image: "",
          description: "",
          price: "",
          category: "",
          brand: "",
          ratings: "",
        });
        router.push('/products')
      } else {
        toast.error(data.error || "Failed to add product");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="text-gray-800">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border mt-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <label className="text-gray-800">Product Photo</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <label className="text-gray-800">Product Desctiption</label>
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows={4}
            required
          />
          <label className="text-gray-800">Product Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <label className="text-gray-800">Product Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <label className="text-gray-800">Product Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <label className="text-gray-800">Product Rating</label>
          <input
            type="number"
            name="ratings"
            placeholder="Ratings (0-5)"
            value={formData.ratings}
            onChange={handleChange}
            className="w-full border mt-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            min="0"
            max="5"
            step="0.1"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer ${
              loading ? "bg-gray-400" : "bg-yellow-400 hover:bg-yellow-500"
            } transition-colors font-bold text-white p-3 rounded-md mt-2`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}
