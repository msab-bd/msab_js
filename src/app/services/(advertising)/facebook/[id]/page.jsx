'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import facebookAdsData from '@/utils/facebookAdsData';

const FacebookAdDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundAd = facebookAdsData.find((item) => item.ad_id === parseInt(id));
    if (!foundAd) {
      router.push('/404');
    } else {
      setAd(foundAd);
    }
  }, [params, router]);

  if (!ad) {
    return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
  }

  const {
    ad_id,
    platform,
    campaign_name,
    target_audience,
    budget,
    duration,
    reach,
    engagement,
    image_urls,
    description,
    contact_number,
    email,
  } = ad;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader className="relative h-64 overflow-hidden rounded-t-lg">
          {image_urls && image_urls.length > 0 && (
            <Image
              src={image_urls[0]}
              alt={campaign_name}
              fill
              className="object-contain bg-gray-100"
              sizes="100%"
            />
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-semibold mb-4">{campaign_name}</CardTitle>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong className="text-gray-900">প্ল্যাটফর্ম:</strong> {platform}
            </p>
            <p>
              <strong className="text-gray-900">লক্ষ্য দর্শক:</strong> {target_audience}
            </p>
            <p>
              <strong className="text-gray-900">বাজেট:</strong> {budget}
            </p>
            <p>
              <strong className="text-gray-900">সময়কাল:</strong> {duration}
            </p>
            <p>
              <strong className="text-gray-900">রিচ:</strong> {reach}
            </p>
            <p>
              <strong className="text-gray-900">এনগেজমেন্ট:</strong> {engagement}
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
        <div className="p-6 flex gap-2 justify-end">
          <Button>যোগাযোগ করুন</Button>
          <Link href="/services/facebook">
            <Button className={"bg-green-700 hover:bg-green-900 cursor-pointer"} variant="outline">ফেসবুক বিজ্ঞাপনের তালিকায় ফিরে যান</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default FacebookAdDetailsPage;