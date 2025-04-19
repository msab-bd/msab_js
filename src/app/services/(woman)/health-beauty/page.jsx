

import HealthBeautyCard from '@/components/allCard/HealthBeautyCard';
import healthBeautyData from '@/utils/health&BeautyData';
import React from 'react'

const Page = () => {
    return (
      <div className='w-11/12 mx-auto md:w-10/12'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
          {healthBeautyData.map((service) => (
            <div key={service.ad_id}>
              <HealthBeautyCard service={service} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Page;