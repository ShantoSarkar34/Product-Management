"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import AddProduct from "./AddProduct";
import { Plus } from "lucide-react/dist/cjs/lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();
  // Static user info
  const user = {
    name: "Md Shanto Sarkar",
    email: "shanto@example.com",
    role: "Admin",
  };

  // Static product statistics for charts
  const productStats = [
    { name: "Health", value: 4 },
    { name: "Electronics", value: 3 },
    { name: "Clothing", value: 2 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4000 },
    { month: "May", revenue: 6000 },
  ];

  const COLORS = ["#FFBB38", "#0F0F0F80", "#FF6384", "#36A2EB", "#FFCE56"];

  const handleNavigate=()=>{
    router.push('/dashboard/addproduct')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* User Summary Card */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center text-[#FFBB38]">
                User Info
              </h2>
              <div className="flex justify-between items-center border border-gray-400 rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 ">
                    <p className="font-semibold text-lg lg:text-xl text-gray-800">
                      Name :<span className="text-gray-500"> {user.name}</span>
                    </p>
                    <p className="font-semibold text-lg lg:text-xl text-gray-800">
                      Email :
                      <span className="text-gray-500"> {user.email}</span>
                    </p>
                    <p className="font-semibold text-lg lg:text-xl text-gray-800">
                      Role :<span className="text-gray-500"> {user.role}</span>
                    </p>
                  </div>
                </div>
                <div className="  ">

                <button
                  type="button"
                  onClick={handleNavigate}
                  className=" flex items-center gap-2 cursor-pointer py-3 px-8 bg-[#FFBB38] hover:bg-[#eeac33] text-white font-semibold rounded-lg"
                >
                  <Plus/>
                  Add Product
                </button>
                </div>
              </div>
            </motion.div>
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mb-8">
              <p className="text-2xl font-bold mb-4">Product Categories</p>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={productStats}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#8884d8"
                    label
                  >
                    {productStats.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Revenue Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#FFBB38" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
