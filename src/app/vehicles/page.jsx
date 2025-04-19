// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
//  // make sure your data file exists
// import Image from "next/image";
// import Link from "next/link";
// import { MapPin, GaugeCircle, Fuel } from "lucide-react";
// import { FcEngineering } from "react-icons/fc";
// import { Button } from "@/components/ui/button";
// import vehiclesData from "@/utils/vehiclesData";

// const VehicleDetails = ({ params }) => {
//   const router = useRouter();
//   const [vehicle, setVehicle] = useState(null);

//   useEffect(() => {
//     const { id } = params;
//     const foundVehicle = vehiclesData.find((item) => item?.id == id);
//     if (!foundVehicle) {
//       router.push("/404"); // Redirect if not found
//     } else {
//       setVehicle(foundVehicle);
//     }
//   }, [params, router]);

//   if (!vehicle) {
//     return <p className="text-center py-20">লোড হচ্ছে...</p>;
//   }

//   const { title, location, price, image, year, mileage, fuel, engine, description } = vehicle;

//   const handlePayment = () => {
//     alert("পেমেন্ট গেটওয়ের সাথে সংযুক্ত করতে হবে। এখন শুধু ডেমো!");
//     // Later: Integrate with payment gateway
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-8">
//       {/* Image Banner */}
//       <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
//         <Image
//           src={image}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//         <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
//           Available
//         </span>
//       </div>

//       {/* Main Content */}
//       <div className="mt-8 space-y-6">
//         <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
//         <p className="flex items-center text-gray-600 gap-2">
//           <MapPin size={18} /> {location}
//         </p>

//         {/* Features */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
//           <div className="flex items-center gap-2">
//             <GaugeCircle size={18} /> {mileage} কিমি
//           </div>
//           <div className="flex items-center gap-2">
//             <Fuel size={18} /> {fuel}
//           </div>
//           <div className="flex items-center gap-2">
//             <FcEngineering size={18} /> {engine}
//           </div>
//           <div className="flex items-center gap-2">
//             📅 {year}
//           </div>
//         </div>

//         {/* Description */}
//         <div className="text-gray-700 leading-relaxed">
//           {description || "বর্ণনা পাওয়া যায়নি।"}
//         </div>

//         {/* Price */}
//         <div className="text-green-600 text-2xl font-bold">
//           মূল্য: ৳ {price}
//         </div>

//         {/* Payment Button */}
//         <div className="flex gap-4 flex-col md:flex-row">
//           <Button
//             onClick={handlePayment}
//             className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
//           >
//             এখনই পেমেন্ট করুন
//           </Button>
//           <Link
//            href="/vehicles" className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-center w-full md:w-auto"
//           >
//             ← সব যানবাহনে ফিরে যান
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleDetails;




import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GaugeCircle, Fuel } from "lucide-react";
import { FcEngineering } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import vehiclesData from "@/utils/vehiclesData";
import { useParams } from "next/navigation"; // Import useParams

const VehicleDetails = (params) => {
  const router = useRouter();
  const { id } = useParams(); // Using useParams hook to get dynamic route params
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    if (id) {
      const foundVehicle = vehiclesData.find((item) => item.id == id);
      if (!foundVehicle) {
        router.push("/404"); // Redirect if not found
      } else {
        setVehicle(foundVehicle);
      }
    }
  }, [id, router]);

  if (!vehicle) {
    return <p className="text-center py-20">লোড হচ্ছে...</p>;
  }

  const { title, location, price, image, year, mileage, fuel, engine, description } = vehicle;

  const handlePayment = () => {
    alert("পেমেন্ট গেটওয়ের সাথে সংযুক্ত করতে হবে। এখন শুধু ডেমো!");
    // Later: Integrate with payment gateway
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Image Banner */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Available
        </span>
      </div>

      {/* Main Content */}
      <div className="mt-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="flex items-center text-gray-600 gap-2">
          <MapPin size={18} /> {location}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <GaugeCircle size={18} /> {mileage} কিমি
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={18} /> {fuel}
          </div>
          <div className="flex items-center gap-2">
            <FcEngineering size={18} /> {engine}
          </div>
          <div className="flex items-center gap-2">
            📅 {year}
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700 leading-relaxed">
          {description || "বর্ণনা পাওয়া যায়নি।"}
        </div>

        {/* Price */}
        <div className="text-green-600 text-2xl font-bold">
          মূল্য: ৳ {price}
        </div>

        {/* Payment Button */}
        <div className="flex gap-4 flex-col md:flex-row">
          <Button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
          >
            এখনই পেমেন্ট করুন
          </Button>
          <Link
           href="/vehicles" className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-center w-full md:w-auto"
          >
            ← সব যানবাহনে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;