// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { MapPin, Star, Phone, Mail } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const HotelDetailsPage = ({ hotel }) => {
//     const [paymentDetails, setPaymentDetails] = useState({
//         cardNumber: '',
//         expiry: '',
//         cvv: '',
//     });

//     const handlePaymentChange = (e) => {
//         setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
//     };

//     const handlePaymentSubmit = (e) => {
//         e.preventDefault();
//         // Implement your payment processing logic here
//         console.log('Payment Details:', paymentDetails);
//         alert('Payment successful! (Simulated)');
//     };

//     if (!hotel) {
//         return <p>Hotel not found.</p>;
//     }

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
//         contact_number,
//         email,
//         check_in_time,
//         check_out_time,
//         room_types,
//     } = hotel;

//     return (
//         <div className="container mx-auto p-4">
//             <div className="md:flex md:space-x-4">
//                 {/* Left: Hotel Details */}
//                 <div className="md:w-2/3">
//                     <Card className="mb-4">
//                         <CardHeader>
//                             <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             {image_urls && image_urls.length > 0 && (
//                                 <div className="relative w-full h-64 mb-4">
//                                     <Image
//                                         src={image_urls[0]}
//                                         alt={name}
//                                         layout="fill"
//                                         objectFit="cover"
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                             )}
//                             <p className="text-gray-600 flex items-center mb-2">
//                                 <MapPin className="mr-1 h-5 w-5" /> {address}
//                             </p>
//                             <div className="flex items-center mb-2">
//                                 {[...Array(star_rating)].map((_, index) => (
//                                     <Star key={index} className="text-yellow-500 h-4 w-4 mr-1" />
//                                 ))}
//                                 <span className="text-gray-500 text-sm">({star_rating} Star)</span>
//                             </div>
//                             <p className="text-green-600 font-bold text-lg mb-2">
//                                 ৳ {price_per_night_bdt} <span className="text-gray-500 text-sm">/ night</span>
//                             </p>
//                             <p className="text-gray-700 mb-4">{description}</p>
//                             <h4 className="font-semibold mb-2">Amenities:</h4>
//                             <ul className="list-disc list-inside text-gray-600 mb-4">
//                                 {amenities.map((amenity, index) => (
//                                     <li key={index}>{amenity}</li>
//                                 ))}
//                             </ul>
//                             <h4 className="font-semibold mb-2">Room Types:</h4>
//                             <ul className="list-disc list-inside text-gray-600 mb-4">
//                                 {room_types.map((room, index) => (
//                                     <li key={index}>{room}</li>
//                                 ))}
//                             </ul>
//                             <p className="text-gray-600 flex items-center mb-1">
//                                 <Phone className="mr-1 h-5 w-5" /> {contact_number}
//                             </p>
//                             <p className="text-gray-600 flex items-center mb-1">
//                                 <Mail className="mr-1 h-5 w-5" /> {email}
//                             </p>
//                             <p>Check-in: {check_in_time}, Check-out: {check_out_time}</p>
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {/* Right: Payment Section */}
//                 <div className="md:w-1/3">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Payment</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <form onSubmit={handlePaymentSubmit}>
//                                 <div className="grid gap-4">
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="cardNumber">Card Number</Label>
//                                         <Input type="text" id="cardNumber" name="cardNumber" value={paymentDetails.cardNumber} onChange={handlePaymentChange} />
//                                     </div>
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="expiry">Expiry (MM/YY)</Label>
//                                         <Input type="text" id="expiry" name="expiry" value={paymentDetails.expiry} onChange={handlePaymentChange} />
//                                     </div>
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="cvv">CVV</Label>
//                                         <Input type="text" id="cvv" name="cvv" value={paymentDetails.cvv} onChange={handlePaymentChange} />
//                                     </div>
//                                     <Button type="submit" className="w-full">Pay Now</Button>
//                                 </div>
//                             </form>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };



// export default HotelDetailsPage;


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
//  // Update path as needed
// import { Star } from "lucide-react";
// import hotelData from "@/utils/hotelData";

// const HotelDetailsPage = ({ params }) => {
//     const router = useRouter();
//     const [hotel, setHotel] = useState(null);

//     useEffect(() => {
//         const { id } = params;
//         const foundHotel = hotelData.find((h) => h?.hotel_id == id);
//         if (!foundHotel) {
//             router.push("/404");
//         } else {
//             setHotel(foundHotel);
//         }
//     }, [params, router]);

//     if (!hotel) return <p className="text-center mt-20">লোড হচ্ছে...</p>;

//     const {
//         name,
//         address,
//         star_rating,
//         guest_rating,
//         number_of_reviews,
//         price_per_night_bdt,
//         image_urls,
//         description,
//     } = hotel;

