"use client";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("../../../public/chat.json")
      .then((data) => setAnimationData(data.default))
      .catch((err) => console.error("Error loading Lottie JSON:", err));
  }, []);

  if (!animationData) return null; // Prevent rendering before animation loads

  return (
    <div className="fixed bottom-10 right-10 z-50 cursor-pointer">
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-green-300">
        <Lottie animationData={animationData} loop style={{ width: 40, height: 40 }} />
      </div>
    </div>
  );
};

export default LottieAnimation;
