// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, CalendarDays } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';

// const TourPackageCard = ({ tour }) => {
//     const {
//         name,
//         location,
//         duration_days,
//         price_per_person_bdt,
//         highlights,
//         inclusions,
//         description,
//         image_urls,
//         contact_number,
//     } = tour;

//     const [sliderRef] = useKeenSlider({
//         loop: true,
//         slides: { perView: 1 },
//     });

//     return (
//         <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
//             {/* Left: Image Slider */}
//             {image_urls && image_urls.length > 0 && (
//                 <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
//                     <div ref={sliderRef} className="keen-slider h-full w-full">
//                         {image_urls.map((url, index) => (
//                             <div key={index} className="keen-slider__slide relative h-full w-full">
//                                 <Image
//                                     src={url}
//                                     alt={`${name} image ${index + 1}`}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Right: Content */}
//             <div className="flex flex-col justify-between p-4 flex-grow">
//                 {/* Top Content */}
//                 <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//                     <p className="text-gray-600 text-sm flex items-center mb-1">
//                         <MapPin className="mr-1 h-5 w-5" /> {location}
//                     </p>

//                     <p className="text-gray-600 text-sm flex items-center mb-2">
//                         <CalendarDays className="mr-1 h-5 w-5" /> {duration_days} দিন
//                     </p>

//                     <p className="text-green-600 font-bold text-lg mb-2">
//                         ৳ {price_per_person_bdt} <span className="text-gray-500 text-sm">/ প্রতি ব্যক্তি</span>
//                     </p>

//                     <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

//                     {/* Highlights */}
//                     <div className="mb-3">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-1">বিশেষ আকর্ষণ:</h4>
//                         <ul className="list-disc list-inside text-gray-600 text-xs">
//                             {highlights.slice(0, 3).map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                             {highlights.length > 3 && (
//                                 <li className="text-blue-500 cursor-pointer hover:underline">
//                                     + {highlights.length - 3} আরও
//                                 </li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Content */}
//                 <div>
//                     <span className="text-gray-500 text-xs block mb-2">
//                         যোগাযোগ: {contact_number}
//                     </span>
//                     <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
//                         বিস্তারিত দেখুন
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TourPackageCard;

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, CalendarDays } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';

// const TourPackageCard = ({ tour }) => {
//     const {
//         name,
//         location,
//         duration_days,
//         price_per_person_bdt,
//         highlights,
//         inclusions,
//         description,
//         image_urls,
//         contact_number,
//     } = tour;

//     const [sliderRef] = useKeenSlider({
//         loop: true,
//         slides: { perView: 1 },
//     });

//     return (
//         <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
//             {/* Left: Image Slider */}
//             {image_urls && image_urls.length > 0 && (
//                 <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
//                     <div ref={sliderRef} className="keen-slider h-full w-full">
//                         {image_urls.map((url, index) => (
//                             <div key={index} className="keen-slider__slide relative h-full w-full">
//                                 <Image
//                                     src={url}
//                                     alt={`${name} image ${index + 1}`}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Right: Content */}
//             <div className="flex flex-col justify-between p-4 flex-grow">
//                 {/* Top Content */}
//                 <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//                     <p className="text-gray-600 text-sm flex items-center mb-1">
//                         <MapPin className="mr-1 h-5 w-5" /> {location}
//                     </p>

//                     <p className="text-gray-600 text-sm flex items-center mb-2">
//                         <CalendarDays className="mr-1 h-5 w-5" /> {duration_days} দিন
//                     </p>

//                     <p className="text-green-600 font-bold text-lg mb-2">
//                         ৳ {price_per_person_bdt} <span className="text-gray-500 text-sm">/ প্রতি ব্যক্তি</span>
//                     </p>

//                     <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

//                     {/* Highlights */}
//                     <div className="mb-3">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-1">বিশেষ আকর্ষণ:</h4>
//                         <ul className="list-disc list-inside text-gray-600 text-xs">
//                             {highlights.slice(0, 3).map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                             {highlights.length > 3 && (
//                                 <li className="text-blue-500 cursor-pointer hover:underline">
//                                     + {highlights.length - 3} আরও
//                                 </li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Content */}
//                 <div>
//                     <span className="text-gray-500 text-xs block mb-2">
//                         যোগাযোগ: {contact_number}
//                     </span>
//                     <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
//                         বিস্তারিত দেখুন
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TourPackageCard;

