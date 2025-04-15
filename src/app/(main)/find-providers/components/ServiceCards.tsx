"use client";
import React, { useState } from "react";
import { Filter, Star } from "lucide-react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

const ITEMS_PER_PAGE = 9;

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

// Dummy data for demonstration
const serviceProviders = Array.from({ length: 25 }, (_, i) => ({
  name: `Provider ${i + 1}`,
  location: "Wollongong",
  rating: 4.8,
  reviews: Math.floor(Math.random() * 100),
  tags: ["Cleaning", "Fast", "Verified"],
  description:
    "Experienced provider offering quality services.Happy vakdjejriu hdhkjkkjkjdjad33hjhk",
}));

export default function ServicesProviderSearch() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(serviceProviders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = serviceProviders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="px-20 text-left">
      {/* Results */}
      <h2 className="text-2xl font-semibold my-8">
        Showing <span className="font-bold">{serviceProviders.length}</span>{" "}
        service cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {currentItems.map((provider, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 max-w-xs mx-auto"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-semibold text-lg">{provider.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star
                      className="w-4 h-4 text-yellow-500 mr-1"
                      fill="currentColor"
                    />
                    {provider.rating} ({provider.reviews} reviews)
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">📍 {provider.location}</p>
              <div className="flex flex-wrap gap-2">
                {provider.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-2 py-1 text-xs rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700">{provider.description}</p>
              <div className="flex justify-between my-6">
                <PrimaryButton
                  label="View more"
                  width="w-4xs"
                  textSize="text-sm"
                  borderRadius="rounded-md"
                />
                <PrimaryButton
                  label="Contact"
                  width="w-4xs"
                  bgColor="bg-white"
                  textColor="text-black"
                  textSize="text-sm"
                  borderRadius="rounded-md"
                  borderStyle="border border-gray-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-20 space-x-4">
        <button
          className="px-3 py-1 rounded-md text-lg hover:bg-gray-100 disabled:opacity-30 text-[var(--color-primary)]"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 text-base rounded-md ${
              currentPage === idx + 1
                ? "bg-[var(--color-primary)] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded-md text-lg hover:bg-gray-100 disabled:opacity-30 text-[var(--color-primary)]"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}
