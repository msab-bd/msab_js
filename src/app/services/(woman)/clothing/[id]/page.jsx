// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
//  // Adjust path as needed
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { clothingData } from '@/utils/service';

// const ClothingDetailsPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const [clothingItem, setClothingItem] = useState(null);

//   useEffect(() => {
//     const { id } = params;
//     const foundItem = clothingData.find((item) => item.id === id);
//     if (!foundItem) {
//       router.push('/404');
//     } else {
//       setClothingItem(foundItem);
//     }
//   }, [params, router]);

//   if (!clothingItem) {
//     return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
//   }

//   const {
//     name,
//     brand,
//     category,
//     price,
//     discount,
//     stock,
//     size,
//     color,
//     material,
//     description,
//     image,
//   } = clothingItem;

//   const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <Card className="rounded-lg shadow-md">
//         <CardHeader className="relative h-64 overflow-hidden rounded-t-lg">
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover bg-gray-100"
//             sizes="100%"
//           />
//         </CardHeader>
//         <CardContent className="p-6">
//           <CardTitle className="text-2xl font-semibold mb-4">{name}</CardTitle>
//           <div className="space-y-2 text-gray-700">
//             <p>
//               <strong className="text-gray-900">ব্র্যান্ড:</strong> {brand}
//             </p>
//             <p>
//               <strong className="text-gray-900">ক্যাটাগরি:</strong> {category}
//             </p>
//             <p>
//               <strong className="text-gray-900">বিবরণ:</strong> {description}
//             </p>
//             <p>
//               <strong className="text-gray-900">মূল দাম:</strong> ৳{price}
//               {discount > 0 && (
//                 <span className="ml-2 text-green-600">(-{discount}%)</span>
//               )}
//             </p>
//             {discount > 0 && (
//               <p className="text-gray-500 line-through">৳{price}</p>
//             )}
//             <p>
//               <strong className="text-gray-900">ছাড়ের পরে দাম:</strong> ৳{discountedPrice}
//             </p>
//             <p>
//               <strong className="text-gray-900">স্টক:</strong> {stock} টি
//             </p>
//             <p>
//               <strong className="text-gray-900">সাইজ:</strong> {size.join(', ')}
//             </p>
//             <p>
//               <strong className="text-gray-900">রঙ:</strong> {color}
//             </p>
//             <p>
//               <strong className="text-gray-900">উপাদান:</strong> {material}
//             </p>
//           </div>
//         </CardContent>
//         <div className="p-6 flex justify-end gap-2">
//           <Button>কার্টে যোগ করুন</Button>
//           <Link href="//services/clothing">
//             <Button variant="outline">পোশাকের তালিকায় ফিরে যান</Button>
//           </Link>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ClothingDetailsPage;

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
 // Adjust path as needed
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clothingData } from '@/utils/service';

const ClothingDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [clothingItem, setClothingItem] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundItem = clothingData.find((item) => item.id === id);
    if (!foundItem) {
      router.push('/404');
    } else {
      setClothingItem(foundItem);
    }
  }, [params, router]);

  if (!clothingItem) {
    return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
  }

  const {
    name,
    brand,
    category,
    price,
    discount,
    stock,
    size,
    color,
    material,
    description,
    care,
    fabricQuality,
    usage,
    image,
  } = clothingItem;

  const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-lg shadow-md">
        <CardHeader className="relative h-96 overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain bg-gray-100"
            sizes="100%"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-3xl font-semibold mb-4">{name}</CardTitle>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong className="text-gray-900">ব্র্যান্ড:</strong> {brand}
            </p>
            <p>
              <strong className="text-gray-900">ক্যাটাগরি:</strong> {category}
            </p>
            <p>
              <strong className="text-gray-900">মূল দাম:</strong> ৳{price}
              {discount > 0 && (
                <span className="ml-2 text-green-600">(-{discount}%)</span>
              )}
            </p>
            {discount > 0 && (
              <p className="text-gray-500 line-through">৳{price}</p>
            )}
            <p>
              <strong className="text-gray-900">ছাড়ের পরে দাম:</strong> ৳{discountedPrice}
            </p>
            <p>
              <strong className="text-gray-900">স্টক:</strong> {stock} টি
            </p>
            <p>
              <strong className="text-gray-900">সাইজ:</strong> {size.join(', ')}
            </p>
            <p>
              <strong className="text-gray-900">রঙ:</strong> {color}
            </p>
            <p>
              <strong className="text-gray-900">উপাদান:</strong> {material}
            </p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">বিবরণ</h2>
            <p className="text-gray-800 leading-relaxed">{description}</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">যত্ন</h2>
            <p className="text-gray-800 leading-relaxed">{care}</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">কাপড়ের গুণমান</h2>
            <p className="text-gray-800 leading-relaxed">{fabricQuality}</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">ব্যবহার</h2>
            <p className="text-gray-800 leading-relaxed">{usage}</p>
          </div>
        </CardContent>
        <div className="p-6 flex justify-end gap-2">
          <Button>কার্টে যোগ করুন</Button>
          <Link href="/services/clothing">
            <Button className={'cursor-pointer bg-green-700 hover:bg-geen-900'} variant="outline">পোশাকের তালিকায় ফিরে যান</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ClothingDetailsPage;