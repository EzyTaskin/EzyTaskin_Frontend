export default function TaskCard() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 max-w-sm">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Install kitchen sink basin</h3>
                <span className="text-xl font-bold">$500</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-2">
                <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 12.414A5 5 0 1012 7m0 0a5 5 0 015 5l4.243 4.243M21 21l-1.5-1.5"
                    />
                </svg>
                Wollongong
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg
                    className="w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v4l3 3m5-7h5M12 19v2m-7-2h14"
                    />
                </svg>
                Tues 8th, 2025
            </div>
            <button className="mt-4 bg-(--color-primary) text-white py-2 px-4 rounded-lg w-full hover:bg-indigo-700">
                View more
            </button>
        </div>
    )
}
