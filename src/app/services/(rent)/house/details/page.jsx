"use client";

import { useState, useEffect } from "react";
 // Import your house data
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import houseData from "@/utils/cardData";

const HouseDetailsPage = ({ params }) => {
  const router = useRouter();
  const [house, setHouse] = useState(null);

  // Fetching house data based on the ID passed in params
  useEffect(() => {
    const fetchData = () => {
      const { id } = params;
      const selectedHouse = houseData.find((hotel) => hotel.id == id);
      if (selectedHouse) {
        setHouse(selectedHouse);
      } else {
        router.push("/404"); // Redirect to 404 if not found
      }
    };

    fetchData();
  }, [params, router]);

  if (!house) {
    return <p>Loading...</p>; // Show a loading state while fetching data
  }

  const { title, location, bedrooms, bathrooms, price, image, status, description } = house;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Image with Overlay Title */}
      <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
        <Image
          src={image || "/default-image.jpg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <p className="text-lg text-gray-300 mt-2">{location}</p>
        </div>
      </div>

      {/* House Details */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800">বিস্তারিত</h2>
        <p className="text-lg text-gray-700 mt-4">{description || "No description available."}</p>
        <div className="mt-6 text-sm text-gray-600">
          <p><strong>বেডরুম:</strong> {bedrooms} বেড</p>
          <p><strong>বাথরুম:</strong> {bathrooms} বাথ</p>
          <p><strong>মূল্য:</strong> ৳ {price}</p>
        </div>
      </div>

      {/* Contact & Payment */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800">যোগাযোগ এবং পেমেন্ট</h2>
        <div className="mt-4 space-y-4">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
            যোগাযোগ করুন
          </Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            পেমেন্ট সম্পন্ন করুন
          </Button>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Button
          onClick={() => router.back()}
          className="bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
        >
          ← ফিরে যান
        </Button>
      </div>
    </div>
  );
};

export default HouseDetailsPage;

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import vehicleData from "@/utils/vehicleData";

// const VehicleDetailsPage = ({ params }) => {
//   const router = useRouter();
//   const [vehicle, setVehicle] = useState(null);

//   useEffect(() => {
//     const fetchData = () => {
//       const { id } = params;
//       const selectedVehicle = vehicleData.find((vehicle) => vehicle.id == id);
//       if (selectedVehicle) {
//         setVehicle(selectedVehicle);
//       } else {
//         router.push("/404"); // Redirect to 404 if not found
//       }
//     };

//     fetchData();
//   }, [params, router]);

//   if (!vehicle) {
//     return <p>Loading...</p>; // Show a loading state while fetching data
//   }

//   const { title, location, price, image, year, mileage, fuel, engine } = vehicle;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Hero Image with Overlay Title */}
//       <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
//         <Image
//           src={image || "/default-image.jpg"}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg shadow-lg"
//         />
//         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
//           <p className="text-lg text-gray-300 mt-2">{location}</p>
//         </div>
//       </div>

//       {/* Vehicle Details */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold text-gray-800">বিস্তারিত</h2>
//         <p className="text-lg text-gray-700 mt-4">{description || "No description available."}</p>
//         <div className="mt-6 text-sm text-gray-600">
//           <p><strong>বছর:</strong> {year}</p>
//           <p><strong>মাইলেজ:</strong> {mileage} কিমি</p>
//           <p><strong>জ্বালানি:</strong> {fuel}</p>
//           <p><strong>ইঞ্জিন:</strong> {engine}</p>
//           <p><strong>মূল্য:</strong> ৳ {price}</p>
//         </div>
//       </div>

//       {/* Contact & Payment */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold text-gray-800">যোগাযোগ এবং পেমেন্ট</h2>
//         <div className="mt-4 space-y-4">
//           <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
//             যোগাযোগ করুন
//           </Button>
//           <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
//             পেমেন্ট সম্পন্ন করুন
//           </Button>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="mt-8">
//         <Button
//           onClick={() => router.back()}
//           className="bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
//         >
//           ← ফিরে যান
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default VehicleDetailsPage;