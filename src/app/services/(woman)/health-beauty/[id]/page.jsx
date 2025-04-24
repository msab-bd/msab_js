'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
 // Adjust path as needed
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import healthBeautyData from '@/utils/health&BeautyData';

const HealthBeautyDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundService = healthBeautyData.find((item) => item.id === parseInt(id));
    if (!foundService) {
      router.push('/404');
    } else {
      setService(foundService);
    }
  }, [params, router]);

  if (!service) {
    return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
  }

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
    <div className="max-w-3xl mx-auto p-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader className="relative h-64 overflow-hidden rounded-t-lg">
          {image_urls && image_urls.length > 0 && (
            <Image
              src={image_urls[0]}
              alt={title}
              fill
              className="object-cover bg-gray-100"
              sizes="100%"
            />
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-semibold mb-4">{title}</CardTitle>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong className="text-gray-900">মূল্য:</strong> {price}
            </p>
            <p>
              <strong className="text-gray-900">সময়কাল:</strong> {duration}
            </p>
            <p>
              <strong className="text-gray-900">উপকারিতা:</strong> {benefits}
            </p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">বিবরণ</h2>
            <p className="text-gray-800 leading-relaxed">{description}</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">যোগাযোগ</h2>
            <p className="text-gray-800">
              <strong className="text-gray-900">ফোন:</strong> {contact_number}
            </p>
            <p className="text-gray-800">
              <strong className="text-gray-900">ইমেইল:</strong> {email}
            </p>
          </div>
        </CardContent>
        <div className="p-6 flex justify-end">
          <Link href="/health-beauty">
            <Button variant="outline">স্বাস্থ্য ও সৌন্দর্য সেবার তালিকায় ফিরে যান</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HealthBeautyDetailsPage;