import blogData from "@/utils/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";



const Page = ({ params }) => {
  const { id } = params; 
  const data = blogData.find((item) => item?.id === id);

  // Handle 404 if blog post not found
  if (!data) return notFound();

  const { subTitle, category, description, image } = data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Image with Overlay Title */}
      <div className="relative w-full h-80 md:h-96 lg:h-[450px]">
        <Image
          src={image || "/default-image.jpg"}
          alt={category || "Blog Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{category || "Blog Title"}</h1>
          {subTitle && <p className="text-lg text-gray-300 mt-2">{subTitle}</p>}
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">{description || "No description available."}</p>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition duration-300 shadow-md"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default Page;
