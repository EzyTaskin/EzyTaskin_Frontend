import React from "react";
import {CategoryResponseType} from "src/app/constants/type";

export default function SearchBar({
                                      searchQuery,
                                      onSearch,
                                      onKeyPress,
                                      categories,
                                      category,
                                      onCategoryChange,
                                      locations,
                                      location,
                                      onLocationChange,
                                      sortBy,
                                      onSortByChange,
                                  }: {
    searchQuery: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent) => void;
    categories: CategoryResponseType[];
    category: string;
    onCategoryChange: (e: string) => void;
    locations: string[];
    location: string;
    onLocationChange: (e: string) => void;
    sortBy: string;
    onSortByChange: (e: string) => void;
}) {
    return (
        <div className="flex items-center space-x-4 p-4 rounded-lg justify-center max-w-5xl ml-40">
            {/* Search Input */}
            <div className="flex items-center bg-[#767680]/12 px-4 py-2 rounded-full shadow-sm w-2xs mx-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search for a task"
                    value={searchQuery}
                    onChange={onSearch}
                    onKeyDown={onKeyPress}
                    className="ml-2 bg-transparent focus:outline-none w-full text-gray-700"
                />
            </div>

            {/* Dropdown Filters */}
            <div className="mx-7 flex gap-6">
                {/* Category Filter */}
                <select
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50"
                >
                    <option value="">Categories</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                {/* Location Filter */}
                <select
                    value={location}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50"
                >
                    <option value="">Location</option>
                    {locations.map((loc) => (
                        <option key={loc} value={loc}>
                            {loc}
                        </option>
                    ))}
                </select>

                {/* Sort By Filter */}
                <select
                    value={sortBy}
                    onChange={(e) => onSortByChange(e.target.value)}
                    className="px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50"
                >
                    <option value="">Sort by</option>
                    <option value="newest">Newest</option>
                    <option value="price_low_high">Price: Low to High</option>
                    <option value="price_high_low">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}
