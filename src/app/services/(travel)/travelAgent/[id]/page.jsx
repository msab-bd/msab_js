// import { useParams } from "next/router";
// import TravelAgentDetails from "@/components/allCard/TravelAgentDetails";
// import travelAgents from "@/utils/travelAgentData";

// export default function TravelAgentPage() {
//   const { id } = useParams();
//   const agent = travelAgents.find((a) => a.agent_id === id);

//   if (!agent) {
//     return <p>Agent not found.</p>;
//   }

//   return <TravelAgentDetails agent={agent} />;
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import travelAgents from "@/utils/travelAgentData";
// adjust the path if needed

const TravelAgentPage = ({ params }) => {
    const router = useRouter();
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        const { id } = params;
        const foundAgent = travelAgents.find((a) => a?.agent_id == id);
        if (!foundAgent) {
            router.push("/404");
        } else {
            setAgent(foundAgent);
        }
    }, [params, router]);

    if (!agent) return <p className="text-center mt-20">লোড হচ্ছে...</p>;

    const {
        name,
        location,
        description,
        contact_number,
        email,
        services,
        image_urls,
    } = agent;

    return (
        <div className="max-w-4xl mx-auto  p-6 items-center justify-center">
            <div className="flex flex-col">
                {/* Hero Section */}
                <div className="relative w-full h-[70vh]">
                    <Image
                        src={image_urls[0] || "/default-agent.jpg"}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{name}</h1>
                        <p className="text-lg text-gray-200 mt-2">{location}</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
                    {/* Description */}
                    <div className="text-lg text-gray-800 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4">এজেন্সির বিবরণ</h2>
                        <p>{description}</p>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">সেবা সমূহ</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {services.map((service, idx) => (
                                <li key={idx}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-100 p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">যোগাযোগ করুন</h2>
                        <p className="text-gray-700">📞 ফোন: {contact_number}</p>
                        <p className="text-gray-700">📧 ইমেইল: {email}</p>
                    </div>

                    {/* Back Link */}
                    <div className="text-center justify-start mt-10">
                        <Link
                            href="/services/travelAgent"
                            className="inline-block bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-lg transition duration-300"
                        >
                            ← এজেন্ট তালিকায় ফিরে যান
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TravelAgentPage;
