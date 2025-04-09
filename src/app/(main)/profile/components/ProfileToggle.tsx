'use client'

import React, { useState } from "react";

const ProfileToggle = () => {
    const [activeTab, setActiveTab] = useState("provider");

    return (
        <div className="inline-flex bg-gray-300 rounded-full p-1">
            <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === "consumer"
                        ? "bg-white text-black"
                        : "text-gray-700"
                }`}
                onClick={() => setActiveTab("consumer")}
            >
                Consumer Profile
            </button>
            <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeTab === "provider"
                        ? "bg-white text-black"
                        : "text-gray-700"
                }`}
                onClick={() => setActiveTab("provider")}
            >
                Provider Profile
            </button>
        </div>
    );
};

export default ProfileToggle;
