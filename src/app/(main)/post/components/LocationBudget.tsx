'use client'

import React, {useState} from "react";
import {Calendar, MapPin} from "lucide-react";

export default function LocationBudget() {
    const [budget, setBudget] = useState(50);
    const [remote, setRemote] = useState(false);

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2 text-purple-600">
                        <div
                            className="w-6 h-6 flex items-center justify-center border-2 border-purple-600 rounded-full">
                            1
                        </div>
                        <span>Task details</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2 text-purple-600">
                        <div
                            className="w-6 h-6 flex items-center justify-center border-2 border-purple-600 rounded-full">
                            2
                        </div>
                        <span>Location & Budget</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2">
                        <div
                            className="w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded-full">3
                        </div>
                        <span>Review & Post</span>
                    </div>
                </div>

                <div className="bg-white min-h-screen p-6 flex justify-center items-start">
                    <div className="bg-white rounded-xl p-6 max-w-xl w-full border">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Location and Budget</h2>
                        <p className="text-gray-600 mb-6">Tell us where and how much you’re willing to pay</p>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Task location</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="e.g., 123 Keira St, Wollongong, 2500"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm"
                                />
                                <MapPin className="absolute top-2.5 right-3 w-5 h-5 text-gray-400"/>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Where will this task be performed?</p>
                            <div className="mt-4 border rounded-md p-3">
                                <label className="inline-flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={remote}
                                        onChange={() => setRemote(!remote)}
                                        className="form-checkbox h-4 w-4 text-purple-600 border-gray-300"
                                    />
                                    This task can be done remotely
                                </label>
                                <p className="text-sm text-gray-500 mt-1">
                                    Check if the service provider doesn’t need to be physically present.
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Due date (optional)</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="dd/mm/yyyy"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm"
                                />
                                <Calendar className="absolute top-2.5 right-3 w-5 h-5 text-gray-400"/>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">When does this task need to be completed?</p>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Budget: ${budget}</label>
                            <input
                                type="range"
                                min="5"
                                max="1000"
                                value={budget}
                                onChange={(e) => setBudget(Number(e.target.value))}
                                className="w-full accent-purple-500"
                            />
                            <div className="flex justify-between text-sm text-gray-500 mt-1">
                                <span>$5</span>
                                <span>$500</span>
                                <span>$1000</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">How much are you willing to pay for this task?</p>
                        </div>

                        <div className="flex justify-between mt-6">
                            <button className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700">Back
                            </button>
                            <button className="px-4 py-2 text-sm rounded-md bg-purple-600 text-white">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
