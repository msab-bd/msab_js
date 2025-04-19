// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, Star } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';

// const HotelCard = ({ hotel }) => {
//     const {
//         name,
//         address,
//         star_rating,
//         guest_rating,
//         number_of_reviews,
//         price_per_night_bdt,
//         amenities,
//         description,
//         image_urls,
//     } = hotel;

//     return (
//         <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
//             {image_urls && image_urls.length > 0 && (
//                 <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
//                     <Image
//                         src={image_urls[0]}
//                         alt={name}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
//                     />
//                 </div>
//             )}

//             <div className="flex flex-col justify-between p-4 flex-grow">
//                 <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//                     <p className="text-gray-600 text-sm flex items-center mb-1">
//                         <MapPin className="mr-1 h-8 w-8" /> {address}
//                     </p>

//                     <div className="flex items-center mb-2">
//                         {[...Array(star_rating)].map((_, index) => (
//                             <Star key={index} className="text-yellow-500 h-4 w-4 mr-1" />
//                         ))}
//                         <span className="text-gray-500 text-sm">({star_rating} Star)</span>
//                     </div>

//                     <p className="text-green-600 font-bold text-lg mb-2">
//                         ৳ {price_per_night_bdt} <span className="text-gray-500 text-sm">/ night</span>
//                     </p>

//                     <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

//                     <div className="mb-3">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-1">Top Amenities:</h4>
//                         <ul className="list-disc list-inside text-gray-600 text-xs">
//                             {amenities.slice(0, 3).map((amenity, index) => (
//                                 <li key={index}>{amenity}</li>
//                             ))}
//                             {amenities.length > 3 && (
//                                 <li className="text-blue-500 cursor-pointer hover:underline">
//                                     + {amenities.length - 3} more
//                                 </li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>

//                 <div>
//                     <span className="text-gray-500 text-xs block mb-2">
//                         Guest Rating: {guest_rating} ({number_of_reviews} reviews)
//                     </span>
//                     <Button className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded-full">
//                         বিস্তারিত দেখুন
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HotelCard;



// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, Star } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// const HotelCard = ({ hotel }) => {
//     const {
//         name,
//         address,
//         star_rating,
//         guest_rating,
//         number_of_reviews,
//         price_per_night_bdt,
//         image_urls,
//     } = hotel;

//     return (
//         <Card className="w-9/12 mx-auto rounded-2xl shadow-md pt-0 flex flex-col justify-between h-full">
//             {/* Card Header */}
//             <CardHeader className="px-0">
//                 <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
//                     <Image
//                         src={image_urls[0]}
//                         alt={name}
//                         fill
//                         className="object-cover"
//                         sizes="100%"
//                     />
//                 </div>
//                 <CardTitle className="text-xl px-5 font-semibold mt-3">{name}</CardTitle>
//             </CardHeader>

//             {/* Card Content */}
//             <CardContent className="text-[15px] flex-grow">
//                 <p className="text-gray-700 font-medium mb-1">{address}</p>
//                 <div className="flex items-center mb-2">
//                     {[...Array(star_rating)].map((_, index) => (
//                         <Star key={index} className="text-yellow-500 h-4 w-4 mr-1" />
//                     ))}
//                     <span className="text-gray-500 text-sm">({star_rating} Star)</span>
//                 </div>
//                 <span className="text-gray-500 text-xs block mb-2">
//                     Guest Rating: {guest_rating} ({number_of_reviews} reviews)
//                 </span>
//                 <p><strong>প্রতি রাত:</strong> ৳{price_per_night_bdt}</p>
//             </CardContent>

//             {/* Card Footer */}
//             <CardFooter>
//                 <Button className="w-full bg-green-700 hover:bg-green-900 text-white text-[18px] py-2 rounded-md">
//                     বিস্তারিত দেখুন
//                 </Button>
//             </CardFooter>
//         </Card>
//     );
// };

// export default HotelCard;

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, Star } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle
// } from "@/components/ui/card";

