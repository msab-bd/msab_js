
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';

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
    <Card className="w-9/12 mx-auto rounded-2xl shadow-md pt-0 flex flex-col justify-between h-full">

      {/* Card Header */}
      <CardHeader className="px-0">
        <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
          <Image
            src={image_urls[0]}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <CardTitle className="text-xl px-5 font-semibold mt-3">{name}</CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="text-[15px]  flex-grow flex flex-col justify-between">
        <div>
          <p><strong>Price:</strong> ৳{price}</p>
          {/* <p className="text-[15px] font-bold text-gray-700 mb-2">{description}</p> */}

          {/* Features List - scrollable if too long */}
          <ul className="list-disc list-inside text-black text-[15px]  font-semibold mb-2 max-h-24 overflow-y-auto pr-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter>
        <Link href={`/services/powerBank/${powerBank.product_id}`} className="w-full">

          <Button className="w-full cursor-pointer bg-green-700 hover:bg-green-900 text-white text-[18px]  py-2 rounded-md">
            বিস্তারিত দেখুন
          </Button>

        </Link>
      </CardFooter>
    </Card>
  );
};

export default PowerBankCard;


