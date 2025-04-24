
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hospitalData } from "@/utils/service";
import Link from "next/link";
import Image from "next/image";

const AppointmentDetailsPage = ({ params }) => {
    const router = useRouter();
    const [appointmentDetail, setAppointmentDetail] = useState(null);

    useEffect(() => {
        const { id } = params;
        const foundAppointment = hospitalData.find(
            (appt) => appt?.appointmentId == id
        );
        if (!foundAppointment) {
            router.push("/404");
        } else {
            setAppointmentDetail(foundAppointment);
        }
    }, [params, router]);

    if (!appointmentDetail)
        return <p className="text-center mt-20">লোড হচ্ছে...</p>;

    const {
        appointmentId,
        hospital,
        doctor,
        appointmentDate,
        appointmentTime,
        location,
        reasonForVisit,
        notes,
        fees,
        paymentStatus,
        doctorImage,
    } = appointmentDetail;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    অ্যাপয়েন্টমেন্টের বিস্তারিত
                </h1>

                <div className="mb-4">
                    <strong className="text-gray-700">অ্যাপয়েন্টমেন্ট আইডি:</strong> {appointmentId}
                </div>

                {/* হাসপাতালের তথ্য */}
                <div className="mb-4 border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">হাসপাতালের তথ্য</h2>
                    <div className="flex items-start gap-4">
                        <img 
                            src={hospital.imageUrl} 
                            alt="Hospital" 
                            className="w-24 h-24 object-cover rounded-md" 
                        />
                        <div>
                            <div>
                                <strong className="text-gray-700">নাম:</strong> {hospital.hospitalName}
                            </div>
                            <div>
                                <strong className="text-gray-700">ঠিকানা:</strong> {hospital.address}
                            </div>
                            <div>
                                <strong className="text-gray-700">যোগাযোগ নম্বর:</strong> {hospital.contactNumber}
                            </div>
                            <div>
                                <strong className="text-gray-700">লোকেশন:</strong> Latitude: {hospital.latitude}, Longitude: {hospital.longitude}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ডাক্তারের তথ্য */}
                {/* <div className="mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">ডাক্তারের তথ্য</h2>
          <div className="flex items-start gap-4">
            {doctorImage ? (
              <Image
                src={doctorImage}
                alt="Doctor"
                className="w-24 h-24 object-cover rounded-md"
                width={100}
                height={100}
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-md" />
            )}
            <div>
              <div className="mb-1">
                <strong className="text-gray-700">নাম:</strong> {doctor?.firstName} {doctor?.lastName}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">স্পেশালাইজেশন:</strong> {doctor?.specialization}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">রেটিং:</strong> ⭐ {doctor?.rating} ({doctor?.number_of_reviews} রিভিউ)
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">ডিগ্রি:</strong> {doctor?.degrees}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">বায়ো:</strong> {doctor?.bio}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">ফোন:</strong> {doctor?.phone}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">ইমেইল:</strong> {doctor?.email}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">উপলব্ধ দিন:</strong> {doctor?.available_days?.join(", ")}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">উপলব্ধ সময়:</strong> {doctor?.available_time}
              </div>
              <div className="mb-1">
                <strong className="text-gray-700">কনসালটেশন ফি:</strong> ৳{doctor?.consultation_fee_bdt}
              </div>
            </div>
          </div>
        </div> */}
                <div className="mb-4 border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">ডাক্তারের তথ্য</h2>
                    <div className="flex items-start gap-4">
                        {console.log("doctorImage:", doctorImage)}
                        {doctorImage ? (
                            <Image
                                src={doctorImage}
                                alt="Doctor"
                                className="w-24 h-24 object-cover rounded-md"
                                width={100}
                                height={100}
                            />
                        ) : (
                            <div className="w-24 h-24 bg-gray-200 rounded-md" />
                        )}
                        <div>
                            {console.log("doctor:", doctor)}
                            <div className="mb-1">
                                <strong className="text-gray-700">নাম:</strong> {doctor?.firstName} {doctor?.lastName}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">স্পেশালাইজেশন:</strong> {doctor?.specialization}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">রেটিং:</strong> ⭐ {doctor?.rating} ({doctor?.number_of_reviews} রিভিউ)
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">ডিগ্রি:</strong> {doctor?.degrees}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">বায়ো:</strong> {doctor?.bio}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">ফোন:</strong> {doctor?.phone}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">ইমেইল:</strong> {doctor?.email}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">উপলব্ধ দিন:</strong> {doctor?.available_days?.join(", ")}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">উপলব্ধ সময়:</strong> {doctor?.available_time}
                            </div>
                            <div className="mb-1">
                                <strong className="text-gray-700">কনসালটেশন ফি:</strong> ৳{doctor?.consultation_fee_bdt}
                            </div>
                        </div>
                    </div>
                </div>

                {/* অ্যাপয়েন্টমেন্টের তথ্য */}
                <div className="mb-4 border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">অ্যাপয়েন্টমেন্টের তথ্য</h2>
                    <div>
                        <strong className="text-gray-700">তারিখ:</strong> {appointmentDate}
                    </div>
                    <div>
                        <strong className="text-gray-700">সময়:</strong> {appointmentTime}
                    </div>
                    <div>
                        <strong className="text-gray-700">অবস্থান:</strong> {location}
                    </div>
                    <div>
                        <strong className="text-gray-700">সাক্ষাতের কারণ:</strong> {reasonForVisit}
                    </div>
                    <div>
                        <strong className="text-gray-700">নোট:</strong> {notes}
                    </div>
                    <div>
                        <strong className="text-green-700">ফি:</strong> ৳{fees.amount} {fees.currency}
                    </div>
                    <div>
                        <strong className="text-gray-700">পেমেন্ট স্ট্যাটাস:</strong>{" "}
                        <span
                            className={`font-semibold ${paymentStatus === "Paid"
                                    ? "text-green-600"
                                    : paymentStatus === "Pending"
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                }`}
                        >
                            {paymentStatus}
                        </span>
                    </div>
                </div>

                {/* Back link */}
                <div className="mt-8">
                    <Link
                        href="/services/hospital"
                        className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
                    >
                        ← আমার অ্যাপয়েন্টমেন্টে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetailsPage;