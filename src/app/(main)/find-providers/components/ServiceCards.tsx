import React from "react";
import { Star } from "lucide-react";

const serviceProviders = [
    {
        name: "Sarah Johnson",
        rating: 4.9,
        reviews: 124,
        location: "Melbourne, VIC",
        tags: ["Home Cleaning", "Office Cleaning"],
        description: "Professional house cleaner with 5+ years of experience. Specializing in deep cleaning and organization."
    },
    {
        name: "Mike Thomas",
        rating: 4.8,
        reviews: 87,
        location: "Sydney, NSW",
        tags: ["Handyman", "Furniture Assembly"],
        description: "Licensed handyman with expertise in electrical, plumbing, and general repairs. No job is too small!"
    },
    {
        name: "Emily Wilson",
        rating: 5,
        reviews: 56,
        location: "Brisbane, QLD",
        tags: ["Tech Help", "Computer Repair"],
        description: "IT professional offering computer repair, networking solutions, and tech support for homes and businesses."
    },
    {
        name: "David Chen",
        rating: 4.7,
        reviews: 93,
        location: "Perth, WA",
        tags: ["Home Renovation", "Interior Design"],
        description: "Experienced contractor specializing in home renovations, kitchen remodels, and bathroom upgrades."
    },
    {
        name: "Jessica Taylor",
        rating: 4.6,
        reviews: 102,
        location: "Adelaide, SA",
        tags: ["Gardening", "Landscaping"],
        description: "Professional gardener providing lawn care, plant maintenance, and landscape design services."
    },
    {
        name: "Robert Garcia",
        rating: 4.9,
        reviews: 78,
        location: "Hobart, TA",
        tags: ["Removalist", "Furniture Delivery"],
        description: "Experienced removalist offering efficient moving services, furniture delivery, and junk removal."
    }
];

export default function ServiceCards() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
                Showing <span className="font-bold">6</span> service cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceProviders.map((provider, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="h-12 w-12 rounded-full bg-gray-200" />
                                <div>
                                    <h3 className="font-semibold text-lg">{provider.name}</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                                        {provider.rating} ({provider.reviews} reviews)
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">📍 {provider.location}</p>
                            <div className="flex flex-wrap gap-2">
                                {provider.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-100 px-2 py-1 text-xs rounded-full border"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">{provider.description}</p>
                            <div className="flex space-x-2">
                                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700">View Profile</button>
                                <button className="border border-gray-300 text-sm px-4 py-2 rounded-xl hover:bg-gray-100">Contact</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-6 space-x-4">
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Previous</button>
                <div className="text-sm">1</div>
                <button className="text-sm hover:underline">2</button>
                <button className="text-sm hover:underline">3</button>
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">Next</button>
            </div>
        </div>
    );
}
