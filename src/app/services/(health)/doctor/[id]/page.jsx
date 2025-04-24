// "use client";



// import { useEffect, useState } from "react";

// import Image from "next/image";
// import Link from "next/link";
// import { Phone, Mail, Star, MapPin, Clock } from "lucide-react";
// import doctorData from "@/utils/doctorData";
// import { useRouter } from "next/router";

 

// const DoctorDetailsPage = (props) => {
//     const router = useRouter();
//     const [doctor, setDoctor] = useState(null);

//     useEffect(()=> {
//         const { id } = router.query;
//         const foundDoctor = doctorData.find((d) => d?.id === id);
//         if (!foundDoctor) {
//             router.push("/404");
//         } else {
//             setDoctor(foundDoctor);
//         }
//     },[router.query])

    

//     if (!doctor) return <p className="text-center mt-20">লোড হচ্ছে...</p>;

//     const {
//         name,
//         specialization,
//         hospital,
//         address,
//         rating,
//         number_of_reviews,
//         consultation_fee_bdt,
//         image_url,
//         bio,
//         degrees,
//         phone,
//         email,
//         available_days,
//         available_time,
//         latitude,
//         longitude,
//     } = doctor;

//     return (
//         <div className="max-w-5xl mx-auto p-6">
//             {/* Hero Image */}
//             <div className="relative w-full h-[70vh]">
//                 <Image
//                     src={image_url || "/default-doctor.jpg"}
//                     alt={name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-xl"
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
//                     <h1 className="text-4xl md:text-5xl font-bold text-white">{name}</h1>
//                     <p className="text-lg text-gray-200 mt-1">{specialization}</p>
//                 </div>
//             </div>

//             <div className="mt-10 space-y-8">
//                 {/* Bio */}
//                 <section>
//                     <h2 className="text-2xl font-bold mb-2">ডাক্তারের বিবরণ</h2>
//                     <p className="text-gray-700">{bio}</p>
//                 </section>

//                 {/* Ratings */}
//                 <section>
//                     <h2 className="text-2xl font-bold mb-2">রেটিংস</h2>
//                     <div className="flex items-center gap-2 mb-1">
//                         {[...Array(rating)].map((_, i) => (
//                             <Star key={i} className="text-yellow-500 h-5 w-5" />
//                         ))}
//                         <span className="text-gray-600">({rating} Star)</span>
//                     </div>
//                     <p className="text-gray-700">
//                         রিভিউ সংখ্যা: {number_of_reviews}+
//                     </p>
//                 </section>

//                 {/* Consultation Fee */}
//                 <section className="bg-gray-100 p-4 rounded-lg">
//                     <h2 className="text-xl font-semibold mb-2">পরামর্শ ফি</h2>
//                     <p className="text-gray-700 text-lg font-medium">
//                         <span className="text-green-700 font-bold">৳{consultation_fee_bdt}</span>
//                     </p>
//                 </section>

//                 {/* Degrees */}
//                 <section>
//                     <h2 className="text-2xl font-bold mb-2">ডিগ্রীসমূহ</h2>
//                     <ul className="list-disc list-inside text-gray-700 space-y-1">
//                         {degrees?.map((deg, i) => (
//                             <li key={i}>{deg}</li>
//                         ))}
//                     </ul>
//                 </section>

//                 {/* Availability */}
//                 <section>
//                     <h2 className="text-2xl font-bold mb-2">উপস্থিতির সময়</h2>
//                     <p className="text-gray-700 flex items-center gap-2">
//                         <Clock className="text-blue-600" />
//                         দিন: {available_days.join(", ")}
//                     </p>
//                     <p className="text-gray-700 flex items-center gap-2">
//                         <Clock className="text-green-600" />
//                         সময়: {available_time}
//                     </p>
//                 </section>

//                 {/* Contact Info */}
//                 <section className="bg-gray-100 p-5 rounded-lg">
//                     <h2 className="text-xl font-bold mb-3">যোগাযোগ</h2>
//                     <p className="flex items-center gap-2 text-gray-700">
//                         <Phone className="h-5 w-5" /> {phone}
//                     </p>
//                     <p className="flex items-center gap-2 text-gray-700">
//                         <Mail className="h-5 w-5" /> {email}
//                     </p>
//                 </section>

//                 {/* Location */}
//                 <section>
//                     <h2 className="text-2xl font-bold mb-2">অবস্থান</h2>
//                     <p className="flex items-center gap-2 text-gray-700">
//                         <MapPin className="h-5 w-5 text-blue-600" />
//                         {hospital}, {address}
//                     </p>
//                     <p className="text-gray-600">Latitude: {latitude}, Longitude: {longitude}</p>
//                 </section>

//                 {/* Back Button */}
//                 <div className="text-center mt-10">
//                     <Link
//                         href="/services/doctor"
//                         className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-5 py-2 rounded-lg transition"
//                     >
//                         ← ডাক্তার তালিকায় ফিরে যান
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DoctorDetailsPage;
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import doctorData from "@/utils/doctorData"; // Assuming doctorData.js is in your utils directory

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
