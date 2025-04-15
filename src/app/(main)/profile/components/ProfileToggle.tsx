"use client";

import React from "react";
import { ProfileType } from "src/app/constants/type";

const ProfileToggle = ({
  profileType,
  onProfileTypeChange,
}: {
  profileType: ProfileType;
  onProfileTypeChange: (profileType: ProfileType) => void;
}) => {
  return (
    <div className="max-w-sm w-full flex bg-[#DBDBDB]/60 rounded-md p-1">
      <button
        className={`w-1/2 text-center py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          profileType === "consumer" ? "bg-white text-black" : "text-gray-500"
        }`}
        onClick={() => onProfileTypeChange("consumer")}
      >
        Consumer Profile
      </button>
      <button
        className={`w-1/2 text-center py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          profileType === "provider" ? "bg-white text-black" : "text-gray-500"
        }`}
        onClick={() => onProfileTypeChange("provider")}
      >
        Provider Profile
      </button>
    </div>
  );
};

export default ProfileToggle;
