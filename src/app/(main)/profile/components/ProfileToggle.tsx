'use client'

import React, {useState} from "react";
import {ProfileType} from "src/app/constants/type";

const ProfileToggle = ({
                           profileType,
                           onProfileTypeChange
                       }: {
    profileType: ProfileType
    onProfileTypeChange: (profileType: ProfileType) => void
}) => {
    return (
        <div className="inline-flex bg-gray-300 rounded-full p-1">
            <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    profileType === "consumer"
                        ? "bg-white text-black"
                        : "text-gray-700"
                }`}
                onClick={() => onProfileTypeChange("consumer")}
            >
                Consumer Profile
            </button>
            <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    profileType === "provider"
                        ? "bg-white text-black"
                        : "text-gray-700"
                }`}
                onClick={() => onProfileTypeChange("provider")}
            >
                Provider Profile
            </button>
        </div>
    );
};

export default ProfileToggle;
