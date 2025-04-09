import React from "react";
import { MapPin, Calendar, User, Eye, DollarSign } from "lucide-react";

export default function TaskDetailCard() {
    return (
        <div className="bg-gray-100 p-6 rounded-3xl max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Install kitchen sink basin</h2>
                <span className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow">OPEN</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                    <MapPin className="text-gray-500 mt-1" size={18} />
                    <div>
                        <p className="text-sm text-gray-500">LOCATION</p>
                        <p className="font-semibold">Wollongong</p>
                    </div>
                </div>

                <div className="flex items-start space-x-2">
                    <Calendar className="text-gray-500 mt-1" size={18} />
                    <div>
                        <p className="text-sm text-gray-500">TO BE DONE ON</p>
                        <p className="font-semibold">Tue 8th, 2025</p>
                    </div>
                </div>

                <div className="flex items-start space-x-2">
                    <DollarSign className="text-gray-500 mt-1" size={18} />
                    <div>
                        <p className="text-sm text-gray-500">BUDGET</p>
                        <p className="font-semibold">$500</p>
                    </div>
                </div>
            </div>

            <div className="flex items-start space-x-2 mb-4">
                <User className="text-gray-500 mt-1" size={18} />
                <div>
                    <p className="text-sm text-gray-500">POSTED BY</p>
                    <p className="font-semibold">Tracy N.</p>
                </div>
            </div>

            <div className="flex items-center text-sm text-gray-600 mb-4">
                <Eye className="mr-1" size={16} />
                20 views
            </div>

            <div className="mb-4">
                <p className="font-semibold mb-1">Top Applicants</p>
                <div className="flex space-x-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-600"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-600"></div>
                </div>
                <p className="font-semibold mb-1">Other Applicants</p>
                <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
            </div>

            <div className="mt-6 text-right">
                <a href="#" className="text-indigo-600 font-medium underline">More details</a>
            </div>
        </div>
    );
}
