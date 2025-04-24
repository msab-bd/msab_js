// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// // Adjust path as needed
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { beautyProducts } from '@/utils/service';

// const BeautyProductDetailsPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const { id } = params;
//     const foundProduct = beautyProducts.find((item) => item.id === parseInt(id));
//     if (!foundProduct) {
//       router.push('/404');
//     } else {
//       setProduct(foundProduct);
//     }
//   }, [params, router]);

//   if (!product) {
//     return <div className="text-center py-10">লোডিং হচ্ছে...</div>;
//   }

//   const {
//     name,
//     brand,
//     category,
//     shade,
//     price,
//     discount,
//     stock,
//     description,
//     image,
//   } = product;

//   const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <Card className="rounded-lg shadow-md">
//         <CardHeader className="relative h-full overflow-hidden rounded-t-lg">
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-fill  bg-gray-100"
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
//             {shade && (
//               <p>
//                 <strong className="text-gray-900">শেড:</strong> {shade}
//               </p>
//             )}
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
//           </div>

//           <div className="mt-6 border-t pt-4">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">বিবরণ</h2>
//             <p className="text-gray-800 leading-relaxed">{description}</p>
//           </div>
//         </CardContent>
//         <div className="p-6 flex justify-start gap-2">
//           <Button>কার্টে যোগ করুন</Button>
//           <Link href="/services/health-beauty">
//             <Button  variant="outline">বিউটি পণ্যের তালিকায় ফিরে যান</Button>
//           </Link>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default BeautyProductDetailsPage;


'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { beautyProducts } from '@/utils/service';

const BeautyProductDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundProduct = beautyProducts.find((item) => item.id === parseInt(id));
    if (!foundProduct) {
      router.push('/404');
    } else {
      setProduct(foundProduct);
    }
  }, [params, router]);

  if (!product) {
    return (
      <div className="text-center py-10">
        <p>লোডিং হচ্ছে বা পণ্যটি পাওয়া যায়নি...</p>
        <Link href="/services/health-beauty">
          <Button variant="link">পিছনে যান</Button>
        </Link>
      </div>
    );
  }

  const {
    name,
    brand,
    category,
    shade,
    price,
    discount,
    stock,
    description,
    longDescription,
    image,
  } = product;

  const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price;

  return (
    <>
      <Head>
        <title>{name} | বিউটি প্রোডাক্ট</title>
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <Card className="rounded-lg shadow-md">
          <CardHeader className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="100%"
            />
          </CardHeader>

          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
              {discount > 0 && (
                <Badge className="bg-green-100 text-green-800">
                  {discount}% ছাড়
                </Badge>
              )}
            </div>

            <div className="space-y-2 text-gray-700">
              <p><strong className="text-gray-900">ব্র্যান্ড:</strong> {brand}</p>
              <p><strong className="text-gray-900">ক্যাটাগরি:</strong> {category}</p>
              {shade && (
                <p><strong className="text-gray-900">শেড:</strong> {shade}</p>
              )}
              <p>
                <strong className="text-gray-900">মূল দাম:</strong> ৳{price}
                {discount > 0 && (
                  <span className="ml-2 text-green-600">(-{discount}%)</span>
                )}
              </p>
              {discount > 0 && (
                <p className="text-gray-500 line-through">৳{price}</p>
              )}
              <p><strong className="text-gray-900">ছাড়ের পরে দাম:</strong> ৳{discountedPrice}</p>
              <p><strong className="text-gray-900">স্টক:</strong> {stock} টি</p>
            </div>

            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">বিবরণ</h2>
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {longDescription || description}
              </p>
            </div>
          </CardContent>

          <div className="p-6 flex flex-wrap gap-2">
            <Button disabled={stock === 0}>
              {stock === 0 ? 'স্টকে নেই' : 'কার্টে যোগ করুন'}
            </Button>
            <Link href="/services/health-beauty">
              <Button  className={'justify-start bg-green-700 hover:bg-green-900'} variant="outline">তালিকায় ফিরে যান</Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default BeautyProductDetailsPage;
