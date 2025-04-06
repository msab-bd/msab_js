const hotelData = [
    {
      "hotel_id": "H001",
      "name": "দ্য গ্র্যান্ড ঢাকা",
      "address": "১২৩ গুলশান এভিনিউ, ঢাকা-১২১২, বাংলাদেশ",
      "latitude": 23.7912,
      "longitude": 90.4071,
      "star_rating": 5,
      "guest_rating": 4.7,
      "number_of_reviews": 520,
      "price_per_night_bdt": 8500,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "সুইমিং পুল",
        "ফিটনেস সেন্টার",
        "স্পা",
        "একাধিক রেস্তোরাঁ",
        "বার/লাউঞ্জ",
        "এয়ারপোর্ট শাটল",
        "বিজনেস সেন্টার",
        "কনসিয়ার্জ সার্ভিস"
      ],
      "room_types": [
        "ডিলাক্স রুম",
        "এক্সিকিউটিভ স্যুট",
        "প্রেসিডেন্সিয়াল স্যুট"
      ],
      "description": "ঢাকার কেন্দ্রস্থলে অবস্থিত দ্য গ্র্যান্ড ঢাকাতে বিলাসবহুল অভিজ্ঞতা নিন। বিশ্বমানের সুবিধা এবং ব্যতিক্রমী পরিষেবা উপভোগ করুন।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/grand_dhaka_2.jpg",
        // "/assets/hotels/grand_dhaka_3.jpg"
      ],
      "contact_number": "+৮৮০ 2 9876543",
      "email": "reservations@granddhaka.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    },
    {
      "hotel_id": "H002",
      "name": "হোটেল লেক ভিউ",
      "address": "৪৫ বনানী রোড, ঢাকা-১২১৩, বাংলাদেশ",
      "latitude": 23.7985,
      "longitude": 90.4015,
      "star_rating": 4,
      "guest_rating": 4.3,
      "number_of_reviews": 380,
      "price_per_night_bdt": 5800,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "রেস্তোরাঁ",
        "বার/লাউঞ্জ",
        "রুম সার্ভিস",
        "লন্ড্রি সার্ভিস",
        "মিটিং রুম",
        "লেক ভিউ রুম উপলব্ধ"
      ],
      "room_types": [
        "স্ট্যান্ডার্ড ডাবল রুম",
        "সুপিরিয়র টুইন রুম",
        "ফ্যামিলি স্যুট"
      ],
      "description": "হোটেল লেক ভিউ মনোরম লেকের দৃশ্যের সাথে আরামদায়ক থাকার ব্যবস্থা সরবরাহ করে। ব্যবসা এবং অবকাশ যাপনকারী উভয়ের জন্য আদর্শ।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/lake_view_2.jpg"
      ],
      "contact_number": "+৮৮০ 2 8877665",
      "email": "info@hotellakeview.com",
      "check_in_time": "১৫:০০",
      "check_out_time": "১১:০০"
    },
    {
      "hotel_id": "H003",
      "name": "সিটি সেন্টার ইন",
      "address": "৭৮ মতিঝিল বাণিজ্যিক এলাকা, ঢাকা-১০০০, বাংলাদেশ",
      "latitude": 23.7298,
      "longitude": 90.4185,
      "star_rating": 3,
      "guest_rating": 3.9,
      "number_of_reviews": 250,
      "price_per_night_bdt": 3200,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "রেস্তোরাঁ",
        "২৪ ঘন্টা ফ্রন্ট ডেস্ক",
        "লাগেজ স্টোরেজ",
        "বেসিক সুবিধা"
      ],
      "room_types": [
        "সিঙ্গেল রুম",
        "ডাবল রুম",
        "বাজেট টুইন রুম"
      ],
      "description": "সিটি সেন্টার ইন ঢাকার ব্যস্ত বাণিজ্যিক এলাকার কেন্দ্রস্থলে সাশ্রয়ী এবং সুবিধাজনক আবাস সরবরাহ করে। বাজেট-সচেতন ভ্রমণকারীদের জন্য উপযুক্ত।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg"
      ],
      "contact_number": "+৮৮০ 2 7766554",
      "email": "bookings@citycenterinn.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    },
    {
      "hotel_id": "H004",
      "name": "গ্রিন ওয়েসিস রিসোর্ট",
      "address": "ঢাকার উপকণ্ঠে (নির্দিষ্ট ঠিকানা যোগ করা হবে)",
      "latitude": null,
      "longitude": null,
      "star_rating": 4,
      "guest_rating": 4.5,
      "number_of_reviews": 180,
      "price_per_night_bdt": 6800,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "সুইমিং পুল",
        "রেস্তোরাঁ",
        "বাগান",
        "বিনোদনমূলক কার্যকলাপ",
        "ফ্যামিলি রুম"
      ],
      "room_types": [
        "কুটির",
        "ডিলাক্স ফ্যামিলি রুম",
        "স্ট্যান্ডার্ড রুম"
      ],
      "description": "গ্রিন ওয়েসিস রিসোর্টে শহরের কোলাহল থেকে মুক্তি পান। সবুজ শ্যামল পরিবেশে এবং বিনোদনমূলক সুবিধা উপভোগ করুন।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/green_oasis_2.jpg"
      ],
      "contact_number": "+৮৮০ 1611XXXXXX",
      "email": "inquiries@greenoasisresort.com",
      "check_in_time": "১৫:০০",
      "check_out_time": "১১:০০"
    },
    {
      "hotel_id": "H005",
      "name": "কমফোর্ট স্টে ঢাকা",
      "address": "৬৭ মিরপুর রোড, ঢাকা-১২০৭, বাংলাদেশ",
      "latitude": 23.7456,
      "longitude": 90.3789,
      "star_rating": 3,
      "guest_rating": 4.0,
      "number_of_reviews": 120,
      "price_per_night_bdt": 4200,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "রেস্তোরাঁ",
        "রুম সার্ভিস",
        "এয়ার কন্ডিশনার",
        "ব্যক্তিগত বাথরুম"
      ],
      "room_types": [
        "স্ট্যান্ডার্ড সিঙ্গেল",
        "স্ট্যান্ডার্ড ডাবল",
        "এক্সিকিউটিভ ডাবল"
      ],
      "description": "কমফোর্ট স্টে ঢাকা মিরপুর রোডের একটি সুবিধাজনক স্থানে পরিষ্কার এবং আরামদায়ক কক্ষ সরবরাহ করে, যা শহরের বিভিন্ন স্থানে সহজে যাতায়াতযোগ্য।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg"
      ],
      "contact_number": "+৮৮০ 1922XXXXXX",
      "email": "reservations@comfortstaydhaka.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    },
    {
      "hotel_id": "H006",
      "name": "প্যান প্যাসিফিক সোনারগাঁও ঢাকা",
      "address": "১০৭ কাজী নজরুল ইসলাম এভিনিউ, ঢাকা ১২১৫, বাংলাদেশ",
      "latitude": 23.7480,
      "longitude": 90.3840,
      "star_rating": 5,
      "guest_rating": 4.6,
      "number_of_reviews": 680,
      "price_per_night_bdt": 9800,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "একাধিক রেস্তোরাঁ",
        "বার/লাউঞ্জ",
        "সুইমিং পুল",
        "স্পা",
        "ফিটনেস সেন্টার",
        "বিজনেস সেন্টার",
        "কনসিয়ার্জ",
        "২৪ ঘন্টা রুম সার্ভিস"
      ],
      "room_types": [
        "ডিল্যাক্স রুম",
        "প্রিমিয়ার রুম",
        "ক্লাব রুম",
        "এক্সিকিউটিভ স্যুট"
      ],
      "description": "প্যান প্যাসিফিক সোনারগাঁও ঢাকা একটি পাঁচ তারকা হোটেল, যা শহরের কেন্দ্রস্থলে অবস্থিত এবং অত্যাধুনিক সুবিধা এবং আতিথেয়তার জন্য পরিচিত।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/sonargaon_2.jpg"
      ],
      "contact_number": "+৮৮০ 2 5500111",
      "email": "reservation.dhaka@panpacific.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    },
    {
      "hotel_id": "H007",
      "name": "হোটেল আমারি ঢাকা",
      "address": "৪১ কামাল আতাতুর্ক এভিনিউ, ঢাকা ১২১৩, বাংলাদেশ",
      "latitude": 23.8050,
      "longitude": 90.4100,
      "star_rating": 5,
      "guest_rating": 4.5,
      "number_of_reviews": 550,
      "price_per_night_bdt": 9200,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "রুফটপ পুল",
        "স্পা",
        "ফিটনেস সেন্টার",
        "একাধিক রেস্তোরাঁ",
        "বার",
        "ব্যবসায়িক সুবিধা"
      ],
      "room_types": [
        "সুপিরিয়র রুম",
        "ডিল্যাক্স রুম",
        "গ্র্যান্ড ডিল্যাক্স রুম",
        "এক্সিকিউটিভ ক্লাব রুম"
      ],
      "description": "হোটেল আমারি ঢাকা একটি আধুনিক এবং বিলাসবহুল হোটেল, যা গুলশানের কেন্দ্রস্থলে অবস্থিত এবং রুফটপ পুল ও স্পা-এর জন্য পরিচিত।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/amari_2.jpg"
      ],
      "contact_number": "+৮৮০ 2 5566200",
      "email": "reservations.dhaka@amari.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    },
    {
      "hotel_id": "H008",
      "name": "বেস্ট ওয়েস্টার্ন প্লাস ম্যাপল লিফ",
      "address": "৯/এ উত্তর গুলশান বাণিজ্যিক এলাকা, ঢাকা ১২১২, বাংলাদেশ",
      "latitude": 23.7950,
      "longitude": 90.4050,
      "star_rating": 4,
      "guest_rating": 4.4,
      "number_of_reviews": 420,
      "price_per_night_bdt": 6200,
      "amenities": [
        "ফ্রি ওয়াই-ফাই",
        "রেস্তোরাঁ",
        "বার",
        "ফিটনেস সেন্টার",
        "ব্যবসায়িক কেন্দ্র",
        "কনফারেন্স রুম"
      ],
      "room_types": [
        "স্ট্যান্ডার্ড রুম",
        "সুপিরিয়র রুম",
        "ডিল্যাক্স রুম",
        "এক্সিকিউটিভ স্যুট"
      ],
      "description": "বেস্ট ওয়েস্টার্ন প্লাস ম্যাপল লিফ গুলশানের কেন্দ্রস্থলে অবস্থিত একটি আধুনিক হোটেল, যা ব্যবসায়িক এবং অবসর ভ্রমণকারীদের জন্য উপযুক্ত।",
      "image_urls": [
        "https://i.ibb.co.com/CK92SnJx/2.jpg",
        // "/assets/hotels/maple_leaf_2.jpg"
      ],
      "contact_number": "+৮৮০ 2 8833600",
      "email": "reservation@bestwesternplusmapleleaf.com",
      "check_in_time": "১৪:০০",
      "check_out_time": "১২:০০"
    }
  ]
  export default hotelData;