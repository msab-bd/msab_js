import React from 'react';
import { Star, Phone, Globe } from 'lucide-react'; // Import Phone and Globe icons
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import Link from 'next/link';

const HospitalCard = ({ hospitalItem }) => {
  const {
    hospitalName,
    address,
    contactNumber,
    imageUrl,
    departments,
    website,
  } = hospitalItem?.hospital || {};

  return (
    <Card className="w-full rounded-2xl shadow-md overflow-hidden py-0">
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={hospitalName}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CardContent className="px-4 space-y-2">
        <CardTitle className="text-lg font-semibold">{hospitalName}</CardTitle>
        <p className="text-sm text-gray-500">{address}</p>

        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            {/* You might want to add a rating property to your hospital data */}
            {/* For now, just display 4.5 or something similar if you don't have rating data. */}
            Rating 4.5
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 text-gray-500 mr-2" />
            <span>{contactNumber}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Globe className="w-4 h-4 text-gray-500 mr-2" />
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {website}
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Departments: {departments ? departments.join(', ') : 'N/A'}
        </p>
      </CardContent>

      <CardFooter className="p-4">
        <Link href={`/services/hospital/${hospitalItem.appointmentId}`} className="w-full">
          <Button className="w-full cursor-pointer text-base">
            ভিজিট করুন
          </Button>


        </Link>
      </CardFooter>
    </Card>
  );
};

export default HospitalCard;