import {Calendar, MapPin} from "lucide-react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import dayjs from "dayjs";
import {useState} from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Cleave from 'cleave.js/react';

dayjs().format();
dayjs.extend(customParseFormat);

export default function LocationBudget({
                                           location,
                                           onLocationChange,
                                           budget,
                                           onBudgetChange,
                                           remote,
                                           onRemoteChange,
                                           date,
                                           onDateChange,
                                           onContinue,
                                           onBack,
                                       }: {
    location: string;
    onLocationChange: (value: string) => void;
    budget: number;
    onBudgetChange: (value: number) => void;
    remote: boolean;
    onRemoteChange: (value: boolean) => void;
    date: string;
    onDateChange: (value: string) => void;
    onContinue: () => void;
    onBack: () => void;
}) {
    const [locationError, setLocationError] = useState("");
    const [dateError, setDateError] = useState("");

    const handleContinue = () => {
        if (!location.trim()) {
            setLocationError("Task location is required.");
            return;
        }

        setLocationError("");
        onContinue();
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
                            1
                        </div>
                        <span>Task Details</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2">
                        <div
                            className="text-white w-6 h-6 flex items-center justify-center bg-[var(--color-primary)] border- rounded-full">
                            2
                        </div>
                        <span className="text-[var(--color-primary)]">Location & Budget</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-300 mx-2"/>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
                            3
                        </div>
                        <span>Review & Post</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Location and Budget</h2>
                    <p className="text-gray-600 mb-6">Tell us where and how much you’re willing to pay</p>

                    {/* Location */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Task Location
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => {
                                    onLocationChange(e.target.value);
                                    if (e.target.value.trim()) setLocationError("");
                                }}
                                placeholder="e.g., 123 Keira St, Wollongong, 2500"
                                className={`w-full border rounded-md p-3 text-sm focus:outline-none ${
                                    locationError
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-[var(--color-primary)]"
                                }`}
                            />
                            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                        {locationError && <p className="text-xs text-red-500 mt-1">{locationError}</p>}
                        <p className="text-sm text-gray-500 mt-1">
                            Where will this task be performed?
                        </p>
                        <div className="mt-4 border rounded-md p-3">
                            <label className="inline-flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={remote}
                                    onChange={() => onRemoteChange(!remote)}
                                    className="form-checkbox h-4 w-4 text-[var(--color-primary)] border-gray-300"
                                />
                                This task can be done remotely
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                                Check if the service provider doesn’t need to be physically present.
                            </p>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date (Optional)
                        </label>
                        <div className="relative">
                            <Cleave
                                type="text"
                                options={{date: true, datePattern: ['d', 'm', 'Y']}}
                                placeholder="DD/MM/YYYY"
                                value={date}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    onDateChange(value);

                                    const isValid = dayjs(value, "DD/MM/YYYY", true).isValid();
                                    if (!isValid && value.trim() !== "") {
                                        setDateError("Invalid date format. Use DD/MM/YYYY");
                                    } else {
                                        setDateError("");
                                    }
                                }}
                                className={`w-full border rounded-md p-3 text-sm focus:outline-none ${
                                    dateError
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-[var(--color-primary)]"
                                }`}
                            />
                            <Calendar
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
                        </div>
                        {dateError && <p className="text-xs text-red-500 mt-1">{dateError}</p>}
                        <p className="text-sm text-gray-500 mt-1">
                            When does this task need to be completed?
                        </p>
                    </div>

                    {/* Budget */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget: ${budget}
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="1000"
                            value={budget}
                            onChange={(e) => onBudgetChange(Number(e.target.value))}
                            className="w-full accent-[var(--color-primary)]"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>$5</span>
                            <span>$500</span>
                            <span>$1000</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            How much are you willing to pay for this task?
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between my-6">
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
                            onClick={handleContinue}
                            label="Continue"
                            width="w-4xs"
                            textSize="text-sm"
                            borderRadius="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
