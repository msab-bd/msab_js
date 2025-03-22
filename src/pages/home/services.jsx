
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPlane,
  faUserDoctor,
  faBullhorn,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "ভাড়া", // Rent
    description: "বিভিন্ন ধরনের ভাড়া সেবা।",
    icon: <FontAwesomeIcon icon={faHouseUser} size="2x" className="text-blue-600  w-24 h-24" />,
    link: "/services/rent",
  },
  {
    title: "ভ্রমণ", // Travel
    description: "আপনার ভ্রমণের জন্য আধুনিক সমাধান।",
    icon: <FontAwesomeIcon icon={faPlane} size="2x" className="text-green-600  w-24 h-24" />,
    link: "/services/travel",
  },
  {
    title: "স্বাস্থ্য", // Health
    description: "আপনার সুস্থতার জন্য আধুনিক স্বাস্থ্যসেবা।",
    icon: <FontAwesomeIcon icon={faUserDoctor} size="2x" className="text-red-600  w-24 h-24" />,
    link: "/services/health",
  },
  {
    title: "নর-নারী সুন্দর", // Beauty
    description: "সৌন্দর্য ও পরিচর্যার আধুনিক সমাধান।",
    icon: <Image src="/asset/beauty.png" alt="Beauty" width={100} height={100} />,
    link: "/services/beauty",
  },
  {
    title: "ক্রয় বিক্রয় সেবা", // Buy/Sell
    description: "কৃষকদের জন্য আধুনিক বিক্রয় ও বিপণন সেবা।",
    icon: <Image src="/asset/buy.png" alt="Buy/Sell" width={100} height={100} />,
    link: "/services/agriculture",
  },
  {
    title: "আধুনিক বিজ্ঞাপন", // Advertising
    description: "আপনার ব্যবসার জন্য কৌশলগত বিজ্ঞাপন প্রচারণা।",
    icon: (
      <FontAwesomeIcon 
        icon={faBullhorn} 
        size="2x" 
        className="text-yellow-600 w-24 h-24" // Tailwind width and height classes
      />
    ),
    link: "/services/advertising",
  },
  {
    title: "প্রযুক্তি", // Technology
    description: "আধুনিক প্রযুক্তিগত সমাধান আপনার ব্যবসার জন্য।",
    icon: <FontAwesomeIcon icon={faRocket} size="2x" className="text-purple-600  w-24 h-24" />,
    link: "/services/technology",
  },
];

// 
// const Services = () => {
//     return (
//       <section className="py-16 px-4 gap-10 bg-gray-100">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl text-green-700 font-bold mb-8">আমাদের সেবা সমূহ</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
//             {services.map((service, index) => (
//               <Link key={index} href={service.link} passHref>
//                 <div className="block p-6 bg-white shadow-lg rounded-lg hover:bg-gray-200 transition cursor-pointer">
//                   <div className="flex justify-center items-center mb-4">{service.icon}</div>
//                   <h3 className="text-xl font-semibold">{service.title}</h3>
//                   <p className="text-gray-600 text-sm min-h-[60px]">{service.description}</p> 
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
const Services = () => {
    return (
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-green-700 font-bold mb-8">আমাদের সেবা সমূহ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.link} passHref>
                <div className="block p-6 bg-white shadow-lg rounded-lg hover:bg-gray-200 transition cursor-pointer">
                  <div className="flex justify-center items-center mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600 text-sm min-h-[60px]">{service.description}</p> 
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Services;



