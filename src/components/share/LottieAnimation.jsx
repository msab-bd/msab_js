"use client";

import Lottie from "lottie-react";
import { OctagonX } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/asset/msab_logo_b.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    import("../../../public/chat.json")
      .then((data) => setAnimationData(data.default))
      .catch((err) => console.error("Error loading Lottie JSON:", err));
  }, []);

  if (!animationData) return null; // Prevent rendering before animation loads

  return (
    <>
  {/* Chat Toggle Button */}
  <div onClick={() => setOpen(!isOpen)} className="fixed bottom-10 right-10 z-50 cursor-pointer transition-transform hover:scale-110">
    <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-green-500 shadow-lg">
      {isOpen ? <OctagonX className="text-white" size={30} /> : <Lottie animationData={animationData} loop style={{ width: 40, height: 40 }} />}
    </div>
  </div>

  {/* Chat Box */}
  <div className={`fixed z-50 bottom-28 right-10 w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
    
    {/* Header */}
    <div className="bg-[#008236] p-4 flex items-center gap-3 rounded-t-3xl shadow">
      <Image src={logo} width={50} height={50} alt="brand logo" className="rounded-full bg-white p-1" />
      <h1 className="text-white font-semibold text-lg flex-1">মসাব সার্ভিস সেন্টারে কথা বলুন</h1>
      <button onClick={() => setOpen(!isOpen)} className="text-white hover:text-red-400 transition-colors"><OctagonX size={24} /></button>
    </div>

    {/* Chat Content */}
    <div className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-3">
      {/* Demo Messages */}
      <div className="flex justify-start">
        <div className="bg-white p-3 rounded-xl shadow text-sm max-w-[75%]">হ্যালো! কীভাবে সাহায্য করতে পারি?</div>
      </div>
      <div className="flex justify-end">
        <div className="bg-green-200 p-3 rounded-xl shadow text-sm max-w-[75%]">আমি একটি সমস্যার সম্মুখীন হয়েছি।</div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white p-3 rounded-xl shadow text-sm max-w-[75%]">আপনার সমস্যাটি বিস্তারিত বলুন।</div>
      </div>
    </div>

    {/* Input Area */}
    <div className="p-4 bg-white flex items-center gap-2 border-t">
      <Input className="flex-1 bg-gray-100 rounded-full px-4 py-2" placeholder="কথা লিখুন..." />
      <Button className="bg-green-600 hover:bg-green-700 rounded-full p-3">
        <Send className="text-white" />
      </Button>
    </div>
  </div>
</>

  );
};

export default LottieAnimation;
