const instagramAdsData = [
    {
      ad_id: 1,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "নতুন ফ্যাশন কালেকশন",
      target_audience: "১৮-৩৫ বছর, ঢাকা ও চট্টগ্রাম, ফ্যাশনপ্রেমী",
      budget: "৳6,500",
      duration: "৭ দিন",
      reach: "২২,০০০+ মানুষ",
      engagement: "৬,০০০+ লাইক, ১,৫০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/kVLyMBp3/1676953481892.png"
      ],
      description: "নতুন ফ্যাশন কালেকশন প্রচারের জন্য ইনস্টাগ্রাম ক্যাম্পেইন।",
      contact_number: "০১৭xxxxxxxx",
      email: "fashion@insta.com"
    },
    {
      ad_id: 2,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "ফুড ব্লগ প্রমোশন",
      target_audience: "২০-৪০ বছর, খাদ্যপ্রেমী",
      budget: "৳5,000",
      duration: "৫ দিন",
      reach: "১৮,০০০+ মানুষ",
      engagement: "৪,৫০০+ লাইক, ১,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/WNtMNcyR/427-4278681-increase-sales-icon-png-download-transparent-background-growth.png"
      ],
      description: "ফুড ব্লগ এবং রেস্টুরেন্ট রিভিউ প্রচারের জন্য বিজ্ঞাপন।",
      contact_number: "০১৮xxxxxxxx",
      email: "food@insta.com"
    },
    {
      ad_id: 3,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "ফিটনেস ক্যাম্পেইন",
      target_audience: "১৮-৪৫ বছর, ফিটনেসপ্রেমী",
      budget: "৳7,500",
      duration: "১০ দিন",
      reach: "২৮,০০০+ মানুষ",
      engagement: "৭,০০০+ লাইক, ২,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/kVLyMBp3/1676953481892.png"
      ],
      description: "ফিটনেস এবং স্বাস্থ্য সচেতনতা বৃদ্ধির জন্য ক্যাম্পেইন।",
      contact_number: "০১৬xxxxxxxx",
      email: "fitness@insta.com"
    },
    {
      ad_id: 4,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "ব্র্যান্ড অ্যাওয়ারনেস",
      target_audience: "২৫-৫০ বছর, উদ্যোক্তা ও ব্যবসায়ী",
      budget: "৳9,000",
      duration: "১২ দিন",
      reach: "৩৫,০০০+ মানুষ",
      engagement: "৯,০০০+ লাইক, ২,৫০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/WNtMNcyR/427-4278681-increase-sales-icon-png-download-transparent-background-growth.png"
      ],
      description: "ব্র্যান্ড পরিচিতি বৃদ্ধির জন্য ইনস্টাগ্রাম বিজ্ঞাপন।",
      contact_number: "০১৯xxxxxxxx",
      email: "brand@insta.com"
    },
    {
      ad_id: 5,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "ট্রাভেল ব্লগ প্রমোশন",
      target_audience: "২০-৫০ বছর, ভ্রমণপ্রেমী",
      budget: "৳১০,০০০",
      duration: "১৫ দিন",
      reach: "৪৫,০০০+ মানুষ",
      engagement: "১২,০০০+ লাইক, ৩,৫০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/kVLyMBp3/1676953481892.png"
      ],
      description: "ভ্রমণ ব্লগ এবং বিশেষ ট্রাভেল প্যাকেজের জন্য বিজ্ঞাপন।",
      contact_number: "০১৫xxxxxxxx",
      email: "travel@insta.com"
    },
    {
      ad_id: 6,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "বিউটি প্রোডাক্ট প্রমোশন",
      target_audience: "১৮-৪০ বছর, বিউটি ও স্কিন কেয়ার প্রেমী",
      budget: "৳৮,০০০",
      duration: "৮ দিন",
      reach: "৩০,০০০+ মানুষ",
      engagement: "৮,০০০+ লাইক, ২,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/WNtMNcyR/427-4278681-increase-sales-icon-png-download-transparent-background-growth.png"
      ],
      description: "বিউটি প্রোডাক্ট ও স্কিন কেয়ার বিজ্ঞাপন।",
      contact_number: "০১৩xxxxxxxx",
      email: "beauty@insta.com"
    },
    {
      ad_id: 7,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "টেক গ্যাজেট ক্যাম্পেইন",
      target_audience: "১৮-৪৫ বছর, প্রযুক্তি প্রেমী",
      budget: "৳১১,০০০",
      duration: "১৪ দিন",
      reach: "৫০,০০০+ মানুষ",
      engagement: "১৫,০০০+ লাইক, ৪,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/kVLyMBp3/1676953481892.png"
      ],
      description: "নতুন প্রযুক্তি ও গ্যাজেট প্রচারের জন্য বিজ্ঞাপন।",
      contact_number: "০১৪xxxxxxxx",
      email: "tech@insta.com"
    },
    {
      ad_id: 8,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "ইভেন্ট প্রমোশন",
      target_audience: "২০-৫০ বছর, ইভেন্ট প্রেমী",
      budget: "৳৯,৫০০",
      duration: "১০ দিন",
      reach: "৪০,০০০+ মানুষ",
      engagement: "১০,০০০+ লাইক, ৩,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/WNtMNcyR/427-4278681-increase-sales-icon-png-download-transparent-background-growth.png"
      ],
      description: "বিশেষ ইভেন্ট এবং কনসার্ট প্রমোশনের জন্য ক্যাম্পেইন।",
      contact_number: "০১২xxxxxxxx",
      email: "event@insta.com"
    },
    {
      ad_id: 9,
      platform: "ইনস্টাগ্রাম",
      campaign_name: "অনলাইন কোর্স মার্কেটিং",
      target_audience: "১৮-৬০ বছর, অনলাইন শিখতে ইচ্ছুক",
      budget: "৳১২,০০০",
      duration: "২০ দিন",
      reach: "৬০,০০০+ মানুষ",
      engagement: "১৮,০০০+ লাইক, ৫,০০০+ শেয়ার",
      image_urls: [
        "https://i.ibb.co.com/kVLyMBp3/1676953481892.png"
      ],
      description: "অনলাইন কোর্স ও স্কিল ডেভেলপমেন্ট প্রচারের জন্য বিজ্ঞাপন।",
      contact_number: "০১১xxxxxxxx",
      email: "course@insta.com"
    }
  ];
  
  export default instagramAdsData;
  