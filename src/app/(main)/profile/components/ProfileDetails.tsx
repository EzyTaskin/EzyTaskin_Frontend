"use client";
import React, {useState} from "react";
import {ProfileType} from "src/app/constants/type";
import {MapPin, ChevronRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProfileDetails = (
    {
        profileType, isEditing, onIsEditingChange, subpage, onSubpageChange
    }: {
        profileType: ProfileType,
        isEditing: boolean,
        onIsEditingChange: (value: boolean) => void,
        subpage: string,
        onSubpageChange: (value: string) => void
    }) => {

    if (profileType === "provider") {
        return <ProviderProfile isEditing={isEditing} onIsEditingChange={onIsEditingChange} subpage={subpage}
                                onSubpageChange={onSubpageChange}/>
    } else {
        return <ConsumerProfile isEditing={isEditing} onIsEditingChange={onIsEditingChange} subpage={subpage}
                                onSubpageChange={onSubpageChange}/>;
    }
};

const ConsumerProfile = (
    {
        isEditing,
        onIsEditingChange,
        subpage, onSubpageChange
    }: {
        isEditing: boolean,
        onIsEditingChange: (value: boolean) => void,
        subpage: string,
        onSubpageChange: (value: string) => void
    }) => {
    const [formData, setFormData] = useState({
        fullName: "Mike Thomas",
        email: "mike.thomas@example.com",
        phone: "(+61) 0412345678",
        address: "123 Keira St, Wollongong, 2500",
        bio: "I'm a professional looking for reliable service providers for my projects. I value quality work and timely delivery.",
    });

    const notifications = [
        {
            user: 'vane Y.',
            task: 'House Cleaning',
            userLink: '#',
            taskLink: '#',
        },
        {
            user: 'Theologos G.',
            task: 'Moving House',
            userLink: '#',
            taskLink: '#',
        },
    ];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSave = () => {
        console.log("Profile saved:", formData);
    };

    const handleDelete = () => {
        console.log("Account deletion requested");
    };

    if (subpage == "profile") {

        return (
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">Personal Information</h2>
                    <p className="text-gray-500">Manage your personal details</p>
                </div>

                <div className="space-y-2">
                    <div>
                        <label className="block font-medium">Full Name</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Email Address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
                            type="email"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Phone number</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Address</label>
                        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mt-1">
                            <MapPin className="text-gray-500 mr-2 h-5 w-5"/>
                            <input
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="bg-transparent w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium">Bio</label>
                        <textarea
                            name="bio"
                            rows={4}
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
                    >
                        Delete account
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                        Save Profile
                    </button>
                </div>
            </div>
        );
    }

    if (subpage == "payment-methods") {
        return (
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold mb-1">Payment methods</h2>
                <p className="text-gray-500 mb-6">How you will pay and get money</p>

                {/* Existing Payment Method */}
                <div
                    className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 hover:bg-gray-200 cursor-pointer transition">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                            alt="Mastercard"
                            className="w-10 h-10"
                        />
                        <span className="text-lg font-medium">Mastercard ••••123</span>
                    </div>
                    <ChevronRight className="text-gray-400"/>
                </div>

                {/* Add Payment Method */}
                <Link href="/add-payment-method">
                    <button
                        className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 cursor-pointer transition">
                        + Add payment method
                    </button>
                </Link>
            </div>
        )
    }

    if (subpage == 'notifications') {
        return (
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>

                <div className="space-y-4">
                    {notifications.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300"/>
                            <p className="text-gray-800">
                                <a href={item.userLink} className="text-blue-600 hover:underline">
                                    {item.user}
                                </a>{' '}
                                has made an offer on{' '}
                                <a href={item.taskLink} className="text-blue-600 hover:underline">
                                    {item.task}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const ProviderProfile = (
    {
        isEditing,
        onIsEditingChange,
        subpage, onSubpageChange
    }: {
        isEditing: boolean,
        onIsEditingChange: (value: boolean) => void,
        subpage: string,
        onSubpageChange: (value: string) => void
    }) => {
    const [showAll, setShowAll] = useState(false);

    const tasks = [
        {
            task: "Home Cleaning Service",
            client: "Emma Johnson",
            date: "15/02/2025",
            category: "Home Cleaning",
            rating: 5,
            earnings: "$100",
        },
        {
            task: "Garden Landscaping",
            client: "Michael Smith",
            date: "20/03/2025",
            category: "Move-In-Out Cleaning",
            rating: 4,
            earnings: "$220",
        },
        {
            task: "Furniture Assembly",
            client: "Sarah Williams",
            date: "30/03/2025",
            category: "Furniture",
            rating: 5,
            earnings: "$85",
        },
        {
            task: "Window Cleaning",
            client: "James Lee",
            date: "05/04/2025",
            category: "Window Cleaning",
            rating: 5,
            earnings: "$95",
        },
    ];

    const visibleTasks = showAll ? tasks : tasks.slice(0, 3);

    const [categories, setCategories] = useState([
        "Home Cleaning",
        "Holiday Rental Cleaning",
        "Move-In-Out Cleaning",
        "Gardening",
        "Regular Cleaning",
        "Furniture",
    ]);

    const [newCategory, setNewCategory] = useState("");

    const addCategory = () => {
        const trimmed = newCategory.trim();
        if (trimmed && !categories.includes(trimmed)) {
            setCategories([...categories, trimmed]);
        }
        setNewCategory("");
    };

    const removeCategory = (category) => {
        setCategories(categories.filter((c) => c !== category));
    };

    return (
        <div className="max-w-xl mx-auto p-4 space-y-8 text-gray-800">
            {/* Completed Tasks */}
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Completed tasks</h3>
                <div className="w-full overflow-x-visible">
                    <table className="table-auto w-full text-sm text-left">
                        <thead className="text-gray-600 border-b">
                        <tr>
                            <th className="p-2">Task</th>
                            <th className="p-2">Client</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Rating</th>
                            <th className="p-2">Earnings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {visibleTasks.map((item, index) => (
                            <tr key={index} className="border-b last:border-0">
                                <td className="py-3">{item.task}</td>
                                <td>{item.client}</td>
                                <td>{item.date}</td>
                                <td>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                        {item.category}
                      </span>
                                </td>
                                <td>
                                    <span className="text-yellow-500">⭐</span> {item.rating}
                                </td>
                                <td className="font-medium">{item.earnings}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {tasks.length > 3 && (
                    <div className="text-center mt-3">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-gray-700 hover:underline font-bold cursor-pointer"
                        >
                            {showAll ? "▲ Show less" : "▼ Show more"}
                        </button>
                    </div>
                )}
            </div>

            {/* Service Categories */}
            {isEditing
                ? <div className="max-w-lg mx-auto p-4 space-y-6 bg-white rounded-xl shadow-lg">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="flex items-center bg-(--color-secondary) font-bold text-sm px-3 py-1 rounded-full"
                            > {category}
                                <button
                                    onClick={() => removeCategory(category)}
                                    className="ml-2 text-black hover:text-red-500"
                                > × </button>
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add a service category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-md bg-gray-100 placeholder-gray-700 focus:outline-none"
                        />
                        <button
                            onClick={addCategory}
                            className="px-4 py-2 bg-(--color-primary) text-white rounded-md hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>

                    <button
                        onClick={(e) => onIsEditingChange(false)}
                        className="w-full py-2 bg-(--color-primary) text-white rounded-md hover:bg-indigo-700">
                        Update Profile
                    </button>
                </div>
                : <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <span className="mr-2">🏷️</span>Service categories
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 text-sm rounded-full font-medium text-gray-700"
                            >
                {category}
              </span>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default ProfileDetails;
