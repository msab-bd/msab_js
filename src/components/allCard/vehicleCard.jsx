"use client"
import Image from "next/image";
import { MapPin, GaugeCircle, Fuel, } from "lucide-react";
import { FcEngineering } from "react-icons/fc";
import { Button } from "@/components/ui/button";

const VehicleCard = ({ item }) => {
  const { title, location, price, image, year, mileage, fuel, engine } = item;

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-white transition hover:scale-[1.02] duration-300">
      {/* Image */}
      <div className="relative h-60 w-full">
        <Image
          src={image}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-3xl"
        />
        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Available
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <MapPin size={16} /> {location}
        </p>

        {/* Features */}
        <div className="flex justify-between items-center text-sm text-gray-600 pt-2">
          <span className="flex items-center gap-1">
            <GaugeCircle size={16} /> {mileage} কিমি
          </span>
          <span className="flex items-center gap-1">
            <Fuel size={16} /> {fuel}
          </span>
          <span className="flex items-center gap-1">
            <FcEngineering size={16} />
            {engine}
          </span>
        </div>

        {/* Price */}
        <div className="text-green-600 font-bold text-md pt-2">
          ৳ {price}
        </div>

        {/* Button */}
        <div className="pt-4">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
            বিস্তারিত দেখুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;