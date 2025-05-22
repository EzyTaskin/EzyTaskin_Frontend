"use client";
import React, {useState} from "react";
import {Star, MapPin, CheckCircle, Circle} from "lucide-react";
import useQueryProfile from "src/app/hooks/useQueryProfile";
import {useSearchParams} from "next/navigation";

export default function Profile() {
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');

    const {providerProfile, consumerProfile, providerProfileSuccess, consumerProfileSuccess} = useQueryProfile(
        userId
    );

    if (!providerProfileSuccess || !consumerProfileSuccess) return <h1 className="text-center text-red-500 text-xl font-bold">
        Invalid profile
    </h1>

    if (!providerProfile || !consumerProfile) {
        return <div>Loading...</div>;
    }

    console.log(providerProfile);
    console.log(consumerProfile);

    const visibleJobs = showAllJobs
        ? providerProfile.completedRequests
        : providerProfile.completedRequests.slice(0, 4);

    const visibleReviews = showAllReviews
        ? providerProfile.reviewCount
        : providerProfile.reviewCount > 3
            ? Array.from({length: 3})
            : Array.from({length: providerProfile.reviewCount});

    return (
        <div className="min-h-screen p-6">
            <div className="bg-[#F3F3FF]/70 rounded-xl p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="space-y-6 pt-6">
                    {/* Avatar */}
                    <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto md:mx-0 overflow-hidden">
                        <img
                            src={`https://www.gravatar.com/avatar/?d=mp`}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* About Me */}
                    <div className="pt-10">
                        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-1">
                            ABOUT ME
                        </h3>
                        <p className="text-sm text-gray-700">
                            {providerProfile.description || "No description available."}
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2">
                            CATEGORIES
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {providerProfile.categories.map((cat) => (
                                <span
                                    key={cat.id}
                                    className="px-3 py-1 text-sm font-bold border border-gray-300 rounded-full text-gray-800"
                                >
                                    {cat.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6 py-10 flex flex-col gap-10">
                    {/* Name & Info */}
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">
                            {consumerProfile.name}
                        </h1>
                        <p className="text-[var(--color-primary)] text-xl font-medium">
                            {providerProfile.isPremium ? "Premium Provider" : "Service Provider"}
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mt-2 text-gray-700 text-lg">
                                <Star
                                    className="text-yellow-500 w-5 h-5"
                                    fill="currentColor"
                                />
                                {providerProfile.averageRating && providerProfile.averageRating.toFixed(1)} ({providerProfile.reviewCount} reviews)
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 text-lg">
                                <MapPin className="w-5 h-5 text-red-500"/>
                                {providerProfile.address}
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 text-lg">
                                <Circle className="w-5 h-5 text-green-500 fill-green-500"/>
                                Available
                            </div>
                        </div>
                    </div>

                    {/* Jobs Completed */}
                    <div>
                        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2">
                            JOB COMPLETED
                        </h3>
                        <ul className="space-y-4">
                            {visibleJobs.map((job, idx) => (
                                <li key={idx} className="text-sm">
                                    <p className="font-semibold text-gray-800">{job.title}</p>
                                    <p className="text-gray-600">
                                        {job.location} – {new Date(job.completedDate).toLocaleDateString()}
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                        <CheckCircle className="w-4 h-4 text-green-500"/>
                                        Completed
                                    </div>
                                    {idx < visibleJobs.length - 1 && (
                                        <hr className="mt-3 border-t border-gray-500 w-60"/>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {providerProfile.completedRequests.length > 4 && (
                            <button
                                onClick={() => setShowAllJobs(!showAllJobs)}
                                className="text-sm text-[var(--color-primary)] font-medium mt-2"
                            >
                                {showAllJobs ? "▲ Show less" : "▼ View more jobs"}
                            </button>
                        )}
                    </div>

                    {/*/!* Reviews Placeholder *!/*/}
                    {/*<div>*/}
                    {/*    <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">*/}
                    {/*        REVIEWS FROM CLIENTS*/}
                    {/*    </h3>*/}
                    {/*    {visibleReviews.map((_, idx) => (*/}
                    {/*        <div key={idx} className="mb-4">*/}
                    {/*            <p className="font-semibold text-gray-800">*/}
                    {/*                Client {idx + 1} – {new Date().toLocaleDateString()}*/}
                    {/*            </p>*/}
                    {/*            <p className="text-sm text-gray-700 mb-1">*/}
                    {/*                “Sample review text for demonstration.”*/}
                    {/*            </p>*/}
                    {/*            <div className="flex gap-1">*/}
                    {/*                {[...Array(5)].map((_, i) => (*/}
                    {/*                    <Star*/}
                    {/*                        key={i}*/}
                    {/*                        className={`w-4 h-4 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}*/}
                    {/*                        fill={i < 4 ? "currentColor" : "none"}*/}
                    {/*                    />*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}
