

import TourPackageCard from '@/components/allCard/TourPackageCard';
import tourPackages from '@/utils/tourPackageData';



const page = () => {


  return (
    <div className='w-11/12 mx-auto md:w-10/12'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {tourPackages.map((tour) => (
          <div key={tour.package_id}>
            <TourPackageCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
