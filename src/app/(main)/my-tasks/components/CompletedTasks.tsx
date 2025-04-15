"use client";
import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const completedTasks = [
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
  },
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
  },
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
  },
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
  },
  {
    title: "Install kitchen sink basin",
    price: "$500",
    location: "Wollongong",
    date: "Tues 8th, 2025",
  },
];

export default function CompletedTasks() {
  const [showAll, setShowAll] = useState(false);
  const visibleTasks = showAll ? completedTasks : completedTasks.slice(0, 4);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        COMPLETED TASKS
      </h2>
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
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  {task.date}
                </div>
              </div>
              <div className="text-lg font-bold">{task.price}</div>
            </div>
            <div className="mt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full shadow">
                View more
              </button>
            </div>
          </div>
        ))}
      </div>

      {completedTasks.length > 4 && (
        <div className="text-right mt-4">
          <button
            className="text-indigo-600 font-medium underline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View less" : "View more"}
          </button>
        </div>
      )}
    </div>
  );
}
