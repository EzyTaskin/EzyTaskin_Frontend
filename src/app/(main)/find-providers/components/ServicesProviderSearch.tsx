import React, { useState } from "react";
import { Filter } from "lucide-react";

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

export default function ServicesProviderSearch({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(input);
    }
  };

  return (
    <div className="px-20 text-left">
      <div className="bg-[#EEEEFF]/70 p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Find Services Providers
        </h1>
        <p className="text-gray-600 mb-4">
          Connect with top-rated professionals in your <br /> area for any
          service you need
        </p>
        <div className="flex gap-2 max-w-xl">
          <input
            type="text"
            placeholder="Search by name, service, or location"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={() => onSearch(input)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100"
          >
            <Filter className="h-5 w-5" /> Filter
          </button>
        </div>
      </div>
      {/* Filters Section */}
      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-semibold text-gray-800">
            Filter Options
          </h2>
          <button className="text-base text-[var(--color-primary)] font-medium hover:text-[var(--color-primary)]/40 cursor-pointer">
            Clear all
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
          </div>
          <div>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-1.5 bg-white text-sm text-black rounded-full border border-gray-300 cursor-pointer hover:bg-gray-200 mr-4 font-md"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
