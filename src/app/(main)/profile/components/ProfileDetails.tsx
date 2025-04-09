import React from "react";
import {ProfileType} from "src/app/constants/type";

const ProfileDetails = ({
                            profileType
                        }: {
    profileType: ProfileType
}) => {
    if (profileType == 'provider') {
        return (
            <div className="max-w-3xl mx-auto p-6 space-y-8 text-gray-800">
                {/* About Me */}
                <div className="border rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">About me</h3>
                        <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">Edit</a>
                    </div>
                    <p>Reliable, thorough, and friendly.<br/>My goal is to leave your home sparkling!</p>
                </div>

                {/* Completed Tasks */}
                <div className="border rounded-xl p-4 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4">Completed tasks</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-600 border-b">
                            <tr>
                                <th className="py-2">Task</th>
                                <th className="py-2">Client</th>
                                <th className="py-2">Date</th>
                                <th className="py-2">Category</th>
                                <th className="py-2">Rating</th>
                                <th className="py-2">Earnings</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[
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
                                    category: "Gardening",
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
                            ].map((item, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <td className="py-3">{item.task}</td>
                                    <td>{item.client}</td>
                                    <td>{item.date}</td>
                                    <td>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
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
                    <div className="text-center mt-3">
                        <button className="text-sm text-gray-700 hover:underline">▼ Show more</button>
                    </div>
                </div>

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
        )
    } else {
        return (
            <h1>
                Hey
            </h1>
        )
    }

};

export default ProfileDetails;
