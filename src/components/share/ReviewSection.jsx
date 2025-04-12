'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { reviewData } from '@/utils/service'
import ReviewCard from '../allCard/ReviewCard'

const ReviewSection = () => {
  const swiperRef = useRef(null)

  return (
    <div className='w-10/12 mx-auto py-10 relative'>
        <p className='text-2xl font-bold text-center mb-4'>প্রয়োজনীয় মন্তব্য সমূহ </p>
      {/* Navigation buttons */}
      <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-800 text-white p-2 rounded-full shadow"
        >
          ◀
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-800 text-white p-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation={false}
        modules={[FreeMode, Navigation, Autoplay]}
        className='mySwiper'
      >
        {reviewData?.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewSection
