import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl flex flex-col md:flex-row">

        {/* Left Side */}
        <div className="md:w-1/2 p-10 text-white">
          <p className="uppercase text-sm mb-2">Take the silk road to</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Digitizing Your <br /> Business Growth
          </h1>

          <div className="space-y-2 mb-6">
            <p><strong>Expert</strong> Team Members</p>
            <p><strong>Results-Driven</strong> Approach</p>
            <p><strong>Streamlined</strong> Execution</p>
          </div>

          <p className="text-sm mb-4 uppercase">Premium Digital Agency Recognized By</p>
          <div className="flex space-x-6 opacity-75">
            <Image src="/images/logo1.png" alt="Logo 1" width={48} height={32} className="h-8" />
            <Image src="/images/logo2.png" alt="Logo 2" width={48} height={32} className="h-8" />
            <Image src="/images/logo3.png" alt="Logo 3" width={48} height={32} className="h-8" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-white p-10 rounded-r-xl">
          <h2 className="text-sm text-blue-600 uppercase mb-2">Let's grow your brand online</h2>
          <h3 className="text-2xl font-semibold mb-6">Start a conversation with us</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message*"
              className="w-full border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}