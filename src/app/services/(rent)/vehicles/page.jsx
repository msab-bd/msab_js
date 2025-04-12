import VehicleCard from '@/components/allCard/VehicleCard';
import vehiclesData from '@/utils/vehiclesData';
import React from 'react'
const page = () => {


    return (
      <div className='w-11/12 mx-auto md:w-10/12'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-10">
          {vehiclesData.map((item, index) => (
            <div key={item.id}>
              <VehicleCard item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default page