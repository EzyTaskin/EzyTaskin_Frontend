"use client";
import React, {useEffect, useState} from "react";
import {
    CommonDetailType,
    PaymentReceiveCardType,
    ProfileType,
    ProviderProfileType,
} from "src/app/constants/type";
import {MapPin, ChevronRight, ArrowDownRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {useMutateProvider} from "src/app/hooks/useMutateProvider";
import {useMutateAccount} from "src/app/hooks/useMutateAccount";
import {LineChart, Line, XAxis, Tooltip, ResponsiveContainer} from 'recharts';
import {ArrowUpRight} from 'lucide-react';
import dayjs from "dayjs";
import useQueryProfile from "src/app/hooks/useQueryProfile";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useQueryNotifications from "src/app/hooks/useQueryNotifications";
import {useQueryCards} from "src/app/hooks/useQueryCards";

const ProfileDetails = ({
                            providerProfile,
                            commonDetail,
                            profileType,
                            isEditing,
                            onIsEditingChange,
                            subpage,
                            onSubpageChange,
                        }: {
    providerProfile: ProviderProfileType;
    commonDetail: CommonDetailType;
    profileType: ProfileType;
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
}) => {
    if (profileType === "provider" && !providerProfile) return <h1>Wait</h1>;
    if (profileType === "consumer" && !commonDetail) return <h1>Wait</h1>;

    if (profileType === "provider") {
        return (
            <ProviderProfile
                providerProfile={providerProfile}
                isEditing={isEditing}
                onIsEditingChange={onIsEditingChange}
                subpage={subpage}
                onSubpageChange={onSubpageChange}
            />
        );
    } else {
        return (
            <ConsumerProfile
                commonDetail={commonDetail}
                isEditing={isEditing}
                onIsEditingChange={onIsEditingChange}
                subpage={subpage}
                onSubpageChange={onSubpageChange}
            />
        );
    }
};

const ProviderProfile = ({
                             providerProfile,
                             isEditing,
                             onIsEditingChange,
                             subpage,
                             onSubpageChange,
                         }: {
    providerProfile: ProviderProfileType;
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
}) => {
    const [showAll, setShowAll] = useState(false);
    const [categories, setCategories] = useState(
        providerProfile.categories.map((category) => category.name)
    );
    const [newCategory, setNewCategory] = useState("");
    const [description, setDescription] = useState(
        providerProfile.description || ""
    );
    const updateProviderInfo = useMutateProvider();
    const tasks = providerProfile.completedRequests;

    const visibleTasks = showAll ? tasks : tasks.slice(0, 3);

    const addCategory = () => {
        const trimmed = newCategory.trim();
        if (trimmed && !categories.includes(trimmed)) {
            setCategories((prevCategories) => {
                const newCategories = [...prevCategories, trimmed];
                console.log("Categories after adding:", newCategories); // Check the array
                return newCategories;
            });
        }
        setNewCategory("");
    };
    const removeCategory = (category: string) => {
        setCategories((prevCategories) =>
            prevCategories.filter((cat) => cat !== category)
        );
    };
    const {cards} = useQueryCards();

    function handleCancel() {
        setDescription(providerProfile.description || "");
        setCategories(providerProfile.categories?.map(c => c.name) || []);
        onIsEditingChange(false);
    }

    if (subpage == "dashboard") {
        return <div className="max-w-xl mx-auto p-4 space-y-8 text-gray-800">
            <div className="flex flex-col">
                <h3 className="font-semibold text-lg mb-4">About Me</h3>

                <div className="border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between relative">
                    {isEditing ? (
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write something about yourself..."
                            className="w-full resize-none border-none focus:outline-none text-sm text-gray-800 bg-transparent"
                            rows={2}
                        />
                    ) : (
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {providerProfile.description || "No description added yet."}
                        </p>
                    )}

                    <div className="self-end mt-4">
                        {!isEditing ? (
                            <PrimaryButton
                                label="Edit"
                                bgColor="bg-white"
                                textColor="text-[var(--color-primary)]"
                                width="w-6xs"
                                onClick={() => onIsEditingChange(true)}
                                textSize="xs"
                            />
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Completed Tasks */}
            <div className="lex flex-col">
                <h3 className="font-semibold text-lg mb-4">Completed Tasks</h3>
                <div className="border border-gray-200 rounded-xl p-4 shadow-sm w-full overflow-x-auto">
                    <table className="table-auto w-full text-sm text-left">
                        <thead className="text-gray-600 border-b">
                        <tr>
                            <th className="pr-8 pb-4">Task</th>
                            <th className="pr-8 pb-4">Client</th>
                            <th className="pr-8 pb-4">Date</th>
                            <th className="pr-8 pb-4">Location</th>
                            <th className="pr-8 pb-4">Earnings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {visibleTasks.map((item, index) => (
                            <tr key={index} className="border-b last:border-0">
                                <td className="py-3 pr-4">{item.title}</td>
                                <td className="py-3 pr-4">{item.consumer.name}</td>
                                <td className="py-3 pr-4">{dayjs(item.completedDate).format("DD/MM/YYYY HH:mm:ss")}</td>
                                <td className="font-medium py-3 pr-4">{item.location}</td>
                                <td className="py-3 pr-4">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      ${item.budget}
                    </span>
                                </td>
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
            {isEditing ? (
                <div className="max-w-lg mx-auto p-4 space-y-6 bg-white rounded-xl shadow-lg">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="flex items-center bg-gray-200 font-bold text-sm px-3 py-1 rounded-full"
                            >
                {category}
                                <button
                                    onClick={() => removeCategory(category)}
                                    className="ml-2 text-black hover:text-red-500"
                                >
                  ✕
                </button>
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
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleCancel}
                            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                updateProviderInfo.updateProviderProfile({
                                    description,
                                    categories,
                                });
                            }}
                            className="flex-1 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <span className="mr-2">🏷️</span>Service Categories
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
            )}
        </div>
    }

    if (subpage === "performance") {
        return <DashboardPerformance/>
    }

    if (subpage === "payment-methods") {
        return (
            <PaymentMethods cards={cards}/>
        );
    }
};

const ConsumerProfile = ({
                             commonDetail,
                             isEditing,
                             onIsEditingChange,
                             subpage,
                             onSubpageChange,
                         }: {
    commonDetail: CommonDetailType;
    isEditing: boolean;
    onIsEditingChange: (value: boolean) => void;
    subpage: string;
    onSubpageChange: (value: string) => void;
}) => {
    const [formData, setFormData] = useState({
        fullName: commonDetail.fullName ?? "",
        email: commonDetail.email ?? "",
        phone: commonDetail.phoneNumber ?? "",
        address: commonDetail.address ?? "",
        bio: "I'm a professional looking for reliable service providers for my projects. I value quality work and timely delivery.",
    });

    const {notifications} = useQueryNotifications();

    const updateAccount = useMutateAccount();
    const {cards} = useQueryCards();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSave = () => {
        updateAccount.updateAccountInfo({
            fullName: formData.fullName,
            phoneNumber: formData.phone,
            address: formData.address,
            // include `email` or `bio` if needed by your UpdateAccountType
        });
    };

    const handleDelete = () => {
        console.log("Account deletion requested");
    };

    function handleCancel() {
        if (!commonDetail) return;

        setFormData({
            fullName: commonDetail.fullName ?? "",
            email: commonDetail.email ?? "",
            phone: commonDetail.phoneNumber ?? "",
            address: commonDetail.address ?? "",
            bio: "I'm a professional looking for reliable service providers for my projects. I value quality work and timely delivery.",
        });

        onIsEditingChange(false);
    }


    if (subpage == "profile") return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow space-y-8 border border-gray-200">
            <div>
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <p className="text-gray-500">Manage your personal details</p>
            </div>

            <div className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    {isEditing ? (
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    ) : (
                        <p className="mt-1 text-gray-900">{formData.fullName || "-"}</p>
                    )}
                </div>

                {/* Email (always view mode) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>

                    {isEditing ? (
                        <input
                            disabled
                            defaultValue={formData.email || "-"}
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
                        />
                    ) : (
                        <p className="mt-1 text-gray-900">{formData.email || "-"}</p>
                    )}

                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    {isEditing ? (
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    ) : (
                        <p className="mt-1 text-gray-900">{formData.phone || "-"}</p>
                    )}
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    {isEditing ? (
                        <div
                            className="flex items-center rounded-md border border-gray-300 px-4 py-2 mt-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                            <MapPin className="text-gray-400 mr-2 h-5 w-5"/>
                            <input
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full bg-transparent focus:outline-none"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center mt-1 text-gray-900">
                            <MapPin className="text-gray-400 mr-2 h-5 w-5"/>
                            <span>{formData.address || "-"}</span>
                        </div>
                    )}
                </div>
            </div>

            {isEditing && (
                <div className="flex justify-end pt-6 gap-4">
                    <button
                        onClick={handleCancel}
                        className="px-6 py-2 rounded-md font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-md font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                        Save Profile
                    </button>
                </div>
            )}
        </div>
    )

    if (subpage === "payment-methods") {
        return (
            <PaymentMethods cards={cards}/>
        );
    }

    if (subpage == "notifications") {
        return (
            <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>

                {notifications.length != 0 ?

                    <div className="space-y-4">
                        {notifications.map((item, index) => (
                            <div key={item.id} className="flex items-start space-x-4">
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 rounded-full overflow-hidden">
                                    <img
                                        src={`https://www.gravatar.com/avatar/?d=mp`}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-gray-800 font-medium">{item.title}</p>
                                    <p className="text-gray-600 text-sm">{item.content}</p>
                                    <p className="text-gray-400 text-xs mt-1">{dayjs(item.timestamp).format('MMM D, YYYY HH:mm')}</p>
                                </div>
                            </div>
                        ))}
                    </div> : <h1> No notifications </h1>}
            </div>
        );
    }
};

function DashboardPerformance() {
    const {providerProfile, consumerProfile, commonDetail} = useQueryProfile();

    if (!providerProfile || !consumerProfile || !commonDetail) {
        return <div>Loading performance data...</div>;
    }

    const completedRequests = providerProfile.completedRequests;

    // ====== BOOKINGS BY MONTH ======
    const bookingByMonth: Record<string, number> = {};
    const revenueByMonth: Record<string, number> = {};

    completedRequests.forEach(request => {
        const monthKey = dayjs(request.completedDate).format('MMM YYYY'); // e.g., "Apr 2025"

        // Count bookings
        bookingByMonth[monthKey] = (bookingByMonth[monthKey] || 0) + 1;

        // Sum revenue
        revenueByMonth[monthKey] = (revenueByMonth[monthKey] || 0) + request.budget;
    });

    const sortedMonths = Object.keys(bookingByMonth).sort(
        (a, b) => dayjs(a, 'MMM YYYY').unix() - dayjs(b, 'MMM YYYY').unix()
    );

    // Booking chart data
    const bookingData = sortedMonths.map(month => ({
        name: month,
        value: bookingByMonth[month],
    }));

    // Revenue chart data
    const revenueData = sortedMonths.map(month => ({
        name: month,
        value: revenueByMonth[month],
    }));

    // Growth Calculations
    const currentMonth = sortedMonths[sortedMonths.length - 1];
    const prevMonth = sortedMonths[sortedMonths.length - 2];

    const currentBookings = bookingByMonth[currentMonth] || 0;
    const prevBookings = bookingByMonth[prevMonth] || 0;

    const currentRevenue = revenueByMonth[currentMonth] || 0;
    const prevRevenue = revenueByMonth[prevMonth] || 0;

    const bookingGrowth = prevBookings > 0
        ? (((currentBookings - prevBookings) / prevBookings) * 100)
        : 0;

    const revenueGrowth = prevRevenue > 0
        ? (((currentRevenue - prevRevenue) / prevRevenue) * 100)
        : 0;

    const totalRevenue = completedRequests.reduce((acc, req) => acc + req.budget, 0);
    const totalBookings = completedRequests.length;

    // const completionRate = consumerProfile.requestsPosted > 0
    //     ? ((consumerProfile.requestsCompleted / consumerProfile.requestsPosted) * 100)
    //     : 0;

    const completionRate = 100;

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Bookings */}
                <div className="p-6 border rounded-xl shadow-sm space-y-2">
                    <p className="text-sm text-gray-400">Statistics</p>
                    <p className="text-lg font-medium">Total Completed Task</p>
                    {totalBookings != 0 ?
                        <>
                            <div className="text-3xl font-bold">{totalBookings}</div>
                            <div
                                className={`flex items-center text-sm ${bookingGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {bookingGrowth >= 0 ? <ArrowUpRight size={14} className="mr-1"/> :
                                    <ArrowDownRight size={14} className="mr-1"/>}
                                <span>{bookingGrowth.toFixed(1)}%</span>
                            </div>
                            <ResponsiveContainer width="100%" height={60}>
                                <LineChart data={bookingData}>
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer> </> : <h1> No booking yet </h1>
                    }
                </div>

                <div className="p-6 border rounded-xl shadow-sm space-y-2 flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-400">Statistics</p>
                    <p className="text-lg font-medium">Completion rate</p>
                    <div className="w-32 h-32 relative">
                        <CircularProgressbar
                            value={completionRate}
                            text={`${completionRate}%`}
                            circleRatio={0.75} // semicircle
                            styles={buildStyles({
                                rotation: 0.625, // 270 degrees rotated for bottom semicircle
                                strokeLinecap: 'round',
                                trailColor: '#e5e7eb', // light gray trail
                                pathColor: '#3b82f6',   // blue path
                                textColor: '#111827',   // dark text
                                textSize: '24px',
                            })}
                        />
                    </div>
                </div>
            </div>

            {/* Total Revenue */}
            <div className="p-6 border rounded-xl shadow-sm space-y-4">
                <p className="text-sm text-gray-400">Statistics</p>
                <p className="text-lg font-medium">Total Revenue</p>
                <div className="text-4xl font-bold flex items-center space-x-2">
                    {totalRevenue != 0 ?
                        <>
                            <span>${totalRevenue.toLocaleString()}</span>
                            <span
                                className={`text-base flex items-center ${revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {revenueGrowth >= 0 ? <ArrowUpRight size={16} className="mr-1"/> :
                            <ArrowDownRight size={16} className="mr-1"/>}
                                {revenueGrowth.toFixed(1)}%
                    </span>
                            <ResponsiveContainer width="100%" height={150}>
                                <LineChart data={revenueData}>
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{fontSize: 12, fill: '#6b7280'}}
                                    />
                                    <Tooltip contentStyle={{borderRadius: '0.5rem'}}/>
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{r: 5, stroke: '#fff', strokeWidth: 2}}
                                        activeDot={{r: 7}}
                                    />
                                </LineChart>
                            </ResponsiveContainer> </> : <h1> No revenues yet </h1>}
                </div>
            </div>
        </div>
    );
}

function PaymentMethods({cards}: {
    cards: PaymentReceiveCardType[]
}) {

    const maskCardNumber = (cardNumber: string) => {
        return `•••• ${cardNumber.slice(-4)}`;
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold mb-1">Payment Methods</h2>
            <p className="text-gray-500 mb-6">How you will pay and receive money.</p>

            {/* Render each fetched card */}
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 hover:bg-gray-200 cursor-pointer transition"
                >
                    <div className="flex items-center space-x-3">
                        <Image
                            src="./mastercard-logo.svg"
                            alt="Card"
                            width={25}
                            height={25}
                        />
                        <span className="text font-medium">
                {card.name} {maskCardNumber(card.number)}
              </span>
                    </div>
                    <ChevronRight className="text-gray-400"/>
                </div>
            ))}

            {/* Add Payment Method */}
            <Link href="/add-payment-method">
                <button
                    className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 cursor-pointer transition">
                    + Add Payment Method
                </button>
            </Link>
        </div>
    )
}

export default ProfileDetails;
