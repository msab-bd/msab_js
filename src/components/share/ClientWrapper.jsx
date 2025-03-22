"use client"; // Ensure this runs on the client

import dynamic from "next/dynamic";

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import("./LottieAnimation"), { ssr: false });

const ClientWrapper = () => {
  return <LottieAnimation />;
};

export default ClientWrapper;
