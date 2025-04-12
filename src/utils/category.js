const categories = [
  {
    name: "ভাড়া",
    subcategories: [
      { bn: "গ্রহণ", en: "Rent In", href: "rent/rent-in" },
      { bn: "প্রদান", en: "Rent Out", href: "rent/rent-out" },
      { bn: "বাড়ি", en: "House", href: "rent/house" },
      { bn: "যানবাহন", en: "Vehicle", href: "/rent/vehicles" },
    ],
  },
  {
    name: "ভ্রমণ",
    subcategories: [
      { bn: "হোটেল", en: "Hotel", href: "travel/hotel" },
      { bn: "ট্যুর প্যাকেজ", en: "Tour Package", href: "travel/tour" },
      { bn: "ট্রাভেল এজেন্ট", en: "Travel Agent", href: "travel/travelAgent" },
    ],
  },
  {
    name: "স্বাস্থ্য",
    subcategories: [
      { bn: "ডাক্তার", en: "Doctor", href: "health/doctor" },
      { bn: "হাসপাতাল", en: "Hospital", href: "health/hospital" },
      { bn: "ওষুধ", en: "Medicine", href: "health/medicine" },
    ],
  },
  {
    name: "নর-নারী সুন্দর",
    subcategories: [
      { bn: "পোশাক", en: "Clothing", href: "woman/clothing" },
      { bn: "সৌন্দর্য পণ্য", en: "Beauty Products", href: "woman/beautyProducts" },
      { bn: "স্বাস্থ্য ও সৌন্দর্য", en: "Health & Beauty", href: "woman/health-beauty" },
    ],
  },
  {
    name: "ক্রয় বিক্রয় সেবা",
    subcategories: [
      { bn: "স্মার্ট ঘড়ি", en: "Smart Watches", href: "buyAndSellServics/smartWatches" },
      { bn: "হেডফোন ", en: "Headphones", href: "buyAndSellServics/headPhone" },
      { bn: "পাওয়ার ব্যাংক", en: "Power Banks", href: "buyAndSellServics/powerBank" },
    ],
  },
  {
    name: "আধুনিক বিজ্ঞাপন",
    subcategories: [
      { bn: "ফেসবুক", en: "Facebook", href: "advertising/facebook" },
      { bn: "ইউটিউব", en: "YouTube", href: "advertising/youtube" },
      { bn: "ইনস্টাগ্রাম", en: "Instagram", href: "advertising/instagram" },
    ],
  },
  {
    name: "প্রযুক্তি",
    subcategories: [
      { bn: "ওয়েব ডেভেলপমেন্ট", en: "Web Development", href: "technology/web-development" },
      { bn: "মোবাইল অ্যাপ্লিকেশন", en: "Mobile Application", href: "technology/mobile-application" },
      { bn: "গ্রাফিক্স ডিজাইন", en: "Graphics Design", href: "technology/graphicDesign" },
    ],
  },
];

export default categories