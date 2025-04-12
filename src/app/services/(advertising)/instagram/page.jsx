
import FacebookAdsCard from '@/components/allCard/FacebookAdsCard';
import instagramAdsData from '@/utils/instagramAdsData';
import React from 'react'

const Page = () => {
    return (
      <div className='w-11/12 mx-auto md:w-10/12'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
          {instagramAdsData.map((ad) => (
            <div key={ad.ad_id}>
              <FacebookAdsCard ad={ad} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Page;