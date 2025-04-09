import HeadphoneCard from "@/components/allCard/HeadPhoneCard";
import headphonesData from "@/utils/headphonesData";



const Page = () => {

  return (
    <div className="w-11/12 mx-auto md:w-10/12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {headphonesData.map((headphone) => (
          <div key={headphone.product_id}>
            <HeadphoneCard headphone={headphone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
