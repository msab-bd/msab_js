'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
 // Adjust path as needed
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import headphonesData from '@/utils/headphonesData';

const HeadphoneDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [headphone, setHeadphone] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundHeadphone = headphonesData.find((item) => item.product_id === id);
    if (!foundHeadphone) {
      router.push('/404');
    } else {
      setHeadphone(foundHeadphone);
    }
  }, [params, router]);

  if (!headphone) {
    return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
  }

  const {
    product_id,
    category,
    name,
    brand,
    price,
    features,
    contact_number,
    email,
    description,
    image_urls,
  } = headphone;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader className="relative h-64 overflow-hidden rounded-t-lg">
          {image_urls && image_urls.length > 0 && (
            <Image
              src={image_urls[0]}
              alt={name}
              fill
              className="object-contain bg-gray-100"
              sizes="100%"
            />
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-semibold mb-4">{name}</CardTitle>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong className="text-gray-900">ব্র্যান্ড:</strong> {brand}
            </p>
            <p>
              <strong className="text-gray-900">ক্যাটাগরি:</strong> {category}
            </p>
            <p>
              <strong className="text-gray-900">মূল্য:</strong> ৳{price}
            </p>
            <div>
              <strong className="text-gray-900">ফিচারসমূহ:</strong>
              <ul className="list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
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
        <div className="p-6 flex gap-3 justify-end">
          <Button>কার্টে যোগ করুন</Button>
          <Link href="/services/headPhone">
            <Button className={"bg-green-700 hover:bg-green-900 cursor-pointer "} variant="outline">হেডফোনের তালিকায় ফিরে যান</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HeadphoneDetailsPage;