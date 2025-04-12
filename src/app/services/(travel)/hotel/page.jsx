import React from 'react'




import HotelCard from '@/components/allCard/HotelRentCart';
import hotelData from '@/utils/hotelData';

const page = () => {
 

  return (
    <div className='w-11/12 mx-auto md:w-10/12'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-10">
        {hotelData.map((hotel, index) => (
          <div key={hotel.hotel_id}>
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page