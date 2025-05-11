import React from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import useMutateTasks from "src/app/hooks/useMutateTasks";

export default function Review(
    {
        title, categories, location, budget, date, description, onBack, onSubmit
    }: {
        title: string,
        categories: string[],
        location: string,
        budget: number,
        date: string,
        description: string,
        onBack: () => void,
        onSubmit: () => void
    }) {
    return (
        <div className="bg-white p-3">
            <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
                            1
                        </div>
                        <span>Task details</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
                            2
                        </div>
                        <span>Location & Budget</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2">
                        <div
                            className="w-6 h-6 text-white flex items-center justify-center bg-[var(--color-primary)] rounded-full">
                            3
                        </div>
                        <span className="text-[var(--color-primary)]">Review & Post</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Review your task</h2>
                    <p className="text-gray-600">
                        Make sure everything looks good before posting
                    </p>
                    <h3 className="font-semibold text-gray-800 mt-8 mb-4">
                        Task Summary
                    </h3>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
                        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                            <p className="font-medium text-gray-500">Title</p>
                            <p>{title}</p>

                            <p className="font-medium text-gray-500">Category</p>
                            <p>{categories.join(", ")}</p>

                            <p className="font-medium text-gray-500">Location</p>
                            <p>{location}</p>

                            <p className="font-medium text-gray-500">Budget</p>
                            <p>{budget}</p>

                            <p className="font-medium text-gray-500">Due date</p>
                            <p>{date}</p>

                            <p className="font-medium text-gray-500">Description</p>
                            <p className="col-span-2">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between my-8">
                        <PrimaryButton
                            onClick={onBack}
                            label="Back"
                            width="w-4xs"
                            bgColor="bg-white"
                            textColor="text-black"
                            textSize="text-sm"
                            borderRadius="rounded-md"
                            borderStyle="border border-gray-300"
                        />
                        <PrimaryButton
                            onClick={onSubmit}
                            label="Post"
                            width="w-4xs"
                            textSize="text-sm"
                            borderRadius="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
