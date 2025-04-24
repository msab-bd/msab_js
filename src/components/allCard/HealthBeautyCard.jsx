'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

const HealthBeautyCard = ({ service }) => {
  const {
    title,
    price,
    duration,
    benefits,
    description,
    image_urls,
    contact_number,
    email,
  } = service;

  return (
    <Card className="w-9/12 mx-auto rounded-2xl shadow-md pt-0 flex flex-col justify-between h-full">
      {/* Card Header */}
      <CardHeader className="px-0">
        <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
          <Image
            src={image_urls?.[0] || "/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover responsive-image bg-gray-100"
            sizes="100%"
          />
        </div>
        <CardTitle className="text-xl px-5 font-semibold mt-3">{title}</CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="text-[15px] flex-grow flex flex-col justify-between">
        <div className='text-[15px] font-bold space-y-1'>
          <p><strong>মূল্য:</strong> {price}</p>
          <p><strong>সময়কাল:</strong> {duration}</p>
          <p><strong>সুবিধা:</strong> {benefits}</p>
          {/* <p className="text-[15px] font-normal text-gray-700 mb-2">{description}</p> */}
          {/* <p><strong>ফোন:</strong> {contact_number}</p> */}
          {/* <p><strong>ইমেইল:</strong> {email}</p> */}
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter>
        <Link href={`/services/health-beauty/${service.id}`} className="w-full">
          <Button className="w-full cursor-pointer bg-green-700 hover:bg-green-900 text-white text-[18px] py-2 rounded-md">
            বিস্তারিত দেখুন
          </Button>

        </Link>
      </CardFooter>
    </Card>
  );
};

export default HealthBeautyCard;
