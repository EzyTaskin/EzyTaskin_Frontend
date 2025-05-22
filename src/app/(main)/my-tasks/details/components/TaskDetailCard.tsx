import React from "react";
import {MapPin, Calendar, Eye, DollarSign, User} from "lucide-react";
import {TaskResponseType} from "src/app/constants/type";
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useMutateOffers from "src/app/hooks/useMutateOffers";
import useAuth from "src/app/hooks/useAuth";

dayjs.extend(relativeTime);

export default function TaskDetailCard({task}: { task: TaskResponseType }) {
    const offerer = useMutateOffers();
    const {userId: currentUserId} = useAuth();

    if (!task) return <h1>
        Loading...
    </h1>

    const handleCompleteRequest = () => {

        offerer.completeRequest({
            requestId: task.id,
        })
        window.location.reload();
    }

    return (
        <div className="bg-[#F3F3FF] p-6 rounded-3xl max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{task.title}</h2>
                <div className="flex space-x-2">
                    <Link href={`/chat?peerId=${task.consumer.account}&taskId=${task.id}&mode=provider`}>
                    <span
                        className="block bg-(--color-primary) text-white text-sm font-medium px-4 py-2 rounded-full shadow">
          CONTACT
        </span>
                    </Link>
                    {!task.completedDate ?
                        <span className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow">
                            {task.selected ? "ASSIGNED" : "OPEN"}
        </span> : <span className="bg-(--color-secondary) text-black text-sm font-medium px-4 py-2 rounded-full shadow">
                            DONE
        </span>}
                </div>
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
                        <p className="text-base text-gray-500">TO BE DONE</p>
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

                <div className="flex items-baseline space-x-1">
                    <User className="text-gray-500 mt-1" size={15}/>
                    <div>
                        <p className="text-base text-gray-500">POSTED BY</p>
                        <p className="font-semibold">{task.consumer.name}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end justify-end mb-6">
                <div className="flex space-x-2">
                    {!task.completedDate && (task.selected?.provider.account === currentUserId ?
                        <button onClick={handleCompleteRequest}
                              className="bg-(--color-primary) text-white font-medium px-4 py-2 rounded-full shadow cursor-pointer">
                            Complete Request
                        </button> : (task.selected?.provider.account ?
                        <button
                            disabled
                              className="bg-(--color-secondary) font-medium px-4 py-2 rounded-full shadow cursor-pointer">
                            Offer Not Selected
                        </button> :
                        <button
                            disabled
                              className="bg-(--color-secondary) font-medium px-4 py-2 rounded-full shadow cursor-pointer">
                            Offer Pending
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
