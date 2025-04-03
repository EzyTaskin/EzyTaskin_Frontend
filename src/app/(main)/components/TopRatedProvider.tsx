'use client'
import {Star} from "lucide-react";

function ProvidersCard() {
    return (
        <div className="max-w-xs p-4 border rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-3"></div>
                <h2 className="text-lg font-semibold">Emily Wilson</h2>
                <p className="text-gray-500">Tech Help</p>
                <div className="flex items-center text-yellow-500 mt-1">
                    <Star className="w-4 h-4 fill-current"/>
                    <span className="ml-1 font-medium">5</span>
                    <span className="text-gray-500 text-sm"> (56 reviews)</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm px-4">
                    IT professional offering computer repair, networking solutions, and
                    tech support for homes and businesses.
                </p>
                <div className="flex mt-4 gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                        View Profile
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function TopRatedProvider() {
    return (
        <section className="py-16">
            <div className="text-center md:text-left space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Top-Rated Providers
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-lg text-gray-600">
                        Meet our highest-rated service professionals
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 px-6 pt-12">
                <ProvidersCard/>
                <ProvidersCard/>
                <ProvidersCard/>
            </div>
        </section>
    );
}