'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const TourPackageCard = ({ tour }) => {
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
    } = tour;

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1 },
        // Enable the pagination dots
        pagination: true,
    });

    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
            {/* Left: Image Slider */}
            {image_urls && image_urls.length > 0 && (
                <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
                    <div ref={sliderRef} className="keen-slider h-full w-full">
                        {image_urls.map((url, index) => (
                            <div key={index} className="keen-slider__slide relative h-full w-full">
                                <Image
                                    src={url}
                                    alt={`${name} image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    {instanceRef.current && (
                        <div className="keen-slider__pagination">
                            {Array.from({ length: instanceRef.current.slides.length }).map((_, index) => (
                                <button
                                    key={index}
                                    className="keen-slider__pagination__dot"
                                    onClick={() => instanceRef.current.moveToIdx(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-4 flex-grow">
                {/* Top Content */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm flex items-center mb-1">
                        <MapPin className="mr-1 h-5 w-5" /> {location}
                    </p>

                    <p className="text-gray-600 text-sm flex items-center mb-2">
                        <CalendarDays className="mr-1 h-5 w-5" /> {duration_days} দিন
                    </p>

                    <p className="text-green-600 font-bold text-lg mb-2">
                        ৳ {price_per_person_bdt} <span className="text-gray-500 text-sm">/ প্রতি ব্যক্তি</span>
                    </p>

                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

                    {/* Highlights */}
                    <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">বিশেষ আকর্ষণ:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-xs">
                            {highlights.slice(0, 3).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            {highlights.length > 3 && (
                                <li className="text-blue-500 cursor-pointer hover:underline">
                                    + {highlights.length - 3} আরও
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Content */}
                <div>
                    <span className="text-gray-500 text-xs block mb-2">
                        যোগাযোগ: {contact_number}
                    </span>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                        বিস্তারিত দেখুন
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TourPackageCard;
//'use client';

// import React from 'react';
// import Image from 'next/image';
// import { MapPin, CalendarDays } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// const TourPackageCard = ({ tour }) => {
//     const {
//         name,
//         location,
//         duration_days,
//         price_per_person_bdt,
//         highlights,
//         description,
//         image_urls,
//         contact_number,
//     } = tour;

//     return (
//         <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] duration-300 h-full">
//             {/* Left: Image */}
//             {image_urls && image_urls.length > 0 && (
//                 <div className="relative w-full h-48 md:h-auto md:w-64 flex-shrink-0">
//                     <Image
//                         src={image_urls[0]}
//                         alt={`${name} image`}
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
//                     />
//                 </div>
//             )}

//             {/* Right: Content */}
//             <div className="flex flex-col justify-between p-4 flex-grow">
//                 {/* Top Content */}
//                 <div>
//                     <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//                     <p className="text-gray-600 text-sm flex items-center mb-1">
//                         <MapPin className="mr-1 h-4 w-4 md:h-5 md:w-5" /> {location}
//                     </p>

//                     <p className="text-gray-600 text-sm flex items-center mb-2">
//                         <CalendarDays className="mr-1 h-4 w-4 md:h-5 md:w-5" /> {duration_days} দিন
//                     </p>

//                     <p className="text-green-600 font-bold text-base md:text-lg mb-2">
//                         ৳ {price_per_person_bdt} <span className="text-gray-500 text-sm">/ প্রতি ব্যক্তি</span>
//                     </p>

//                     <p className="text-gray-700 text-sm mb-3 line-clamp-2">{description}</p>

//                     {/* Highlights */}
//                     <div className="mb-3">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-1">বিশেষ আকর্ষণ:</h4>
//                         <ul className="list-disc list-inside text-gray-600 text-xs">
//                             {highlights.slice(0, 3).map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                             {highlights.length > 3 && (
//                                 <li className="text-blue-500 cursor-pointer hover:underline">
//                                     + {highlights.length - 3} আরও
//                                 </li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Content */}
//                 <div>
//                     <span className="text-gray-500 text-xs block mb-2">
//                         যোগাযোগ: {contact_number}
//                     </span>
//                     <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
//                         বিস্তারিত দেখুন
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TourPackageCard;

