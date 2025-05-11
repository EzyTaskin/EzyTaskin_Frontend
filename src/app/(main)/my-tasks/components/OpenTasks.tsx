"use client";
import React, {useState} from "react";
import {Calendar, MapPin} from "lucide-react";
import Link from "next/link";
import {TasksResponseType} from "src/app/constants/type";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function OpenTasks({openTasks}: {
    openTasks: TasksResponseType[];
}) {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">OPEN TASKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {openTasks.map((task, index) => {
                    let statusColor, status;
                    if (!task.selected) {
                        statusColor = "red";
                        status = "Open";
                    } else {
                        statusColor = "yellow";
                        status = "Assigned;"
                    }
                    return (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-1">
                                        <MapPin size={16} className="mr-1"/>
                                        {task.location}
                                    </div>
                                    {task.dueDate && <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <Calendar size={16} className="mr-1"/>
                                        {dayjs(task.dueDate).fromNow()}
                                    </div>}
                                    <span className={`text-sm font-medium text-${statusColor}-600`}>{status}</span>
                                </div>
                                <div className="text-lg font-bold">${task.budget}</div>
                            </div>
                            <div className="mt-4">
                                <Link href={`/my-tasks/details?taskId=${task.id}`}>
                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full shadow">
                                        Task details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <hr className="my-12 border-t border-gray-300"/>
        </div>
    );
}
