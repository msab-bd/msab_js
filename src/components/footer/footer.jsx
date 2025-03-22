// import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook,  FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 text-black text-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center md:text-left">

                    {/* Column 1 - Learn More */}
                    <div>
                        <h3 className="font-bold mb-2">আরও জানুন</h3>
                        <ul className="space-y-1">
                            <li><Link href="#">ফ্রি মিকি করুন</Link></li>
                            <li><Link href="#">মেম্বারশিপ</Link></li>
                            <li><Link href="#">আপনার বিজ্ঞাপন</Link></li>
                            <li><Link href="#">অ্যাড বুস্ট</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 - Help & Support */}
                    <div>
                        <h3 className="font-bold mb-2">হেল্প & সাপোর্ট</h3>
                        <ul className="space-y-1">
                            <li><Link href="#">প্রশ্ন-উত্তর</Link></li>
                            <li><Link href="#">নিরাপদ থাকুন</Link></li>
                            <li><Link href="#">আমাদের সাথে যোগাযোগ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - About Us */}
                    <div>
                        <h3 className="font-bold mb-2">আমাদের কথা</h3>
                        <ul className="space-y-1">
                            <li><Link href="#">আমাদের কথা</Link></li>
                            <li><Link href="#">পেশা</Link></li>
                            <li><Link href="#">শর্তাবলী এবং নীতিমালা</Link></li>
                            <li><Link href="#">গোপনীয়তার নীতিমালা</Link></li>
                            <li><Link href="#">সাইটম্যাপ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Guides */}
                    <div>
                        <h3 className="font-bold mb-2">ব্লগ & গাইড</h3>
                        <ul className="space-y-1">
                            {/* <li><Link href="#">CarsGuide</Link></li>
              <li><Link href="#">BikesGuide</Link></li>
              <li><Link href="#">PropertyGuide</Link></li> */}
                            <li><Link href="#">অফিসিয়াল ব্লগ</Link></li>
                        </ul>
                        {/* Social Media Icons */}
                        <div className="flex justify-center md:justify-start mt-3 space-x-4 text-xl">
                            <Link href="https://www.facebook.com/profile.php?id=61570120946518"><FaFacebook className="hover:text-blue-600" /></Link>
                            {/* <Link href="#"><FaTiktok className="hover:text-black" /></Link> */}
                            <Link href="#"><FaYoutube className="hover:text-red-600" /></Link>
                        </div>
                    </div>

                    {/* Column 5 - Mobile App */}
                    {/* <div>
            <h3 className="font-bold mb-2">আমাদের অ্যাপ ডাউনলোড করুন</h3>
            <div className="space-y-2">
              <Image src="/asset/google-play.png" alt="Google Play" width={150} height={50} />
              <Image src="/asset/app-store.png" alt="App Store" width={150} height={50} />
            </div>
            <h3 className="font-bold mt-4">অন্যান্য দেশ</h3>
            <p className="flex items-center justify-center md:justify-start">
              <Image src="/asset/srilanka.png" alt="Sri Lanka" width={20} height={20} className="mr-2" />
              Sri Lanka
            </p>
          </div> */}

                </div>

                {/* Bottom Section */}
                {/* <div className="border-t border-gray-300 mt-6 pt-4 text-center text-green-700">
          © 2025. All rights reserved. <span className="font-semibold text-red-700">MSAB</span>
          <div>
            <Link href="/">  <Image src="/asset/msab_logo_b.png" alt="msab logo" width={85} height={85} className="mx-auto pt-3 " /></Link>
          </div>
        </div> */}
                <div className="border-t border-gray-300 mt-6 pt-4 text-center text-green-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left">
                            © 2025. All rights reserved. <span className="font-semibold text-red-700">MSAB</span>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link href="/">
                                <Image
                                    src="/asset/msab_logo_b.png"
                                    alt="msab logo"
                                    width={85}
                                    height={85}
                                    className="mx-auto md:mx-0 pt-3"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
