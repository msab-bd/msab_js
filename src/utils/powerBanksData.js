const powerBanksData = [
  {
    product_id: 1,
    name: "Anker PowerCore 10000",
    brand: "Anker",
    price: 1800,
    features: ["Quick Charge", "10,000mAh Capacity", "Lightweight Design", "MultiProtect Safety"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000001",
    email: "support@ankerbd.com",
    description: "Anker PowerCore 10000 হলো একটি অত্যন্ত ছোট কিন্তু শক্তিশালী পাওয়ার ব্যাংক যা সহজে পকেটে বহনযোগ্য। এতে রয়েছে দ্রুত চার্জিং সুবিধা, যা আপনার স্মার্টফোন ও অন্যান্য ডিভাইস দ্রুত চার্জ করতে সক্ষম। এর মাল্টি-প্রটেক্ট সেফটি সিস্টেম চার্জিং সময় অতিরিক্ত তাপ বা ওভারলোড প্রতিরোধ করে।"
  },
  {
    product_id: 2,
    name: "Xiaomi Mi Power Bank 3",
    brand: "Xiaomi",
    price: 2200,
    features: ["18W Fast Charging", "20,000mAh Capacity", "Dual USB Output", "Type-C Input"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000002",
    email: "mi@xiaomibd.com",
    description: "Xiaomi Mi Power Bank 3 একটি হাই-ক্যাপাসিটি পাওয়ার ব্যাংক যা ১৮ ওয়াট ফাস্ট চার্জিং সাপোর্ট করে। এর ডুয়েল আউটপুট পোর্টের মাধ্যমে একাধিক ডিভাইস একসাথে চার্জ করা যায়। দীর্ঘ ট্রাভেল বা ব্যাকআপ পাওয়ার প্রয়োজন হলে এটি একটি নির্ভরযোগ্য সঙ্গী।"
  },
  {
    product_id: 3,
    name: "Romoss Sense 8 Plus",
    brand: "Romoss",
    price: 2500,
    features: ["Fast Charge", "30,000mAh", "3 Input Ports", "LED Display"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000003",
    email: "support@romossbd.com",
    description: "Romoss Sense 8 Plus বিশাল ৩০,০০০mAh ব্যাটারি ক্ষমতা নিয়ে এসেছে, যা একাধিকবার ফোন চার্জ করতে পারে। এতে রয়েছে তিনটি ইনপুট পোর্ট এবং একটি LED ডিসপ্লে যা ব্যাটারির অবস্থা দেখায়। এটি ভ্রমণের জন্য উপযুক্ত এবং বহুমুখী ডিভাইস চার্জ করতে পারে।"
  },
  {
    product_id: 4,
    name: "Samsung EB-P3300",
    brand: "Samsung",
    price: 3500,
    features: ["25W Super Fast Charging", "10,000mAh", "Dual Port", "Slim Design"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000004",
    email: "support@samsungbd.com",
    description: "Samsung EB-P3300 একটি প্রিমিয়াম মানের পাওয়ার ব্যাংক যা ২৫ ওয়াট সুপার ফাস্ট চার্জিং সাপোর্ট করে। এর স্লিম ও এলিগেন্ট ডিজাইন একে অন্যান্য পাওয়ার ব্যাংকের চেয়ে আলাদা করে তোলে। দ্রুত চার্জের জন্য এটি একটি আদর্শ পছন্দ।"
  },
  {
    product_id: 5,
    name: "Realme 30W Dart Charge",
    brand: "Realme",
    price: 2700,
    features: ["30W Dart Charge", "10,000mAh", "Dual Output", "Durable Build"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000005",
    email: "info@realmebd.com",
    description: "Realme 30W Dart Charge পাওয়ার ব্যাংকটি উচ্চ গতি সম্পন্ন চার্জিং এর জন্য ডিজাইন করা হয়েছে। এর মজবুত বডি এবং ডুয়েল আউটপুটের মাধ্যমে একাধিক ডিভাইস চার্জ করা যায়। এটি যারা দ্রুত ও নিরাপদ চার্জিং চান তাদের জন্য আদর্শ।"
  },
  {
    product_id: 6,
    name: "Baseus Adaman Metal Digital",
    brand: "Baseus",
    price: 3000,
    features: ["LED Digital Display", "22.5W Fast Charge", "20,000mAh", "Metal Body"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000006",
    email: "sales@baseusbd.com",
    description: "Baseus Adaman ডিজিটাল পাওয়ার ব্যাংকটি মেটাল বডি ও আধুনিক ডিজাইন সহ আসে। এতে রয়েছে LED স্ক্রিন যা রিয়েল-টাইম ব্যাটারি স্ট্যাটাস দেখায়। দ্রুত চার্জের সাথে এটি দীর্ঘস্থায়ী ব্যাকআপ দেয়।"
  },
  {
    product_id: 7,
    name: "Havit PB91",
    brand: "Havit",
    price: 1600,
    features: ["Fast Charge", "10,000mAh", "Slim Design", "Multiple Safety Protection"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000007",
    email: "info@havitbd.com",
    description: "Havit PB91 একটি সাধ্যের মধ্যে পাওয়ারফুল এবং স্লিম ডিজাইন যুক্ত পাওয়ার ব্যাংক। এতে আছে মাল্টিপল প্রটেকশন ফিচার যা ডিভাইসকে অতিরিক্ত চার্জিং বা শর্ট সার্কিট থেকে রক্ষা করে।"
  },
  {
    product_id: 8,
    name: "Joyroom JR-QP191",
    brand: "Joyroom",
    price: 2800,
    features: ["Quick Charge 3.0", "20,000mAh", "Multiple USB Ports", "LED Indicator"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000008",
    email: "support@joyroombd.com",
    description: "Joyroom JR-QP191 পাওয়ার ব্যাংকটি একটি ফিচার-প্যাকড মডেল যা কুইক চার্জ ৩.০ প্রযুক্তি ব্যবহার করে। এর এলইডি ইন্ডিকেটর এবং মাল্টিপল ইউএসবি পোর্ট আপনাকে আরও সুবিধাজনক করে তোলে।"
  },
  {
    product_id: 9,
    name: "Ugreen Fast Charge Power Bank",
    brand: "Ugreen",
    price: 3200,
    features: ["Fast Charge", "20,000mAh", "Dual Output", "Compact Design"],
    image_urls: ["https://i.ibb.co.com/DfHVMDxW/Xiaomi-165-W-power-bank.jpg"],
    contact_number: "01700000009",
    email: "sales@ugreenbd.com",
    description: "Ugreen Fast Charge Power Bank এর ২০,০০০mAh ক্ষমতা এবং দ্রুত চার্জিং সুবিধা এটিকে একটি নির্ভরযোগ্য সঙ্গী করে তোলে। এর কমপ্যাক্ট ডিজাইন এবং স্টাইলিশ লুক একে অন্যান্য ব্র্যান্ড থেকে আলাদা করে তোলে।"
  }
];

export default powerBanksData;
