
'use client'; 

import React from 'react';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HotelCard = ({ hotel }) => {
    const {
        name,
        address,
        star_rating,
        guest_rating,
        number_of_reviews,
        price_per_night_bdt,
        amenities,
        description,
        image_urls,
    } = hotel;

    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
            {/* Left: Image */}
            {image_urls && image_urls.length > 0 && (
                <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
                    <Image
                        src={image_urls[0]}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
                    />
                </div>
            )}

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-4 flex-grow">
                {/* Top Content */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm flex items-center mb-1">
                        <MapPin  className="mr-1 h-8 w-8" /> {address}
                    </p>

                    <div className="flex items-center mb-2">
                        {[...Array(star_rating)].map((_, index) => (
                            <Star key={index} className="text-yellow-500 h-4 w-4 mr-1" />
                        ))}
                        <span className="text-gray-500 text-sm">({star_rating} Star)</span>
                    </div>

                    <p className="text-green-600 font-bold text-lg mb-2">
                        ৳ {price_per_night_bdt} <span className="text-gray-500 text-sm">/ night</span>
                    </p>

                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

                    {/* Amenities */}
                    <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Top Amenities:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-xs">
                            {amenities.slice(0, 3).map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                            {amenities.length > 3 && (
                                <li className="text-blue-500 cursor-pointer hover:underline">
                                    + {amenities.length - 3} more
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Content */}
                <div>
                    <span className="text-gray-500 text-xs block mb-2">
                        Guest Rating: {guest_rating} ({number_of_reviews} reviews)
                    </span>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                        বিস্তারিত দেখুন
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
