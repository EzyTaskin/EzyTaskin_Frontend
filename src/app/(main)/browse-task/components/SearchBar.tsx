import React from "react";

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
    categories: {
        id: string;
        name: string;
    }[];
    category: string;
    onCategoryChange: (e: string) => void;
    locations: string[];
    location: string;
    onLocationChange: (e: string) => void;
    sortBy: string;
    onSortByChange: (e: string) => void;
}) {
    return (
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-lg justify-center max-w-7xl mx-auto">
            {/* Search Input */}
            <div className="flex items-center bg-[#767680]/12 px-4 py-2 rounded-full shadow-sm flex-grow min-w-[200px]">
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
            <div className="flex flex-wrap gap-4 justify-center shrink-0">
                {/* Category Filter */}
                <div
                    className="flex px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50 basis-32 sm:basis-40 md:basis-48 lg:basis-52 shrink-0"
                >
                    <select
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="border-none outline-none flex-grow"
                    >
                        <option value="">Categories</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Location Filter */}
                <div
                    className="flex px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50 basis-32 sm:basis-40 md:basis-48 lg:basis-52 shrink-0"
                >
                    <select
                        value={location}
                        onChange={(e) => onLocationChange(e.target.value)}
                        className="border-none outline-none flex-grow"
                    >
                        <option value="">Location</option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                </div>


                {/* Sort By Filter */}
                <div
                    className="flex px-4 py-2 rounded-full shadow-sm bg-[#767680]/12 text-gray-700 font-medium hover:bg-gray-50 basis-32 sm:basis-40 md:basis-48 lg:basis-52 shrink-0"
                >
                    <select
                        value={sortBy}
                        onChange={(e) => onSortByChange(e.target.value)}
                        className="border-none outline-none flex-grow"
                    >
                        <option value="">Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="price_low_high">Price: Low to High</option>
                        <option value="price_high_low">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
