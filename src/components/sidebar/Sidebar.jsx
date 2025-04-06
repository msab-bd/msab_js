import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import categories from "@/utils/category";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";

const Sidebar = ({ className }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = (category) => {
        setOpenCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };
    return (
        <div className={cn("w-64 bg-card border-r h-screen sticky top-0 pt-20", className)}>
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            <ScrollArea className="h-[calc(100vh-60px)]">
                <div className="flex">
                    {/* Sidebar */}
                    <div className={`bg-white text-black  w-64 p-4 transition-all ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white mb-4">
                            <FaBars size={20} />
                        </button>
                        <h2 className="text-lg text-green-700 font-bold">সব বিভাগ</h2>
                        <ul className="mt-4">
                            {categories.map((category, index) => (
                                <li key={index} className="py-2">
                                    <div className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-green-700 hover:text-white rounded-md" onClick={() => toggleCategory(category.name)}>
                                        <span>{category.name}</span>
                                        {category.subcategories && (openCategories[category.name] ? <FaAngleDown /> : <FaAngleRight />)}
                                    </div>
                                    {category.subcategories && openCategories[category.name] && (
                                        <ul className="ml-6 mt-2 border-l border-white pl-4">
                                            {category.subcategories.map((sub, i) => (
                                                <Link key={i} href={`/services/${sub.href}`}>
                                                    <li className="py-1 text-sm hover:underline cursor-pointer">{sub.bn}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 bg-green-600 text-white rounded">
                            <FaBars size={20} />
                        </button>
                        <h1 className="text-2xl font-bold">Main Content Area</h1>
                        <p>This is where your main content goes.</p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default Sidebar;