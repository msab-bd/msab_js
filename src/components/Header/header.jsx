"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHome, IoSearch } from "react-icons/io5";
import { Input } from "../ui/input";

const Header = () => {
  
  const path = usePathname();
  const [action, setActive] = useState(false);


  useEffect(() => {
    if (path === "/") {
      setActive(true);
    }else{
      setActive(false)
    }
  }, [path]);

  return (
    <div className="bg-green-700">
      <header className="w-11/12 mx-auto md:w-10/12 py-4 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                className="bg-white rounded-md"
                src={"/asset/msab_logo_b.png"}
                width={75}
                height={75}
                alt="MSAB Logo"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavItem
              href="/"
              icon={<IoHome className="text-red-700" />}
              text="হোম"
            />
            <NavItem href="/services/house" text="সেবাসমূহ" />
            <NavItem href="/blog" text="ব্লগ" />
            <NavItem href="/contact" text="যোগাযোগ" />
          </nav>

          {/* Login Button */}
          <Link href="/auth/login">
            <button className="px-4 py-2 rounded-md text-white bg-red-700 hover:bg-green-700 transition-all">
              Login
            </button>
          </Link>
        </div>

        {/* Search Bar */}
        {action && (
          <div className="py-10 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Input
              type="text"
              className="w-full py-6 pl-5 pr-16 rounded-full bg-white/70 shadow-lg backdrop-blur-md focus:ring-2 focus:ring-green-500 outline-none transition-all"
              placeholder="আপনি কি খুঁজছেন?"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-red-700 transition-all"
              aria-label="Search">
              <IoSearch className="text-xl" />
            </button>
          </div>
        </div>
        )}
      </header>
    </div>
  );
};

// Navigation Link Component


const NavItem = ({ href, icon, text }) => (
  <Link
    href={href}
    className="relative text-lg text-white pb-1 flex items-center gap-2 group hover:text-red-700"
  >
    {icon}
    {text}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Header;
