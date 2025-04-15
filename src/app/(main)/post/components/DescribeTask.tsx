import React from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function DescribeTask(
    {
        title,
        onTitleChange,
        description,
        onDescriptionChange,
        category,
        onCategoryChange,
        onContinue
    }: {
        title: string,
        onTitleChange: (value: string) => void,
        description: string,
        onDescriptionChange: (value: string) => void,
        category: string,
        onCategoryChange: (value: string) => void,
        onContinue: () => void

    }) {
    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <div
                            className="text-white w-6 h-6 flex items-center justify-center bg-[var(--color-primary)] rounded-full">
                            1
                        </div>
                        <span className="text-[var(--color-primary)]">Task details</span>
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
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
                            3
                        </div>
                        <span>Review & Post</span>
                    </div>
                </div>

                {/* Task Form */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        Describe your task
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Provide details about what you need done
                    </p>

                    {/* Task Title */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                            Task title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => onTitleChange(e.target.value)}
                            placeholder="e.g., Help move furniture, House Cleaning"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                        />

                        <p className="text-xs text-gray-500 mt-1">
                            Keep it short and clean.
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                            Description
                        </label>
                        <textarea
                            rows={5}
                            value={description}
                            onChange={(e) => onDescriptionChange(e.target.value)}
                            placeholder="Be specific about what you need. The more details, the better."
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                        ></textarea>
                    </div>

                    {/* Task Categories */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Task categories
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Cleaning",
                                "Handyman",
                                "Moving",
                                "Delivery",
                                "Errands",
                                "Other",
                            ].map((categoryName, index) => (
                                <label
                                    key={index}
                                    className="flex items-center justify-center p-3 border rounded-md text-sm font-medium cursor-pointer transition hover:border-[var(--color-primary)]"
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={categoryName}
                                        onChange={(e) => onCategoryChange(e.target.value)}
                                        className="mr-2 accent-[var(--color-primary)]"
                                        checked={category == categoryName}
                                    />
                                    {categoryName}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Continue Button */}
                    <div className="flex justify-end">
                        <PrimaryButton
                            label="Continue"
                            width="w-4xs"
                            textSize="text-sm"
                            borderRadius="rounded-md"
                            onClick={onContinue}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
