import React from "react";
import { Star, MapPin, CheckCircle, Circle } from "lucide-react";

const categories = [
    "Home Cleaning",
    "Holiday Rental Cleaning",
    "Move-In-Out Cleaning",
    "End-of-Lease Cleaning",
    "Deep Cleaning",
    "Gardening",
    "Regular Cleaning",
];

const jobs = [
    {
        title: "End-of-Lease Clean for 2BR Unit",
        location: "Newtown",
        date: "Mar 28, 2025",
        status: "Completed",
    },
    {
        title: "Weekly Cleaning (Ongoing)",
        location: "Surry Hills",
        date: "Mar 21, 2025",
        status: "Active",
    },
    {
        title: "Deep Clean After Renovation",
        location: "Parramatta",
        date: "Mar 10, 2025",
        status: "Completed",
    },
    {
        title: "Airbnb Clean & Reset",
        location: "Bondi Beach",
        date: "Feb 29, 2025",
        status: "Completed",
    },
];

const reviews = [
    {
        name: "Jessica M.",
        date: "Mar 2025",
        text: "Sarah was amazing! She was fast, friendly, and left everything spotless. Will book again.",
        rating: 5,
    },
    {
        name: "Daniel K.",
        date: "Feb 2025",
        text: "Very professional. I appreciated her attention to detail and great attitude.",
        rating: 5,
    },
    {
        name: "Anya R.",
        date: "Jan 2025",
        text: "Good overall, a few missed spots but she came back and fixed it all.",
        rating: 4,
    },
];

export default function Profile() {
    return (
        <div className="bg-blue-50 min-h-screen p-6">
            <div className="bg-white rounded-xl p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="space-y-6">
                    <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto md:mx-0"></div>

                    <div>
                        <h3 className="text-sm font-semibold text-purple-600 mb-1">ABOUT ME</h3>
                        <p className="text-sm text-gray-700">
                            Reliable, thorough, and friendly. My goal is to leave your home sparkling!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-purple-600 mb-2">CATEGORIES</h3>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="px-3 py-1 text-sm bg-gray-100 border border-gray-300 rounded-full text-gray-800"
                                >
                  {cat}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6">
                    <div>
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">SARAH JOHNSON</h2>
                                <p className="text-purple-600 font-medium">House cleaner</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
                                    <Star className="text-yellow-500 w-4 h-4" fill="currentColor" />
                                    4.7 (93 reviews)
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <MapPin className="w-4 h-4 text-red-500" /> Sydney, NSW
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Circle className="w-4 h-4 text-green-500 fill-green-500" /> Available
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-purple-600 mb-2">JOB COMPLETED</h3>
                        <ul className="space-y-4">
                            {jobs.map((job, idx) => (
                                <li key={idx} className="text-sm">
                                    <p className="font-semibold text-gray-800">{job.title}</p>
                                    <p className="text-gray-600">{job.location} – {job.date}</p>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                        {job.status === "Completed" ? (
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-green-500 fill-green-500" />
                                        )}
                                        {job.status}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="text-sm text-purple-600 font-medium mt-2 inline-block">View more jobs</a>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-purple-600 mb-2">REVIEWS FROM CLIENTS</h3>
                        {reviews.map((review, idx) => (
                            <div key={idx} className="mb-4">
                                <p className="font-semibold text-gray-800">{review.name} – {review.date}</p>
                                <p className="text-sm text-gray-700 mb-1">“{review.text}”</p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                                            fill={i < review.rating ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                        <a href="#" className="text-sm text-purple-600 font-medium">View more reviews</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
