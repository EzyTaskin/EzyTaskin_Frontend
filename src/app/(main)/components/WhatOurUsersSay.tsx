'use client'
import {Star} from "lucide-react";

function CategoriesCard() {
    return (
        <div className="max-w-sm p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                    <h3 className="text-lg font-semibold">Alex Pham</h3>
                    <p className="text-gray-500 text-sm">Small Business Owner</p>
                </div>
            </div>
            <div className="flex my-2 space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" stroke="none"/>
                ))}
            </div>
            <div className="text-gray-700 text-sm">
                <p>
                    As a small business owner, I use EzyTaskin for everything from office
                    maintenance to IT support. It saves my time and connects me with
                    reliable professionals.
                </p>
            </div>
        </div>
    )
}

export default function WhatOurUsersSay() {
    return (
        <section className="bg-(--color-tertiary) py-16">
            <div className="text-center md:text-left space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        What Our Users Say
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-lg text-gray-600">
                        Real experiences from people who’ve used EzyTaskin
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 pt-12">
                <CategoriesCard/>
                <CategoriesCard/>
            </div>
        </section>
    );
}
