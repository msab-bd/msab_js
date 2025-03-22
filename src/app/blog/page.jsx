import LatestBlogCard from "@/components/allCard/LatestBlogCard";
import blogData from "@/utils/blogData";

const page = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 md:w-10/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xxl:grid-cols-4 gap-6">
        {blogData?.map((item) => (
          <LatestBlogCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