//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <div className="flex flex-col">
//                 {/* Hero Section */}
//                 <div className="relative w-full h-[70vh]">
//                     <Image
//                         src={image_urls[0] || "/default-hotel.jpg"}
//                         alt={name}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
//                         <h1 className="text-4xl md:text-5xl font-bold text-white">{name}</h1>
//                         <p className="text-lg text-gray-200 mt-2">{address}</p>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
//                     {/* Description */}
//                     <div className="text-lg text-gray-800 leading-relaxed">
//                         <h2 className="text-2xl font-bold mb-4">বিবরণ</h2>
//                         <p>{description || "এই হোটেলের বিস্তারিত বিবরণ এখানে পাওয়া যাবে।"}</p>
//                     </div>

//                     {/* Star & Guest Rating */}
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-900 mb-4">রেটিংস</h2>
//                         <div className="flex items-center mb-2">
//                             {[...Array(star_rating)].map((_, index) => (
//                                 <Star key={index} className="text-yellow-500 h-5 w-5 mr-1" />
//                             ))}
//                             <span className="ml-2 text-gray-600 text-sm">({star_rating} Star Hotel)</span>
//                         </div>
//                         <p className="text-gray-700">
//                             Guest Rating: {guest_rating} ⭐ ({number_of_reviews} reviews)
//                         </p>
//                     </div>

//                     {/* Price Info */}
//                     <div className="bg-gray-100 p-6 rounded-lg text-center">
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-2">মূল্য</h2>
//                         <p className="text-gray-700 text-lg font-medium">
//                             প্রতি রাত: <span className="text-green-700 font-bold">৳{price_per_night_bdt}</span>
//                         </p>
//                     </div>

//                     {/* Back Button */}
//                     <div className="text-center mt-10">
//                         <Link
//                             href="/services/hotels"
//                             className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
//                         >
//                             ← হোটেল তালিকায় ফিরে যান
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HotelDetailsPage;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
 // Update this path to your actual data file
import { Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import hotelData from "@/utils/hotelData";

const HotelDetailsPage = ({ params }) => {
    const router = useRouter();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const { id } = params;
        const foundHotel = hotelData.find((h) => h?.hotel_id == id);
        if (!foundHotel) {
            router.push("/404");
        } else {
            setHotel(foundHotel);
        }
    }, [params, router]);

    if (!hotel) return <p className="text-center mt-20">লোড হচ্ছে...</p>;

    const {
        name,
        address,
        star_rating,
        guest_rating,
        number_of_reviews,
        price_per_night_bdt,
        image_urls,
        description,
        latitude,
        longitude,
        amenities,
        room_types,
        contact_number,
        email,
        check_in,
        check_out,
    } = hotel;

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Hero Image */}
            <div className="relative w-full h-[70vh]">
                <Image
                    src={image_urls[0] || "/default-hotel.jpg"}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{name}</h1>
                    <p className="text-lg text-gray-200 mt-1">{address}</p>
                </div>
            </div>

            {/* Main Info */}
            <div className="mt-10 space-y-8">
                {/* Description */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">হোটেল বিবরণ</h2>
                    <p className="text-gray-700">{description}</p>
                </section>

                {/* Ratings */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">রেটিংস</h2>
                    <div className="flex items-center gap-2 mb-1">
                        {[...Array(star_rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-500 h-5 w-5" />
                        ))}
                        <span className="text-gray-600">({star_rating} Star Hotel)</span>
                    </div>
                    <p className="text-gray-700">
                        Guest Rating: {guest_rating}⭐ ({number_of_reviews} Reviews)
                    </p>
                </section>

                {/* Price */}
                <section className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">মূল্য</h2>
                    <p className="text-gray-700 text-lg font-medium">
                        প্রতি রাত: <span className="text-green-700 font-bold">৳{price_per_night_bdt}</span>
                    </p>
                </section>

                {/* Room Types */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">রুম টাইপ</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {room_types?.map((room, i) => (
                            <li key={i}>{room}</li>
                        ))}
                    </ul>
                </section>

                {/* Amenities */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">সুবিধাসমূহ</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {amenities?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* Check-in/out */}
                <section className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Clock className="text-green-700" />
                        <span>চেক ইন: <strong>{check_in}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-800">
                        <Clock className="text-red-700" />
                        <span>চেক আউট: <strong>{check_out}</strong></span>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="bg-gray-100 p-5 rounded-lg">
                    <h2 className="text-xl font-bold mb-3">যোগাযোগ</h2>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Phone className="h-5 w-5" /> {contact_number}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Mail className="h-5 w-5" /> {email}
                    </p>
                </section>

                {/* Location */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">অবস্থান</h2>
                    <p className="flex items-center gap-2 text-gray-700">
                        <MapPin className="h-5 w-5 text-blue-600" /> Latitude: {latitude}, Longitude: {longitude}
                    </p>
                    {/* Optional: Add map iframe if you want */}
                </section>

                {/* Back Button */}
                <div className="text-center mt-10">
                    <Link
                        href="/services/hotel"
                        className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition"
                    >
                        ← হোটেল তালিকায় ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailsPage;

