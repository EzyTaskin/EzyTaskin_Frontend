import React from "react";
import { Calendar, MapPin } from "lucide-react";

const tasks = [
    {
        title: "Install kitchen sink basin",
        price: "$500",
        location: "Wollongong",
        date: "Tues 8th, 2025",
        status: "Assigned",
        statusColor: "text-green-600"
    },
    {
        title: "Gardening",
        price: "$100",
        location: "Wollongong",
        date: "Thu 4th, 2025",
        status: "Pending",
        statusColor: "text-yellow-500"
    },
    {
        title: "House Cleaning",
        price: "$200",
        location: "Wollongong",
        date: "Mon 12th, 2025",
        status: "Assigned",
        statusColor: "text-green-600"
    },
    {
        title: "Removal",
        price: "$50",
        location: "Wollongong",
        date: "Sat 1st, 2025",
        status: "Overdue",
        statusColor: "text-red-600"
    }
];

export default function OpenTasks() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">OPEN TASKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tasks.map((task, index) => (
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
                                <span className={`text-sm font-medium ${task.statusColor}`}>{task.status}</span>
                            </div>
                            <div className="text-lg font-bold">{task.price}</div>
                        </div>
                        <div className="mt-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full shadow">View more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
