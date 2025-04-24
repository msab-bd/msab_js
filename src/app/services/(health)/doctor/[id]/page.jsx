"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import doctorData from "@/utils/doctorData"; 

const DoctorDetailsPage = ({ params }) => {
  const router = useRouter();
  const [doctorDetail, setDoctorDetail] = useState(null);

  useEffect(() => {
    const { id } = params;
    const foundDoctor = doctorData.find((doctor) => doctor?.id === id);
    if (!foundDoctor) {
      router.push("/404");
    } else {
      setDoctorDetail(foundDoctor);
    }
  }, [params, router]);

  if (!doctorDetail) return <p className="text-center mt-20">লোডিং হচ্ছে...</p>;

  const {
    name,
    degree,
    specialty,
    experience,
    bmdc_number,
    rating,
    hospital,
    consultation_fee,
    follow_up_fee,
    languages,
    consultation_time,
    patients_attended,
    avg_consultation_time,
    joined_date,
    doctor_code,
    profile_image,
  } = doctorDetail;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{name}</h1>

        <div className="flex items-start gap-6 mb-6">
          {profile_image && (
            <Image
              src={profile_image}
              alt={name}
              className="w-32 h-32 object-cover rounded-full shadow-sm"
              width={128}
              height={128}
            />
          )}
          <div>
            <div className="text-xl font-semibold text-gray-800">{degree}</div>
            <div className="text-gray-600">{specialty}</div>
            <div className="text-gray-600">অভিজ্ঞতা: {experience}</div>
            <div className="text-yellow-500">রেটিং: {rating}</div>
            <div className="text-gray-600">BMDC নম্বর: {bmdc_number}</div>
          </div>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">হাসপাতালের তথ্য</h2>
          <div>
            <strong className="text-gray-700">নাম:</strong> {hospital}
          </div>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">যোগাযোগের তথ্য</h2>
          <div>
            <strong className="text-gray-700">ভাষা:</strong> {languages}
          </div>
          <div>
            <strong className="text-gray-700">ইনস্ট্যান্ট কনসালটেশন:</strong> {consultation_time.instant}
          </div>
          <div>
            <strong className="text-gray-700">অ্যাপয়েন্টমেন্ট কনসালটেশন:</strong> {consultation_time.appointment}
          </div>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">ফি</h2>
          <div>
            <strong className="text-green-700">কনসালটেশন ফি:</strong> {consultation_fee}
          </div>
          <div>
            <strong className="text-green-700">ফলো-আপ ফি:</strong> {follow_up_fee}
          </div>
        </div>

        <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">অন্যান্য তথ্য</h2>
          <div>
            <strong className="text-gray-700">রোগী দেখেছেন:</strong> {patients_attended} জন
          </div>
          <div>
            <strong className="text-gray-700">গড় কনসালটেশন সময়:</strong> {avg_consultation_time}
          </div>
          <div>
            <strong className="text-gray-700">যোগদানের তারিখ:</strong> {joined_date}
          </div>
          <div>
            <strong className="text-gray-700">ডাক্তার কোড:</strong> {doctor_code}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/services/doctor" // Adjust the link to your doctor listing page
            className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
          >
            ← ডাক্তারদের তালিকায় ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
