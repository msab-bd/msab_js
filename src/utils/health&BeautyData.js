const healthBeautyData = [
    {
      "id": 1,
      "title": "ত্বকের যত্ন",
      "price": "৳1500",
      "duration": "১ মাস",
      "benefits": "মসৃণ ত্বক, উজ্জ্বলতা বৃদ্ধি, দাগ দূরীকরণ",
      "description": "ত্বকের স্বাস্থ্য বজায় রাখতে নিয়মিত পরিষ্কার, ময়েশ্চারাইজ এবং সানস্ক্রিন ব্যবহার করা উচিত। আমাদের বিশেষ স্কিন কেয়ার প্যাকেজ আপনাকে দিবে প্রাকৃতিক উজ্জ্বলতা।",
      "image_urls": ["/images/skin-care.jpg"],
      "contact_number": "০১৭xxxxxxxx",
      "email": "skincare@example.com"
    },
    {
      "id": 2,
      "title": "চুলের যত্ন",
      "price": "৳2000",
      "duration": "২ মাস",
      "benefits": "চুল পড়া কমানো, চুল ঘন ও মসৃণ করা",
      "description": "চুলের সুস্থতা বজায় রাখতে আমাদের হেয়ার ট্রিটমেন্ট নিন। এতে রয়েছে প্রাকৃতিক উপাদান যা চুল পড়া কমিয়ে চুলকে করে তুলবে স্বাস্থ্যজ্জ্বল।",
      "image_urls": ["/images/hair-care.jpg"],
      "contact_number": "০১৮xxxxxxxx",
      "email": "haircare@example.com"
    },
    {
      "id": 3,
      "title": "মানসিক স্বাস্থ্য",
      "price": "৳3000",
      "duration": "১ মাস",
      "benefits": "মনকে শান্ত ও সতেজ রাখা",
      "description": "আমাদের মেডিটেশন ও কাউন্সেলিং সেবা আপনার মানসিক চাপ কমিয়ে এনে দিবে প্রশান্তি।",
      "image_urls": ["/images/mental-health.jpg"],
      "contact_number": "০১৯xxxxxxxx",
      "email": "mentalhealth@example.com"
    },
    {
      "id": 4,
      "title": "ফিটনেস ও ডায়েট প্ল্যান",
      "price": "৳2500",
      "duration": "১.৫ মাস",
      "benefits": "ওজন নিয়ন্ত্রণ, সুস্থ ও শক্তিশালী শরীর",
      "description": "আপনার শরীর ও স্বাস্থ্যের জন্য আমাদের বিশেষ ফিটনেস ও ডায়েট প্ল্যান, যা আপনাকে সুস্থ রাখতে সাহায্য করবে।",
      "image_urls": ["/images/fitness-diet.jpg"],
      "contact_number": "০১৬xxxxxxxx",
      "email": "fitness@example.com"
    },
    {
      "id": 5,
      "title": "মাসাজ থেরাপি",
      "price": "৳1800",
      "duration": "১ ঘন্টা",
      "benefits": "পেশী শিথিলকরণ, মানসিক প্রশান্তি",
      "description": "আমাদের পেশাদার মাসাজ থেরাপি আপনাকে দেবে আরামদায়ক অনুভূতি ও পেশী শিথিলতা।",
      "image_urls": ["/images/massage-therapy.jpg"],
      "contact_number": "০১৫xxxxxxxx",
      "email": "massage@example.com"
    },
    {
      "id": 6,
      "title": "হ্যান্ড ও ফুট কেয়ার",
      "price": "৳1200",
      "duration": "১ মাস",
      "benefits": "মসৃণ হাত ও পা, মৃত কোষ দূরীকরণ",
      "description": "হাত ও পায়ের সৌন্দর্য বজায় রাখতে আমাদের হ্যান্ড ও ফুট কেয়ার সার্ভিস নিতে ভুলবেন না।",
      "image_urls": ["/images/hand-foot-care.jpg"],
      "contact_number": "০১৪xxxxxxxx",
      "email": "handfoot@example.com"
    },
    {
      "id": 7,
      "title": "ফেসিয়াল স্পা",
      "price": "৳2500",
      "duration": "৪৫ মিনিট",
      "benefits": "ত্বকের উজ্জ্বলতা বৃদ্ধি, গভীর পরিচর্যা",
      "description": "আপনার ত্বকের জন্য আমাদের বিশেষ ফেসিয়াল স্পা সার্ভিস, যা আপনার ত্বকে এনে দিবে সতেজতা।",
      "image_urls": ["/images/facial-spa.jpg"],
      "contact_number": "০১৩xxxxxxxx",
      "email": "facialspa@example.com"
    },
    {
      "id": 8,
      "title": "যোগব্যায়াম ক্লাস",
      "price": "৳3000",
      "duration": "১ মাস",
      "benefits": "শরীরের নমনীয়তা বৃদ্ধি, মানসিক প্রশান্তি",
      "description": "যোগব্যায়াম শরীর এবং মনকে সুস্থ রাখতে সহায়ক। আমাদের ক্লাসে যোগ দিন ও সুস্থ থাকুন।",
      "image_urls": ["/images/yoga-class.jpg"],
      "contact_number": "০১২xxxxxxxx",
      "email": "yoga@example.com"
    },
    {
      "id": 9,
      "title": "ডিটক্স প্রোগ্রাম",
      "price": "৳3500",
      "duration": "৩ দিন",
      "benefits": "দেহের টক্সিন দূরীকরণ, উন্নত ত্বকের স্বাস্থ্য",
      "description": "দেহের ভেতর থেকে টক্সিন দূর করতে আমাদের ডিটক্স প্রোগ্রাম নিন এবং সতেজ অনুভব করুন।",
      "image_urls": ["/images/detox-program.jpg"],
      "contact_number": "০১১xxxxxxxx",
      "email": "detox@example.com"
    }
  ]
  export default healthBeautyData;