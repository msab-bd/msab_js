
"use client"; // This must be at the very top

import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
// import Nav from "./nav"; // Assuming the Nav component is properly exported

const categories = [
  {
    name: "ভাড়া",
    subcategories: [
      { bn: "গ্রহণ", en: "Rent In", href: "rent-in" },
      { bn: "প্রদান", en: "Rent Out", href: "rent-out" },
      { bn: "বাড়ি", en: "House", href: "house" },
      { bn: "যানবাহন", en: "Vehicle", href: "vehicle" },
    ],
  },
  {
    name: "ভ্রমণ",
    subcategories: [
      { bn: "হোটেল", en: "Hotel", href: "hotel" },
      { bn: "ট্যুর প্যাকেজ", en: "Tour Package", href: "tour-package" },
      { bn: "ট্রাভেল এজেন্ট", en: "Travel Agent", href: "travel-agent" },
    ],
  },
  {
    name: "স্বাস্থ্য",
    subcategories: [
      { bn: "ডাক্তার", en: "Doctor", href: "doctor" },
      { bn: "হাসপাতাল", en: "Hospital", href: "hospital" },
      { bn: "ওষুধ", en: "Medicine", href: "medicine" },
    ],
  },
  {
    name: "নর-নারী সুন্দর",
    subcategories: [
      { bn: "পোশাক", en: "Clothing", href: "clothing" },
      { bn: "সৌন্দর্য পণ্য", en: "Beauty Products", href: "beauty-products" },
      { bn: "স্বাস্থ্য ও সৌন্দর্য", en: "Health & Beauty", href: "health-beauty" },
    ],
  },
  {
    name: "ক্রয় বিক্রয় সেবা",
    subcategories: [
      { bn: "Smart Watches", en: "Smart Watches", href: "smart-watches" },
      { bn: "Headphones", en: "Headphones", href: "headphones" },
      { bn: "Power Banks", en: "Power Banks", href: "power-banks" },
    ],
  },
  {
    name: "আধুনিক বিজ্ঞাপন",
    subcategories: [
      { bn: "ফেসবুক", en: "Facebook", href: "facebook" },
      { bn: "ইউটিউব", en: "YouTube", href: "youtube" },
      { bn: "ইনস্টাগ্রাম", en: "Instagram", href: "instagram" },
    ],
  },
  {
    name: "প্রযুক্তি",
    subcategories: [
      { bn: "ওয়েব ডেভেলপমেন্ট", en: "Web Development", href: "web-development" },
      { bn: "মোবাইল অ্যাপ্লিকেশন", en: "Mobile Application", href: "mobile-application" },
      { bn: "গ্রাফিক্স ডিজাইন", en: "Graphics Design", href: "graphics-design" },
    ],
  },
];

//   { name: "WALLET" },
//   { name: "BELT" },
//   { name: "ACCESSORIES" },
//   { name: "All Categories" },

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
      <div className={`bg-white text-black  w-64 p-4 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white mb-4">
          <FaBars size={20} />
        </button>
        <h2 className="text-lg text-green-700 font-bold">সব বিভাগ</h2>
        <ul className="mt-4">
          {categories.map((category, index) => (
            <li key={index} className="py-2">
              <div className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-green-700 hover:text-white rounded-md" onClick={() => toggleCategory(category.name)}>
                <span>{category.name}</span>
                {category.subcategories && (openCategories[category.name] ? <FaAngleDown /> : <FaAngleRight />)}
              </div>
              {category.subcategories && openCategories[category.name] && (
                <ul className="ml-6 mt-2 border-l border-white pl-4">
                  {category.subcategories.map((sub, i) => (
                    <Link key={i} href={`/services/${sub.href}`}>
                      <li  className="py-1 text-sm hover:underline cursor-pointer">{sub.bn}</li>
                    </Link>
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

