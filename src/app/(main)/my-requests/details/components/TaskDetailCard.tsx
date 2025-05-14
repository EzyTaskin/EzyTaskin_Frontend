import React from "react";
import {MapPin, Calendar, User, Eye, DollarSign} from "lucide-react";
import {TaskResponseType} from "src/app/constants/type";
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function TaskDetailCard({task}: { task: TaskResponseType }) {
    if (!task) return <h1>
        Loading...
    </h1>

    return (
        <div className="bg-[#F3F3FF] p-6 rounded-3xl max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{task.title}</h2>
                {!task.completedDate &&
                    <span className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow">
          OPEN
        </span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="flex space-x-1 items-baseline">
                    <MapPin className="text-gray-500 mt-1" size={15}/>
                    <div>
                        <p className="text-base text-gray-500">LOCATION</p>
                        <p className="font-semibold">{task.location}</p>
                    </div>
                </div>

                <div className="flex items-baseline space-x-1">
                    <Calendar className="text-gray-500 mt-1" size={15}/>
                    <div>
                        <p className="text-base text-gray-500">TO BE DONE ON</p>
                        <p className="font-semibold">{dayjs(task.dueDate).fromNow()}</p>
                    </div>
                </div>

                <div className="flex items-baseline space-x-1">
                    <DollarSign className="text-gray-500 mt-1" size={15}/>
                    <div>
                        <p className="text-base text-gray-500">BUDGET</p>
                        <p className="font-semibold">{task.budget}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center text-base mb-4">
                <Eye className="mr-1" size={18}/>
                20 views
            </div>

            <div className="mb-4">
                <p className="font-semibold mb-1">Applicants</p>
                <div className="flex space-x-2 mb-3">
                    {task.offers.map((offer) => {
                        return (
                            <Link key={offer.id}
                                  href={`/chat?peerId=${offer.provider.account}&offerId=${offer.id}&taskId=${task.id}&mode=consumer`}>
                                <div className="w-7 h-7 rounded-full bg-indigo-600"></div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
