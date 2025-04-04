export default function SearchBar() {
    return (
        <div className="flex items-center space-x-4 p-2 rounded-lg justify-center">
            {/* Search Input */}
            <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm border">
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
                    className="ml-2 bg-transparent focus:outline-none w-full text-gray-700"
                />
            </div>

            {/* Dropdown Buttons */}
            {["Categories", "Location", "Sort by"].map((label) => (
                <button
                    key={label}
                    className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border text-gray-700 font-medium hover:bg-gray-50"
                >
                    {label}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 0 1 1.06 0L10 10.94l3.71-3.73a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.23 8.27a.75.75 0 0 1 0-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            ))}
        </div>
    )
}
