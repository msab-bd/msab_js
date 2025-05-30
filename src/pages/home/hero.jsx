
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const images = [
    "https://i.ibb.co.com/mrdQznXT/7367536-3646377.jpg",
    "https://i.ibb.co.com/0RnwrXXk/26413004-7196188.jpg",
    "https://i.ibb.co.com/wFBR7LFC/1173998-132943-OS5-KR7-449.jpg",
    
    "https://i.ibb.co.com/ynd9MRjH/7118797-3426296.jpg",
    "https://i.ibb.co.com/s9PNJPXH/9319770-4136942.jpg",
    
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-12 lg:py-16 gap-6 lg:gap-12">
      {/* Left Column (Slider - Larger) */}
      <div className="w-full lg:w-2/3">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-lg shadow-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[550px]">
                <Image
                  src={image}
                  alt={`Slider Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Column (Chat Button - Smaller) */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <button className="bg-red-700 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          তৎক্ষণাৎ আলাপ
        </button>
      </div>
    </section>
  );
};

export default Hero;

