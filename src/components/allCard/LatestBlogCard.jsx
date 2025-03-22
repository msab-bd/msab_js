import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";



const LatestBlogCard = ({ data }) => {
  const { subTitle, description, image, id } = data || {};

  return (
    <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 flex flex-col h-[380px] pt-0">
      <div className="relative w-full h-48">
        <Image
          src={image.replace(".com.com", ".com")} // Fix invalid hostname issue
          alt="blog image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow px-4 pb-3">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-bold text-gray-900">
            {subTitle}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow p-0 mt-2">
          <CardDescription className="text-sm text-gray-600 line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="p-4 pb-0">
        <Link href={`/blog/${id}`}>
          <Button className="w-full cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition-all">
            বিস্তারিত দেখুন
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LatestBlogCard;
