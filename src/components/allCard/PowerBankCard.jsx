'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const PowerBankCard = ({ powerBank }) => {
  const {
    name,
    brand,
    price,
    features,
    image_urls,
    contact_number,
    email,
    description,
  } = powerBank;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:scale-[1.02] duration-300 h-full">
      {/* Image */}
      {image_urls && image_urls.length > 0 && (
        <div className="relative w-full h-40 flex-shrink-0">
          <Image
            src={image_urls[0]}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="rounded-t-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{brand}</p>
          <p className="text-green-600 font-bold text-md my-1">৳ {price}</p>
          <p className="text-xs text-gray-700 mb-2">{description}</p>
        </div>

        {/* Features */}
        <ul className="list-disc list-inside text-gray-600 text-xs mb-2">
          {features.slice(0, 2).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {features.length > 2 && (
            <li className="text-blue-500 cursor-pointer hover:underline">
              + আরও
            </li>
          )}
        </ul>

        {/* Contact */}
        <p className="text-gray-600 text-xs">যোগাযোগ: {contact_number}</p>
        <p className="text-gray-600 text-xs mb-2">ইমেইল: {email}</p>

        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 rounded-md">
          বিস্তারিত দেখুন
        </Button>
      </div>
    </div>
  );
};

export default PowerBankCard;
