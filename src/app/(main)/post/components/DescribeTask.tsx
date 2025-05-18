import React, { useState } from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import { CATEGORIES } from "src/app/constants/list";

export default function DescribeTask({
                                         title,
                                         onTitleChange,
                                         description,
                                         onDescriptionChange,
                                         categories,
                                         onCategoryChange,
                                         onContinue,
                                     }: {
    title: string;
    onTitleChange: (value: string) => void;
    description: string;
    onDescriptionChange: (value: string) => void;
    categories: string[];
    onCategoryChange: (value: string[]) => void;
    onContinue: () => void;
}) {
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const handleContinue = () => {
        let hasError = false;

        if (!title.trim()) {
            setTitleError("Task title is required.");
            hasError = true;
        } else {
            setTitleError("");
        }

        if (!description.trim()) {
            setDescriptionError("Description is required.");
            hasError = true;
        } else {
            setDescriptionError("");
        }

        if (!hasError) {
            onContinue();
        }
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="text-white w-6 h-6 flex items-center justify-center bg-[var(--color-primary)] rounded-full">
                            1
                        </div>
                        <span className="text-[var(--color-primary)]">Task Details</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2" />
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">2</div>
                        <span>Location & Budget</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2" />
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">3</div>
                        <span>Review & Post</span>
                    </div>
                </div>

                {/* Task Form */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Describe your task</h2>
                    <p className="text-sm text-gray-600 mb-6">Provide details about what you need done</p>

                    {/* Task Title */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-800 mb-1">Task title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => {
                                onTitleChange(e.target.value);
                                if (e.target.value.trim()) setTitleError("");
                            }}
                            placeholder="e.g., Help move furniture, House Cleaning"
                            className={`w-full border rounded-md p-3 text-sm focus:outline-none ${
                                titleError ? "border-red-500" : "border-gray-300 focus:border-[var(--color-primary)]"
                            }`}
                        />
                        {titleError && <p className="text-xs text-red-500 mt-1">{titleError}</p>}
                        <p className="text-xs text-gray-500 mt-1">Keep it short and clean.</p>
                    </div>

                    {/* Description */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-800 mb-1">Description</label>
                        <textarea
                            rows={5}
                            value={description}
                            onChange={(e) => {
                                onDescriptionChange(e.target.value);
                                if (e.target.value.trim()) setDescriptionError("");
                            }}
                            placeholder="Be specific about what you need. The more details, the better."
                            className={`w-full border rounded-md p-3 text-sm focus:outline-none ${
                                descriptionError
                                    ? "border-red-500"
                                    : "border-gray-300 focus:border-[var(--color-primary)]"
                            }`}
                        ></textarea>
                        {descriptionError && <p className="text-xs text-red-500 mt-1">{descriptionError}</p>}
                    </div>

                    {/* Task Categories */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-800 mb-2">Task categories</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {CATEGORIES.map((categoryName, index) => (
                                <label
                                    key={index}
                                    className="flex items-center justify-center p-3 border rounded-md text-sm font-medium cursor-pointer transition hover:border-[var(--color-primary)]"
                                >
                                    <input
                                        className="mr-2 accent-[var(--color-primary)]"
                                        type="checkbox"
                                        name="category"
                                        value={categoryName}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            const updated = isChecked
                                                ? [...categories, categoryName]
                                                : categories.filter((item) => item !== categoryName);
                                            onCategoryChange(updated);
                                        }}
                                        checked={categories.includes(categoryName)}
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
                            onClick={handleContinue}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
