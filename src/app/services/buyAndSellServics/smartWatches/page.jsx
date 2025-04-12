// import SmartWatchCard from '@/components/allCard/smartWatchCard';

import SmartWatchCard from '@/components/allCard/SmartWatchCards';
import smartWatches from '@/utils/snartWatchesData';
// import smartWatchCard from "@/components/allCard/smartWatchCard"

import React from 'react';

const page = () => {
    return (
        <div className="container mx-auto py-8">
            {/* <h1 className="text-2xl font-bold mb-4">স্মার্ট ঘড়ি</h1> */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {smartWatches.map((watch) => (
                    < SmartWatchCard key={watch.product_id} watch={watch} />
                ))}
            </div>
        </div>
    );
};

export default page;
