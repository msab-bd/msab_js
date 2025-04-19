"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import tourPackages from "@/utils/tourPackageData";

const Page = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const { id } = params; // Await params to ensure it's resolved
      const tour = tourPackages.find((item) => item?.package_id == id);
      console.log(tour, id);
      if (!tour) {
        router.push("/404");
      } else {
        setData(tour);
      }
    };

    fetchData();
  }, [params, router]);



  if (!data) {
    return <p>Loading...</p>; // Show a loading state while fetching data
  }

  const {
    name,
    location,
    duration_days,
    price_per_person_bdt,
    highlights,
    inclusions,
    description,
    image_urls,
    contact_number,
    email,
  } = data;

  return (
    <div className="max-w-4xl mx-auto  p-6">
      {/* Hero Image with Overlay Title */}
      {/* <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
        <Image
          src={image_urls[0] || "/default-image.jpg"}
          alt={name}
          layout="fill"
          // sizes="(max-width: 768px) 100vw, 50vw"
          // width={500}
          // height={300}
          objectFit="cover"
          quality={100}


          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0   bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{name}</h1>
          <p className="text-lg text-gray-300 mt-2">{location}</p>
        </div>
      </div> */}
      <div className="relative w-full h-[550px]">
              <Image
                src={image_urls[0] || "/default-image.jpg"}
                alt={ name}
                layout="fill"
                objectFit="cover"
                sizes="full-width"
                quality={100}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{name || "Package Title"}</h1>
                {location && <p className="text-lg text-gray-300 mt-2">{location}</p>}
              </div>
            </div>

      {/* Details */}
      <div className="mt-10 grid grid-rows-1 md:grid-rows-3  gap-4">
        <div>
          <p className="text-lg text-gray-700">
            <strong>বর্ণনা:</strong> {description || "বর্ণনা পাওয়া যায়নি।"}
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-700">
            <strong>সময়সীমা:</strong> {duration_days} দিন
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-700">
            <strong>মূল্য:</strong> ৳ {price_per_person_bdt} ব্যক্তি প্রতি
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">সুবিধাসমূহ</h2>
        <ul className="mt-4 list-disc list-inside">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-lg text-gray-700">{highlight}</li>
          ))}
        </ul>
      </div>

      {/* Inclusions */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">অন্তর্ভুক্ত</h2>
        <ul className="mt-4 list-disc list-inside">
          {inclusions.map((inclusion, index) => (
            <li key={index} className="text-lg text-gray-700">{inclusion}</li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">যোগাযোগ করুন</h2>
        <p className="text-lg text-gray-700 mt-2">ফোন: {contact_number}</p>
        <p className="text-lg text-gray-700">ইমেইল: {email}</p>
      </div>
      <div className="mt-8">
        <Link
          href="/services/tour"
          className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
        >
          ← ফিরে যান
        </Link>
      </div>

    </div>
  );

}

export default Page;


