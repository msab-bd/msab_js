
"use client"; // This must be at the very top

import { useState } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
// import Nav from "./nav"; // Assuming the Nav component is properly exported

const categories = [
  {
    name: "ভাড়া  ",
    subcategories: ["গ্রহণ ", "প্রদান","বাড়ি ","যানবাহন"],
  },
  {
    name: "ভ্রমণ  ",
    subcategories: ["হোটেল", "ট্যুর প্যাকেজ", "ট্রাভেল এজেন্ট"],
  },
  {
    name: "স্বাস্থ্য  ",
    subcategories: ["ডাক্তার", "হাসপাতাল", "ওষুধ"],
  },
  {
    name: "নর-নারী সুন্দর",
    subcategories: ["পোশাক", "সৌন্দর্য পণ্য", "স্বাস্থ্য ও সৌন্দর্য"],
  },
  {
    name: "ক্রয় বিক্রয় সেবা    ",
    subcategories: ["Smart Watches", "Headphones", "Power Banks"],
  },
  {
    name: "আধুনিক বিজ্ঞাপন  ",
    subcategories: [" ফেসবুক", " ইউটিউব", "ইনস্টাগ্রাম"],
  },
  {
    name: "প্রযুক্তি      ",
    subcategories: ["ওয়েব ডেভেলপমেন্ট", "মোবাইল অ্যাপ্লিকেশন", "গ্রাফিক্স ডিজাইন"],
  },
//   { name: "WALLET" },
//   { name: "BELT" },
//   { name: "ACCESSORIES" },
//   { name: "All Categories" },
];

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-white text-black w-64 p-4 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white mb-4">
          <FaBars size={20} />
        </button>
        <h2 className="text-lg text-green-700 font-bold">সব বিভাগ</h2>
        <ul className="mt-4">
          {categories.map((category, index) => (
            <li key={index} className="py-2">
              <div className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-green-700 rounded-md" onClick={() => toggleCategory(category.name)}>
                <span>{category.name}</span>
                {category.subcategories && (openCategories[category.name] ? <FaAngleDown /> : <FaAngleRight />)}
              </div>
              {category.subcategories && openCategories[category.name] && (
                <ul className="ml-6 mt-2 border-l border-white pl-4">
                  {category.subcategories.map((sub, i) => (
                    <li key={i} className="py-1 text-sm hover:underline cursor-pointer">{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 bg-green-600 text-white rounded">
          <FaBars size={20} />
        </button>
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p>This is where your main content goes.</p>
      </div>
    </div>
  );
}

