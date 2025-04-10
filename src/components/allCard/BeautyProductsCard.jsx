import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";

const BeautyProductsCard = ({ item }) => {
    const { name, description, image, price } = item || {};

    return (
        <Card className="w-full mx-auto rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01] py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {/* Text Section */}
                <div className="flex flex-col justify-between p-6 h-full">
                    <div>
                        <h1 className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
                        <p className="text-sm text-gray-600 mb-4">{description}</p>
                        <div className="text-base text-gray-700 font-medium mb-4">
                            দাম: {price} <span className="text-green-600">৳</span>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4 text-sm">
                        <button className="flex-1 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-all">
                            বিস্তারিত দেখুন
                        </button>
                        <button className="flex-1 bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition-all">
                            কার্টে যোগ করুন
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-72 md:h-auto">
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="md:rounded-r-2xl h-full w-full transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
            </div>
        </Card>
    );
};

export default BeautyProductsCard;
