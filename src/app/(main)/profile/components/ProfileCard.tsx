"use client";

import React from "react";
import Image from "next/image";
import { Star, ClipboardList, CheckCircle } from "lucide-react";
import Link from "next/link";
import { logOut } from "src/app/helpers/api/auth";
import {
  ConsumerProfileType,
  ProfileType,
  ProviderProfileType,
} from "src/app/constants/type";

const ProfileCard = ({
  providerProfile,
  consumerProfile,
  profileType,
  onProfileTypeChange,
  isEditing,
  onIsEditingChange,
  subpage,
  onSubpageChange,
}: {
  providerProfile: ProviderProfileType;
  consumerProfile: ConsumerProfileType;
  profileType: ProfileType;
  onProfileTypeChange: (profileType: ProfileType) => void;
  isEditing: boolean;
  onIsEditingChange: (value: boolean) => void;
  subpage: string;
  onSubpageChange: (value: string) => void;
}) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 border border-gray-200">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
        <h2 className="text-xl font-semibold">Mike Thomas</h2>
        <p className="text-gray-500 text-sm">Member since January 2025</p>
        <span className="mt-2 px-4 py-1 text-sm bg-indigo-200 text-indigo-800 rounded-full font-medium">
          {" "}
          Premium Provider{" "}
        </span>
        {profileType == "provider" && (
          <ProviderContent
            isEditing={isEditing}
            onIsEditingChange={onIsEditingChange}
            subpage={subpage}
            onSubpageChange={onSubpageChange}
          />
        )}
        {profileType == "consumer" && (
          <ConsumerContent
            isEditing={isEditing}
            onIsEditingChange={onIsEditingChange}
            subpage={subpage}
            onSubpageChange={onSubpageChange}
          />
        )}
      </div>
    </div>
  );
};

const ProviderContent = ({
  isEditing,
  onIsEditingChange,
  subpage,
  onSubpageChange,
}: {
  isEditing: boolean;
  onIsEditingChange: (value: boolean) => void;
  subpage: string;
  onSubpageChange: (value: string) => void;
}) => {
  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div className="mt-4 text-sm text-gray-700 flex flex-col items-start w-full mt-10 gap-2">
        <div className="flex items-center mb-1 justify-center gap-1">
          <Star size={18} fill="#FFDC56" stroke="none" />
          <span>4.8 Average rating</span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/review.svg"
            alt="Review"
            width={16}
            height={16}
            unoptimized
          />
          <span>12 Reviews</span>
        </div>
      </div>

      <div className="mt-4 text-base text-gray-700 flex flex-col items-start w-full mt-10 gap-4">
        <a href="#" className="text-indigo-600 font-medium hover:underline">
          My dashboard
        </a>
        <div className="text-gray-700">Premium Subscriptions</div>
        <div className="text-gray-700">Performance</div>
        <div className="text-gray-700" onClick={handleLogout}>
          Log out
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 w-full mt-10">
        <button
          onClick={(e) => onIsEditingChange(true)}
          className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50 text-[var(--color-primary)] flex items-center justify-center gap-2"
        >
          <Image
            src="/edit.svg"
            alt="Edit"
            width={16}
            height={16}
            unoptimized
          />
          <span className="font-medium">Edit profile</span>
        </button>

        <button className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50 flex items-center justify-center gap-2 text-black">
          <Image
            src="/view.svg"
            alt="View"
            width={16}
            height={16}
            unoptimized
          />
          <Link href={"/profile/public"}>
            <span className="font-medium">View public profile</span>
          </Link>
        </button>
      </div>
    </>
  );
};

const ConsumerContent = ({
  isEditing,
  onIsEditingChange,
  subpage,
  onSubpageChange,
}: {
  isEditing: boolean;
  onIsEditingChange: (value: boolean) => void;
  subpage: string;
  onSubpageChange: (value: string) => void;
}) => {
  return (
    <>
      <div className="mt-4 text-sm text-gray-700 flex flex-col items-start w-full mt-10 gap-2">
        <div className="flex items-center mb-1 justify-center gap-1">
          <ClipboardList size={18} className="text-yellow-500" />
          <span>3 task posted</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle size={16} className="text-green-600" />
          <span>2 completed</span>
        </div>
      </div>

      <div className="mt-4 text-base text-gray-700 flex flex-col items-start w-full mt-10 gap-4">
        <div
          className="text-gray-700 cursor-pointer"
          onClick={() => onSubpageChange("profile")}
        >
          Profile
        </div>
        <div
          className="text-gray-700 cursor-pointer"
          onClick={() => onSubpageChange("payment-methods")}
        >
          Payment methods
        </div>
        <div
          className="text-gray-700 cursor-pointer"
          onClick={() => onSubpageChange("notifications")}
        >
          Notifications
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 w-full mt-10">
        <button
          onClick={(e) => onIsEditingChange(true)}
          className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50 text-[var(--color-primary)] flex items-center justify-center gap-2"
        >
          <Image
            src="/edit.svg"
            alt="Edit"
            width={16}
            height={16}
            unoptimized
          />
          <span className="font-medium">Edit profile</span>
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
