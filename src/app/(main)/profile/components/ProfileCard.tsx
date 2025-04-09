import React from 'react';

const ProfileCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"/>
                <h2 className="text-xl font-semibold">Mike Thomas</h2>
                <p className="text-gray-500 text-sm">Member since January 2025</p>
                <span className="mt-2 px-4 py-1 text-sm bg-indigo-200 text-indigo-800 rounded-full font-medium">
          Premium Provider
        </span>

                <div className="mt-4 text-sm text-gray-700 flex flex-col items-center">
                    <div className="flex items-center mb-1">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span>4.8 Average rating</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-1">📝</span>
                        <span>12 Reviews</span>
                    </div>
                </div>

                <div className="mt-6 space-y-2 w-full text-center">
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                        My dashboard
                    </a>
                    <div className="text-gray-700">Premium Subscriptions</div>
                    <div className="text-gray-700">Performance</div>
                </div>

                <div className="mt-6 flex flex-col gap-2 w-full">
                    <button className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50">
                        ✏️ Edit profile
                    </button>
                    <button className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50">
                        🔗 View public profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
