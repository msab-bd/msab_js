
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FacebookAdsCard = ({ ad }) => {
  const {
    campaign_name,
    budget,
    duration,
    reach,
    image_urls,
    description,
  } = ad;

  return (
    <Card className="w-9/12 mx-auto rounded-2xl shadow-md pt-0 flex flex-col justify-between h-full">
      {/* Card Header */}
      <CardHeader className="px-0">
        <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
          <Image
            src={image_urls?.[0] || "/placeholder.jpg"}
            alt={campaign_name}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <CardTitle className="text-xl px-5 font-semibold mt-3">{campaign_name}</CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="text-[15px] flex-grow flex flex-col justify-between">
        <div className='text-[15px] font-bold '>
          <p><strong>Budget:</strong> {budget}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Reach:</strong> {reach}</p>
          <p className="text-[15px] font-bold text-gray-700 mb-2">{description}</p>
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

export default FacebookAdsCard;


