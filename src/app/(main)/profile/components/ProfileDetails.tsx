"use client";
import React, { useState } from "react";
import { ProfileType } from "src/app/constants/type";

const ProfileDetails = ({ profileType }: { profileType: ProfileType }) => {
  const [showAll, setShowAll] = useState(false);

  const tasks = [
    {
      task: "Home Cleaning Service",
      client: "Emma Johnson",
      date: "15/02/2025",
      category: "Home Cleaning",
      rating: 5,
      earnings: "$100",
    },
    {
      task: "Garden Landscaping",
      client: "Michael Smith",
      date: "20/03/2025",
      category: "Move-In-Out Cleaning",
      rating: 4,
      earnings: "$220",
    },
    {
      task: "Furniture Assembly",
      client: "Sarah Williams",
      date: "30/03/2025",
      category: "Furniture",
      rating: 5,
      earnings: "$85",
    },
    {
      task: "Window Cleaning",
      client: "James Lee",
      date: "05/04/2025",
      category: "Window Cleaning",
      rating: 5,
      earnings: "$95",
    },
  ];

  const visibleTasks = showAll ? tasks : tasks.slice(0, 3);

  if (profileType === "provider") {
    return (
      <div className="max-w-xl mx-auto p-4 space-y-8 text-gray-800">
        {/* ...About Me section remains unchanged... */}

        {/* Completed Tasks */}
        <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Completed tasks</h3>
          <div className="w-full overflow-x-visible">
            <table className="table-auto w-full text-sm text-left">
              <thead className="text-gray-600 border-b">
                <tr>
                  <th className="p-2">Task</th>
                  <th className="p-2">Client</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Rating</th>
                  <th className="p-2">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {visibleTasks.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3">{item.task}</td>
                    <td>{item.client}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <span className="text-yellow-500">⭐</span> {item.rating}
                    </td>
                    <td className="font-medium">{item.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {tasks.length > 3 && (
            <div className="text-center mt-3">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm text-gray-700 hover:underline font-bold cursor-pointer"
              >
                {showAll ? "▲ Show less" : "▼ Show more"}
              </button>
            </div>
          )}
        </div>

        {/* ...Service Categories section remains unchanged... */}
        {/* Service Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <span className="mr-2">🏷️</span>Service categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Home Cleaning",
              "Holiday Rental Cleaning",
              "Move-In-Out Cleaning",
              "Gardening",
              "Regular Cleaning",
              "Furniture",
            ].map((category, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 text-sm rounded-full font-medium text-gray-700"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Hey</h1>;
  }
};

export default ProfileDetails;
