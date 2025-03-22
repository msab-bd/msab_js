'use client';
import React, { useState } from 'react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    MSAB - বাংলাদেশের সবচেয়ে বড় মার্কেটপ্লেস
                </h2>
                <p className="text-gray-700">
                    MSAB যুক্ত এমন একটি প্ল্যাটফর্ম যেখানে আপনি প্রায় সবকিছুই কেনা-বেচা করতে পারবেন!
                    আমরা ব্যবহারকারীদের গাড়ি থেকে শুরু করে প্রপার্টি, চাকরির খোঁজ বা নিয়োগ,
                    মোবাইল ফোন, ইলেকট্রনিক্স গ্যাজেট, এবং অন্যান্য বিভিন্ন জিনিস কেনা-বেচা করতে সহায়তা করে থাকি।
                </p>

                {/* Show More Content */}
                {isExpanded && (
                    <p className="text-gray-700 mt-2">
                        ৫০টিরও বেশি বিভাগ ক্যাটাগরি নিয়ে গ্রাহকদের জন্য আমরা নিশ্চিত করি নিরাপদ,
                        স্মার্ট এবং সহজ সল্যুশন।
                    </p>
                )}

                {/* Show More / Show Less Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 text-blue-600 font-semibold flex items-center mx-auto md:mx-0"
                >
                    {isExpanded ? "আরও কম দেখান ▲" : "আরও দেখান ▼"}
                </button>
            </div>
        </div>

    );
};

export default AboutSection;






