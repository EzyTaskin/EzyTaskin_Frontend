"use client";
import React, { useState } from "react";
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
  {
    title: "Garage Cleaning",
    location: "Chatswood",
    date: "Feb 15, 2025",
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
  {
    name: "Lucas W.",
    date: "Jan 2025",
    text: "Impressive! Arrived early, finished quickly, and exceeded expectations.",
    rating: 5,
  },
];

export default function Profile() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const visibleJobs = showAllJobs ? jobs : jobs.slice(0, 4);
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="min-h-screen p-6">
      <div className="bg-[#F3F3FF]/70 rounded-xl p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6 pt-6">
          <div className="w-50 h-50 bg-gray-300 rounded-full mx-auto md:mx-0"></div>

          <div className="pt-10">
            <h3 className="text-base font-semibold text-[var(--color-primary)] mb-1">
              ABOUT ME
            </h3>
            <p className="text-sm text-gray-700">
              Reliable, thorough, and friendly. My goal is to leave your home
              sparkling!
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2">
              CATEGORIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-sm font-bold border border-gray-300 rounded-full text-gray-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6 py-10 flex flex-col gap-10">
          <div>
            <div className="flex flex-col md:flex-row md:items-start">
              <div>
                <h1 className="text-5xl font-bold text-gray-900">
                  SARAH JOHNSON
                </h1>
                <p className="text-[var(--color-primary)] text-xl font-medium">
                  House cleaner
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mt-2 text-gray-700 text-lg">
                    <Star
                      className="text-yellow-500 w-5 h-5"
                      fill="currentColor"
                    />
                    4.7 (93 reviews)
                  </div>
                  <div className="flex items-center gap-2 text-gray-700  text-lg">
                    <MapPin className="w-5 h-5 text-red-500" /> Sydney, NSW
                  </div>
                  <div className="flex items-center gap-2 text-gray-700  text-lg">
                    <Circle className="w-5 h-5 text-green-500 fill-green-500" />{" "}
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JOB COMPLETED */}
          <div>
            <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2">
              JOB COMPLETED
            </h3>
            <ul className="space-y-4">
              {visibleJobs.map((job, idx) => (
                <li key={idx} className="text-sm">
                  <p className="font-semibold text-gray-800">{job.title}</p>
                  <p className="text-gray-600">
                    {job.location} – {job.date}
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 mt-1">
                    {job.status === "Completed" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-green-500 fill-green-500" />
                    )}
                    {job.status}
                  </div>

                  {/* Divider */}
                  {idx < visibleJobs.length - 1 && (
                    <hr className="mt-3 border-t border-gray-500 w-60" />
                  )}
                </li>
              ))}
            </ul>

            {jobs.length > 4 && (
              <button
                onClick={() => setShowAllJobs(!showAllJobs)}
                className="text-sm text-[var(--color-primary)] font-medium mt-2"
              >
                {showAllJobs ? "▲ Show less" : "▼ View more jobs"}
              </button>
            )}
          </div>

          {/* REVIEWS */}
          <div>
            <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">
              REVIEWS FROM CLIENTS
            </h3>
            {visibleReviews.map((review, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold text-gray-800">
                  {review.name} – {review.date}
                </p>
                <p className="text-sm text-gray-700 mb-1">“{review.text}”</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      fill={i < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <div className="flex gap-10 mt-4 pr-4">
                  <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
                  <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
                  <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
                </div>
              </div>
            ))}
            {reviews.length > 3 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="text-sm text-[var(--color-primary)] font-medium"
              >
                {showAllReviews ? "▲ Show less" : "▼ View more reviews"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
