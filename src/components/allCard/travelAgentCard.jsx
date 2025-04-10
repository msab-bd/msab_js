
"use client";
import React from 'react';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TravelAgentCard = ({ agent }) => {
    const {
        name,
        location,
        agency_name,
        contact_number,
        image_urls,
        services,
        description,
    } = agent;

    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
            {/* Left: Image */}
            {image_urls && image_urls.length > 0 && (
                <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
                    <Image
                        src={image_urls[0]}
                        alt={`${name} image`}
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
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{agency_name}</p>

                    <p className="text-gray-600 text-sm flex items-center mb-1">
                        <MapPin className="mr-1 h-4 w-4 md:h-5 md:w-5" /> {location}
                    </p>

                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

                    {/* Services */}
                    <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">সেবা সমূহ:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-xs">
                            {services.slice(0, 3).map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                            {services.length > 3 && (
                                <li className="text-blue-500 cursor-pointer hover:underline">
                                    + {services.length - 3} আরও
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Content */}
                <div>
                    <span className="text-gray-500 text-xs block mb-2 flex items-center">
                        <Phone className="mr-1 h-3 w-3 md:h-4 md:w-4" /> {contact_number}
                    </span>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full text-sm md:text-base">
                        বিস্তারিত দেখুন
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TravelAgentCard;