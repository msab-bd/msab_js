'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import HouseRentCard from '@/components/allCard/HouseRentCard'
import VehicleCard from '@/components/allCard/VehicleCard'
import houseData from '@/utils/cardData'
import vehiclesData from '@/utils/vehiclesData'

const Page = () => {
  const houseSwiperRef = useRef(null)
  const vehicleSwiperRef = useRef(null)

  return (
    <div className='w-11/12 mx-auto md:w-10/12 py-10 space-y-16'>

      {/* ========== House Rent Swiper ========== */}
      <div className='relative'>
        <h2 className='text-xl font-semibold mb-4'>🏠 House Rent</h2>

        <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => houseSwiperRef.current?.slidePrev()}
            className="bg-gray-700 text-white p-2 rounded-full shadow"
          >
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => houseSwiperRef.current?.slideNext()}
            className="bg-gray-700 text-white p-2 rounded-full shadow"
          >
            ▶
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (houseSwiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
        >
          {houseData.map((item, index) => (
            <SwiperSlide key={index}>
              <HouseRentCard Item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ========== Vehicle Swiper ========== */}
      <div className='relative'>
        <h2 className='text-xl font-semibold mb-4'>🚗 Vehicles</h2>

        <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => vehicleSwiperRef.current?.slidePrev()}
            className="bg-gray-700 text-white p-2 rounded-full shadow"
          >
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => vehicleSwiperRef.current?.slideNext()}
            className="bg-gray-700 text-white p-2 rounded-full shadow"
          >
            ▶
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (vehicleSwiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
        >
          {vehiclesData.map((item, index) => (
            <SwiperSlide key={index}>
              <VehicleCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default Page
