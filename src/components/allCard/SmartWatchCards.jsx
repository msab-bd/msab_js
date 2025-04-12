'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card className="w-9/12 mx-auto rounded-2xl shadow-md pt-0 flex flex-col justify-between h-full">           

            {/* Card Header */}
            <CardHeader className="px-0">
                <div className="w-full h-full relative overflow-hidden rounded-t-xl">
                    <Image
                        src={image_urls[0]}
                        alt={name}
                        layout="responsive"
                        width={300}
                        height={300}
                        className="object-cover rounded-full"
                    />
                </div>
                <CardTitle className="text-xl px-5 font-semibold mt-3">{name}</CardTitle>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="text-[15px] flex-grow flex flex-col justify-between">
                <div>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Price:</strong> ৳{price}</p>
                    <p className="text-[15px] font-bold text-gray-700 mb-2">{description}</p>
                    
                    {/* Features List */}
                    <ul className="list-disc list-inside text-black text-[15px] font-semibold mb-2 max-h-24 overflow-y-auto pr-2">
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                        {features.length > 3 && (
                            <li className="text-blue-500 cursor-pointer hover:underline">
                                + {features.length - 3} আরও
                            </li>
                        )}
                    </ul>
                </div>
            </CardContent>

            {/* Card Footer */}
            <CardFooter>
                <Button className="w-full bg-green-700 hover:bg-green-900 text-white text-[18px] py-2 rounded-md">
                    বিস্তারিত দেখুন
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SmartWatchCard;