// const HotelCard = ({ hotel }) => {
//     const {
//         name,
//         address,
//         star_rating,
//         guest_rating,
//         number_of_reviews,
//         price_per_night_bdt,
//         image_urls,
//     } = hotel;

//     return (
//         <Card className=" mx-auto rounded-2xl shadow-lg overflow-hidden  flex flex-col justify-between transition-transform hover:scale-[1.01] duration-200">

//             {/* Image Section */}
//             <CardHeader className="h-full w-full relative">
//                 <Image
//                     src={image_urls[0]}
//                     alt={name}
//                     fill
//                     className="object-cover w-full h-full"
//                     sizes="100%"
//                     // sizes="120vw"
//                 />
//             </CardHeader>


//             {/* Info Section */}
//             <CardContent className="p-5 text-gray-800 flex flex-col gap-2">
//                 {/* <CardTitle className="text-xl font-semibold text-black">{name}</CardTitle> */}

//                 {/* Address */}
//                 <div className="flex items-center text-sm text-gray-600">
//                     <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
//                     <span>{address}</span>
//                 </div>

//                 {/* Star Rating */}
//                 <div className="flex items-center">
//                     {[...Array(star_rating)].map((_, index) => (
//                         <Star key={index} className="text-yellow-500 h-4 w-4 mr-0.5 fill-yellow-400" />
//                     ))}
//                     <span className="text-sm text-gray-500 ml-2">({star_rating} Star)</span>
//                 </div>

//                 {/* Guest Rating */}
//                 <div className="text-xs text-gray-500">
//                     Guest Rating: <span className="font-medium text-gray-700">{guest_rating}</span> ({number_of_reviews} reviews)
//                 </div>

//                 {/* Price */}
//                 <div className="text-base font-semibold text-green-700 mt-1">
//                     প্রতি রাত: ৳{price_per_night_bdt}
//                 </div>
//             </CardContent>

//             {/* Footer Button */}
//             <CardFooter className="px-5 pb-5">
//                 <Button
//                     className="w-full bg-green-700 hover:bg-green-800 text-white text-base py-2 rounded-md"
//                     aria-label="See more hotel details"
//                 >
//                     বিস্তারিত দেখুন
//                 </Button>
//             </CardFooter>
//         </Card>
//     );
// };

// export default HotelCard;

'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const HotelCard = ({ hotel }) => {
  const {
    hotel_id, // Make sure you have hotel_id in your hotel object
    name,
    address,
    star_rating,
    guest_rating,
    number_of_reviews,
    price_per_night_bdt,
    image_urls,
  } = hotel;

  return (
    <Card className="mx-auto rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.01] duration-200">

      {/* Image Section */}
      <CardHeader className="h-48 md:h-64 w-full relative"> {/* Adjusted height for responsiveness */}
        <Image
          src={image_urls[0]}
          alt={name}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
      </CardHeader>


      {/* Info Section */}
      <CardContent className="p-5 text-gray-800 flex flex-col gap-2">
        {/* <CardTitle className="text-xl font-semibold text-black">{name}</CardTitle> */}

        {/* Address */}
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
          <span>{address}</span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center">
          {[...Array(star_rating)].map((_, index) => (
            <Star key={index} className="text-yellow-500 h-4 w-4 mr-0.5 fill-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 ml-2">({star_rating} Star)</span>
        </div>

        {/* Guest Rating */}
        <div className="text-xs text-gray-500">
          Guest Rating: <span className="font-medium text-gray-700">{guest_rating}</span> ({number_of_reviews} reviews)
        </div>

        {/* Price */}
        <div className="text-base font-semibold text-green-700 mt-1">
          প্রতি রাত: ৳{price_per_night_bdt}
        </div>
      </CardContent>

      {/* Footer Button */}
      <CardFooter className="px-5 pb-5">
        <Link href={`/services/hotel/${hotel_id}`}> {/* Added Link for navigation */}
          <Button
            className="w-full bg-green-700 cursor-pointer hover:bg-green-800 text-white text-base py-2 rounded-md"
            aria-label="See more hotel details"
          >
            বিস্তারিত দেখুন
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
