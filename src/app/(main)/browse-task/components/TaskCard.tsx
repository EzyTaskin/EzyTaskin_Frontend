import Image from "next/image";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface TaskCardProps {
    title: string;
    location: string;
    date: string;
    budget: number;
    onClick?: () => void;
}

export default function TaskCard({
                                     title,
                                     location,
                                     date,
                                     budget,
                                     onClick,
                                 }: TaskCardProps) {
    return (
        <div className="bg-[#F7F7F7] rounded-2xl shadow-md p-4 max-w-sm mb-5">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-xl font-bold">${budget}</span>
            </div>

            <div className="flex items-center text-black text-sm mt-2 gap-1">
                <Image
                    src="/location-icon.svg"
                    alt="Location"
                    width={16}
                    height={16}
                    unoptimized
                />
                {location}
            </div>

            {date && <div className="flex items-center text-black text-sm mt-1 gap-1">
                <Image
                    src="/calendar-icon.svg"
                    alt="Calendar"
                    width={16}
                    height={16}
                    unoptimized
                />
                {dayjs(date).fromNow()}
            </div>}

            <div className="flex justify-end mt-4">
                <PrimaryButton
                    label="View More"
                    width="w-4xs"
                    textSize="text-sm"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
