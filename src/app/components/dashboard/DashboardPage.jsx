"use client";

import { useEffect, useState } from "react";
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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();

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

  const user = {
    name: `${session?.user?.name}`,
    email: `${session?.user?.email}`,
    role: "User",
  };

  // Static product statistics for charts
  const productStats = [
    { name: "Health", value: 4 },
    { name: "Electronics", value: 6 },
    { name: "Clothing", value: 7 },
    { name: "Appliances ", value: 6 },
    { name: "Home Automation", value: 2 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4000 },
    { month: "May", revenue: 6000 },
  ];

  const COLORS = ["#0F5F0F80", "#FF6384", "#36A2EB", "#FFCf56", "#FF63c4"];

  const handleNavigate = () => {
    router.push("/dashboard/addproduct");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* User Summary Card */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div
            
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
                    <Plus />
                    Add Product
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mb-8">
              <p className="text-2xl font-bold mb-4 text-gray-800">
                Product Categories
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart className="focus:outline-none">
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
          <div
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Revenue Overview
            </h2>
            <ResponsiveContainer
              width="100%"
              height={250}
              className="lg:flex lg:items-center"
            >
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#36A2EB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
