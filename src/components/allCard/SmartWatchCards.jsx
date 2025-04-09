'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const SmartWatchCard = ({ watch }) => {
    const {
        name,
        brand,
        price,
        features,
        image_urls,
        contact_number,
        email,
        description,
    } = watch;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:scale-[1.02] duration-300 h-full">
            {/* Image */}
            {image_urls && image_urls.length > 0 && (
                <div className="relative w-full h-64 md:h-96 flex-shrink-0">
                    <Image
                        src={image_urls[0]}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg md:rounded-t-none"
                    />
                </div>
            )}
            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                        <p className="text-sm text-black mb-2">{brand}</p>
                    </div>
                    <div>
                        <p className="text-green-600 font-bold text-lg mb-2">
                            ৳ {price}
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-700 mb-2">{description}</p>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">ফিচার সমূহ:
                    </h4>
                    <ul className="list-disc list-inside text-gray-800  text-xs mb-3">
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                        {features.length > 3 && (
                            <li className="text-blue-500 cursor-pointer hover:underline">
                                + {features.length - 3} আরও
                            </li>
                        )}
                    </ul>
                    <p className="text-gray-800 text-sm mb-1">যোগাযোগ: {contact_number}</p>
                    <p className="text-gray-900 text-sm mb-3">ইমেইল: {email}</p>
                    <Button className="w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 rounded-md text-sm">
                        বিস্তারিত দেখুন
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SmartWatchCard;


