"use client";

import React from "react";
import Image from "next/image";
import {CheckCircle, ClipboardList, Star} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";
import {logOut} from "src/app/helpers/api/auth";
import {
    CommonDetailType,
    ConsumerProfileType,
    ProfileType,
    ProviderProfileType,
} from "src/app/constants/type";

const ProfileCard = ({
                         providerProfile,
                         commonDetail,
                         consumerProfile,
                         profileType,
                         onProfileTypeChange,
                         isEditing,
                         onIsEditingChange,
                         subpage,
                         onSubpageChange,
                     }: {
    providerProfile: ProviderProfileType;
    commonDetail: CommonDetailType;
    consumerProfile: ConsumerProfileType;
    profileType: ProfileType;
    onProfileTypeChange: (profileType: ProfileType) => void;
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
}) => {
    if (providerProfile == null || consumerProfile == null)
        return <h1> Wait </h1>;
    console.log(
        "providerProfile.subscriptionDate ",
        providerProfile.subscriptionDate
    );
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 overflow-hidden">
                    <img
                        src={`https://www.gravatar.com/avatar/?d=mp`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-xl font-semibold">{commonDetail.fullName}</h2>

                {profileType === "provider" && (
                    <ProviderContent
                        providerProfile={providerProfile}
                        isEditing={isEditing}
                        onIsEditingChange={onIsEditingChange}
                        subpage={subpage}
                        onSubpageChange={onSubpageChange}
                        onProfileTypeChange={onProfileTypeChange}
                    />
                )}

                {profileType === "consumer" && (
                    <ConsumerContent
                        consumerProfile={consumerProfile}
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

const handleLogout = () => {
    logOut();
    redirect("/");
};

const ProviderContent = ({
                             providerProfile,
                             isEditing,
                             onIsEditingChange,
                             subpage,
                             onSubpageChange,
                             onProfileTypeChange
                         }: {
    providerProfile: ProviderProfileType;
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
    onProfileTypeChange: (profileType: ProfileType) => void;
}) => {

    return (
        <>
            <div className="mt-4 text-sm flex items-center justify-center">
                {providerProfile.isPremium === true && (
                    <div className="font-bold rounded-full bg-[var(--color-primary)]/40 px-4 py-1 inline-block">
                        Premium Provider
                    </div>
                )}
            </div>
            <div className="mt-4 text-sm text-gray-700 flex flex-col items-start w-full gap-2">
                <div className="flex items-center gap-1">
                    <Star size={18} fill="#FFDC56" stroke="none"/>
                    <span>
            {providerProfile.averageRating === undefined ||
            providerProfile.averageRating === 0
                ? "0 Average Rating"
                : providerProfile.averageRating === 1
                    ? "1 Average Rating"
                    : `${providerProfile.averageRating} Average Rating`}
          </span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Image
                        src="/review.svg"
                        alt="Review"
                        width={16}
                        height={16}
                        unoptimized
                    />
                    <span>
            {providerProfile.reviewCount === 0
                ? "0 Review"
                : providerProfile.reviewCount === 1
                    ? "1 Review"
                    : `${providerProfile.reviewCount} Reviews`}
          </span>
                </div>
            </div>

            <div className="mt-6 text-base text-gray-700 flex flex-col items-start w-full gap-4">
                <div className={`cursor-pointer ${
                    subpage === "dashboard"
                        ? "text-[var(--color-primary)]"
                        : "text-gray-700"
                }`} onClick={() => onSubpageChange("dashboard")}>
                    My Dashboard
                </div>
                <Link
                    href={{
                        pathname: "/profile/your-plan",
                        query: {
                            isSubscriptionActive:
                                providerProfile.isSubscriptionActive?.toString(),
                        },
                    }}
                >
                    <div>Premium Subscriptions</div>
                </Link>
                <div className={`cursor-pointer ${
                    subpage === "performance"
                        ? "text-[var(--color-primary)]"
                        : "text-gray-700"
                }`}
                     onClick={() => onSubpageChange("performance")}>Performance
                </div>
                <div
                    className={`cursor-pointer ${
                        subpage === "payment-methods"
                            ? "text-[var(--color-primary)]"
                            : "text-gray-700"
                    }`}
                    onClick={() => onSubpageChange("payment-methods")}
                >
                    Payment Methods
                </div>
                <div
                    className={`cursor-pointer ${
                        subpage === "profile"
                            ? "text-[var(--color-primary)]"
                            : "text-gray-700"
                    }`}
                    onClick={() => {
                        onProfileTypeChange("consumer")
                        onSubpageChange("profile")
                    }}
                >
                    Personal Information
                </div>
                <div onClick={handleLogout} className="cursor-pointer">
                    Log Out
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 w-full">
                <button
                    onClick={() => onIsEditingChange(true)}
                    className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50 text-[var(--color-primary)] flex items-center justify-center gap-2"
                >
                    <Image
                        src="/edit.svg"
                        alt="Edit"
                        width={16}
                        height={16}
                        unoptimized
                    />
                    <span className="font-medium">Edit Profile</span>
                </button>

                <Link
                    href="/profile/public"
                    className="border border-gray-300 rounded-xl py-2 hover:bg-gray-50 flex items-center justify-center gap-2 text-black"
                >
                    <Image
                        src="/view.svg"
                        alt="View"
                        width={16}
                        height={16}
                        unoptimized
                    />
                    <span className="font-medium">View Public Profile</span>
                </Link>
            </div>
        </>
    );
};

const ConsumerContent = ({
                             isEditing,
                             onIsEditingChange,
                             subpage,
                             onSubpageChange,
                             consumerProfile
                         }: {
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
    consumerProfile: ConsumerProfileType;
}) => {
    return (
        <>
            <div className="mt-4 text-sm text-gray-700 flex flex-col items-start w-full mt-5 gap-2">
                <div className="flex items-center mb-1 justify-center gap-1">
                    <ClipboardList size={18} className="text-yellow-500"/>
                    <span> {consumerProfile.requestsPosted}{" "} {consumerProfile.requestsPosted === 1 ? "Task" : "Tasks"} Posted </span>
                </div>
                <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-green-600"/>
                    <span>{consumerProfile.requestsCompleted} Completed</span>
                </div>
            </div>

            <div className="mt-4 text-base text-gray-700 flex flex-col items-start w-full mt-10 gap-4">
                <div
                    className={`cursor-pointer ${
                        subpage === "profile"
                            ? "text-[var(--color-primary)]"
                            : "text-gray-700"
                    }`}
                    onClick={() => onSubpageChange("profile")}
                >
                    Profile
                </div>
                <div
                    className={`cursor-pointer ${
                        subpage === "payment-methods"
                            ? "text-[var(--color-primary)]"
                            : "text-gray-700"
                    }`}
                    onClick={() => onSubpageChange("payment-methods")}
                >
                    Payment Methods
                </div>
                <div
                    className={`cursor-pointer ${
                        subpage === "notifications"
                            ? "text-[var(--color-primary)]"
                            : "text-gray-700"
                    }`}
                    onClick={() => onSubpageChange("notifications")}
                >
                    Notifications
                </div>

                <div onClick={handleLogout} className="cursor-pointer">
                    Log Out
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
                    <span className="font-medium">Edit Profile</span>
                </button>
            </div>
        </>
    );
};

export default ProfileCard;
