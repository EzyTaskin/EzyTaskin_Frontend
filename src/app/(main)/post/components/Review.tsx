"use client";

import React from "react";
import { MapPin, CheckCircle, Circle } from "lucide-react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

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

export default function Review() {
  return (
    <div className="bg-white p-3">
      <div className="max-w-2xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              1
            </div>
            <span>Task details</span>
          </div>
          <div className="h-px flex-1 bg-gray-300 mx-2" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              2
            </div>
            <span>Location & Budget</span>
          </div>
          <div className="h-px flex-1 bg-gray-300 mx-2" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-white flex items-center justify-center bg-[var(--color-primary)] rounded-full">
              3
            </div>
            <span className="text-[var(--color-primary)]">Review & Post</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Review your task</h2>
          <p className="text-gray-600">
            Make sure everything looks good before posting
          </p>
          <h3 className="font-semibold text-gray-800 mt-8 mb-4">
            Task Summary
          </h3>
          <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p className="font-medium text-gray-500">Title</p>
              <p>Moving Furniture</p>

              <p className="font-medium text-gray-500">Category</p>
              <p>Moving</p>

              <p className="font-medium text-gray-500">Location</p>
              <p>178 Burelli St</p>

              <p className="font-medium text-gray-500">Budget</p>
              <p>$50</p>

              <p className="font-medium text-gray-500">Due date</p>
              <p>Sun, 6 Apr</p>

              <p className="font-medium text-gray-500">Description</p>
              <p className="col-span-2">
                I need help to move the fridge, bed, sofa and other two heavy
                wardrobes.
              </p>
            </div>
          </div>

          <div className="flex justify-between my-8">
            <PrimaryButton
              label="Back"
              width="w-4xs"
              bgColor="bg-white"
              textColor="text-black"
              textSize="text-sm"
              borderRadius="rounded-md"
              borderStyle="border border-gray-300"
            />
            <PrimaryButton
              label="Post"
              width="w-4xs"
              textSize="text-sm"
              borderRadius="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
