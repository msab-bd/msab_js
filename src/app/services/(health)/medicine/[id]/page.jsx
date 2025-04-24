"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { medicineData } from "@/utils/service";
 // Assuming medicineData.js is in your utils directory

const MedicineDetailsPage = ({ params }) => {
  const router = useRouter();
  const [medicineDetail, setMedicineDetail] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundMedicine = medicineData.find((medicine) => medicine?.id === id);
    if (!foundMedicine) {
      router.push("/404");
    } else {
      setMedicineDetail(foundMedicine);
    }
  }, [params, router]);

  if (!medicineDetail) return <p className="text-center mt-20">লোডিং হচ্ছে...</p>;

  const {
    name,
    brand,
    category,
    price,
    discount,
    stock,
    expiry_date,
    description,
    prescription_required,
    image,
  } = medicineDetail;

  const discountedPrice = discount ? (parseFloat(price) * (1 - parseFloat(discount) / 100)).toFixed(2) : price;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{name}</h1>

        <div className="flex items-start gap-6 mb-6">
          {image && (
            <Image
              src={image}
              alt={name}
              className="w-32 h-32 object-contain rounded-md shadow-sm"
              width={128}
              height={128}
            />
          )}
          <div>
            <div className="text-xl font-semibold text-gray-800">{brand}</div>
            <div className="text-gray-600">Category: {category}</div>
            <div className="text-gray-600">Stock: {stock}</div>
            <div className="text-gray-600">Expiry Date: {expiry_date}</div>
          </div>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Pricing</h2>
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold text-green-700">৳{discountedPrice}</div>
            {discount > 0 && (
              <div className="text-gray-500 line-through">৳{price}</div>
            )}
            {discount > 0 && (
              <div className="text-sm text-red-600">({discount}% Off)</div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-700">Prescription Required:</strong>{" "}
          {prescription_required === "true" ? (
            <span className="text-red-600 font-semibold">হ্যাঁ</span>
          ) : (
            <span className="text-green-600 font-semibold">না</span>
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/services/medicine" // Adjust the link to your medicine listing page
            className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            ← ঔষধের তালিকায় ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsPage;