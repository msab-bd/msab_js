import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Image from "next/image";
  
  const FaqSection = () => {
    return (
      <div className="w-11/12 mx-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 py-10 md:py-20">
        {/* Visual Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">আমাদের সেবা সমূহ</h2>
          <p className="text-lg text-gray-600">
            আমরা আপনার জন্য আধুনিক এবং সর্বোচ্চ মানের সেবা প্রদান করি। আমাদের বিভিন্ন পরিষেবা সম্পর্কে বিস্তারিত তথ্য দেওয়া হলো।
          </p>
          <Image src="/asset/msab_logo_b.png" width={300} height={300} alt="Services" />
        </div>
        
        {/* Service Section */}
        <div className="">
          <Accordion type="single" collapsible className="w-full border rounded-lg shadow-lg p-5">
            <AccordionItem value="item-1">
              <AccordionTrigger>আমি কীভাবে সহজ ও নির্ভরযোগ্য ভাড়া পরিষেবা পেতে পারি?</AccordionTrigger>
              <AccordionContent>
                আমাদের ভাড়া পরিষেবাগুলোর মধ্যে রয়েছে গাড়ি ভাড়া, অফিস স্পেস ভাড়া, ইভেন্ট হল ভাড়া ইত্যাদি। আপনার প্রয়োজন অনুযায়ী আমরা নির্ভরযোগ্য এবং সাশ্রয়ী মূল্যের সেবা প্রদান করি।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>নিরাপদ ও আরামদায়ক ভ্রমণের জন্য আপনারা কী ধরনের সেবা প্রদান করেন?</AccordionTrigger>
              <AccordionContent>
                নিরাপদ ও আরামদায়ক ভ্রমণের জন্য আমাদের আধুনিক যানবাহন ও পর্যটন প্যাকেজ রয়েছে। দেশ ও বিদেশের বিভিন্ন স্থানে ভ্রমণের জন্য আমাদের বিশেষ সুবিধা রয়েছে।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>আপনারা কী কী স্বাস্থ্যসেবা প্রদান করেন?</AccordionTrigger>
              <AccordionContent>
                আধুনিক স্বাস্থ্যসেবা নিশ্চিত করতে আমাদের রয়েছে চিকিৎসা পরামর্শ, টেলিমেডিসিন, হাসপাতাল বুকিং, হোম কেয়ার এবং অন্যান্য প্রয়োজনীয় সেবা।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>সৌন্দর্য ও বিউটি কেয়ারের জন্য কী কী সেবা পাওয়া যায়?</AccordionTrigger>
              <AccordionContent>
                আমাদের বিউটি ওয়েলনেস পরিষেবাগুলোতে রয়েছে স্পা, স্কিন কেয়ার, হেয়ার ট্রিটমেন্ট, মেকওভার এবং নরসুন্দর সেবা। সবার জন্য মানসম্মত পরিচর্যার ব্যবস্থা আমরা নিশ্চিত করি।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>আপনারা কী ধরনের ক্রয়-বিক্রয় সুবিধা প্রদান করেন?</AccordionTrigger>
              <AccordionContent>
                আমাদের প্ল্যাটফর্মে বিভিন্ন পণ্য ও পরিষেবা কেনাবেচার সুবিধা রয়েছে। কৃষিপণ্য, ইলেকট্রনিক্স, ফার্নিচার, যানবাহন ইত্যাদি নিরাপদভাবে ক্রয়-বিক্রয়ের জন্য আমাদের ব্যবহার করুন।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>আমার ব্যবসার জন্য আপনারা কী ধরনের বিজ্ঞাপন সেবা প্রদান করেন?</AccordionTrigger>
              <AccordionContent>
                আপনার ব্যবসার প্রচারের জন্য কৌশলগত বিজ্ঞাপন পরিষেবা প্রদান করা হয়। ডিজিটাল মার্কেটিং, সোশ্যাল মিডিয়া মার্কেটিং এবং ব্র্যান্ড প্রোমোশন আমাদের বিশেষত্ব।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>আপনারা কী ধরনের প্রযুক্তিগত সমাধান প্রদান করেন?</AccordionTrigger>
              <AccordionContent>
                আমাদের অত্যাধুনিক প্রযুক্তিগত সমাধানগুলো আপনার ব্যবসার প্রবৃদ্ধি নিশ্চিত করবে। ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট, সফটওয়্যার সল্যুশন এবং সাইবার সিকিউরিটি সেবা আমরা প্রদান করি।
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  };
  
  export default FaqSection;
  