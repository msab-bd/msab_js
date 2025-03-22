"use client";
import LatestBlogCard from "@/components/allCard/LatestBlogCard";
import blogData from "@/utils/blogData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const LatestBlog = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 md:w-10/12 mx-auto py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          সর্বশেষ ব্লগ পোস্ট
        </h2>
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              1024: { slidesPerView: 3 },
              1480: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {blogData?.map((item) => (
              <SwiperSlide key={item?.id}>
                <LatestBlogCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
