import React from "react";
import {Filter} from "lucide-react";

const categories = [
    "Home Cleaning",
    "Handyman",
    "Removalist",
    "Home Renovation",
    "Business Services",
    "Tech Help",
    "Delivery",
    "Gardening",
    "Furniture Assembly",
];

export default function ServicesProviderSearch() {
    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="bg-blue-50 p-6 rounded-xl text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Find Services Providers
                </h1>
                <p className="text-gray-600 mb-4">
                    Connect with top-rated professionals in your area for any service you need
                </p>
                <div className="flex justify-center gap-2 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search by name, service, or location"
                        className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100">
                        <Filter className="h-5 w-5"/> Filters
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Filter Options</h2>
                    <button className="text-sm text-blue-600 font-medium hover:underline">
                        Clear all
                    </button>
                </div>
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <span
                            key={category}
                            className="px-4 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-200"
                        >
              {category}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
