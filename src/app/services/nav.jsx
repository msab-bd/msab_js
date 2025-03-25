"use client";

import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { BiSolidCategory } from 'react-icons/bi';
import { FaLocationPin } from "react-icons/fa6";

const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        if (!searchTerm.trim()) {
            console.log('Please enter a search term.');
            return;
        }
        console.log('Searching for:', searchTerm);

    };

    return (
        <nav className=' p-4 bg-gray-100'>
            <div className='flex justify-evenly items-center'>
                <div className='flex  gap-20'>

                    <div className='flex flex-col'>
                        <button
                            className="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                            aria-label="Select Location"
                        >
                            <FaLocationPin className='text-2xl text-green-700' />
                            অবস্থান নির্বাচন করুন
                        </button>
                    </div>

                    {/* Category Selection Button */}
                    <div className='flex flex-col'>
                        <button
                            className="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                            aria-label="Select Category"
                        >
                            <BiSolidCategory className='text-2xl' />
                            শ্রেণী নির্বাচন করুন
                        </button>
                    </div>
                </div>

                {/* Search Input and Button on the right side */}
                <div className="relative ml-10" style={{ width: 'auto' }}>
                    <Input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full py-5 pl-5 pr-16 rounded-full bg-white/70 shadow-lg backdrop-blur-md focus:ring-2 focus:ring-green-500 outline-none transition-all"
                        placeholder="আপনি কি খুঁজছেন?"
                        style={{ minWidth: '400px', maxWidth: '600px' }} // Adjust sizes accordingly
                    />
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-red-700 transition-all"
                        aria-label="Search"
                        onClick={handleSearchSubmit}
                    >
                        <IoSearch className="text-xl" />
                    </button>
                </div>
            </div>
            <div>
                
            </div>
        </nav>
    );
};

export default Nav;