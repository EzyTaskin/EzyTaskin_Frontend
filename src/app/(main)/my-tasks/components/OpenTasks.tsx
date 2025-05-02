"use client";
import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
    status: "Assigned",
    statusColor: "text-green-600",
  },
  {
    title: "Gardening",
    price: "$100",
    location: "Wollongong",
    date: "Thu 4th, 2025",
    status: "Pending",
    statusColor: "text-yellow-500",
  },
  {
    title: "House Cleaning",
    price: "$200",
    location: "Wollongong",
    date: "Mon 12th, 2025",
    status: "Assigned",
    statusColor: "text-green-600",
  },
  {
    title: "Removal",
    price: "$50",
    location: "Wollongong",
    date: "Sat 1st, 2025",
    status: "Overdue",
    statusColor: "text-red-600",
  },
  // Add more tasks if needed
  {
    title: "Window Cleaning",
    price: "$120",
    location: "Wollongong",
    date: "Wed 18th, 2025",
    status: "Pending",
    statusColor: "text-yellow-500",
  },
  {
    title: "Lawn Mowing",
    price: "$90",
    location: "Wollongong",
    date: "Fri 20th, 2025",
    status: "Assigned",
    statusColor: "text-green-600",
  },
];

export default function OpenTasks() {
  const [showAll, setShowAll] = useState(false);
  const visibleTasks = showAll ? tasks : tasks.slice(0, 4);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">OPEN TASKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleTasks.map((task, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <MapPin size={16} className="mr-1" />
                  {task.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar size={16} className="mr-1" />
                  {task.date}
                </div>
                <span className={`text-sm font-medium ${task.statusColor}`}>
                  {task.status}
                </span>
              </div>
              <div className="text-lg font-bold">{task.price}</div>
            </div>
            <div className="mt-4">
              <Link href="/my-tasks/1">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full shadow">
                  Task details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {!showAll && tasks.length > 4 && (
        <div className="text-right mt-4">
          <button
            className="text-indigo-600 font-medium underline"
            onClick={() => setShowAll(true)}
          >
            View more
          </button>
        </div>
      )}
      {visibleTasks.length > 4 && (
        <div className="text-right mt-4">
          <button
            className="text-indigo-600 font-medium underline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View less" : "View more"}
          </button>
        </div>
      )}
      <hr className="my-12 border-t border-gray-300" />
    </div>
  );
}
