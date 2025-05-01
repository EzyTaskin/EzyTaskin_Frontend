"use client";
import Image from "next/image";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

const JobListing = ({
  title,
  status,
  location,
  date,
  time,
  postedBy,
  budget,
  about,
  responsibilities,
  requirements,
}: {
  title: string;
  status: string;
  location: string;
  date: string;
  time: string;
  postedBy: string;
  budget: number;
  about: string;
  responsibilities: string;
  requirements: string;
}) => {
  return (
    <div className="bg-[#F5F6FA] p-6 rounded-xl shadow-md max-w-lg mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <PrimaryButton
          label={status}
          textSize="text-sm"
          width="w-4xs"
          bgColor="bg-[#dcd8ff]"
          textColor="text-black"
          fontStyle="font-bold"
        />
      </div>

      {/* Info + Budget */}
      <div className="flex justify-between mt-4">
        <div className="text-sm text-black space-y-2">
          <div>
            <span className="font-bold text-s">LOCATION</span>
            <p>{location}</p>
          </div>
          <div>
            <span className="font-bold text-s">TO BE DONE ON</span>
            <p>{date}</p>
          </div>
          <div>
            <span className="font-bold text-s">TIME</span>
            <p>{time}</p>
          </div>
          <div>
            <span className="font-bold text-s">POSTED BY</span>
            <p>{postedBy}</p>
          </div>
        </div>
        <div className="bg-[#E7E4E4] p-4 rounded-xl text-center shadow-sm h-[8rem] mt-12 w-4xs">
          <span className="text-sm text-gray-600 font-medium block">
            BUDGET
          </span>
          <h2 className="text-2xl font-bold text-black mt-1">${budget}</h2>
          <button className="mt-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
            Make an offer
          </button>
        </div>
      </div>

      {/* Hiring person */}
      <div className="mt-8">
        <h2 className="font-semibold text-black text-lg mb-2">
          Meet the hiring person
        </h2>
        <div className="bg-[#E7E4E4] rounded-xl p-3 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src="/name-avatar.svg"
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full"
              unoptimized
            />
            <span className="font-semibold text-black">{postedBy}</span>
          </div>
          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
            Message
          </button>
        </div>
      </div>

      {/* About the job */}
      <div className="mt-8">
        <h2 className="font-semibold text-black text-lg mb-2">About the job</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{about}</p>

        <div className="flex gap-10 mt-4 px-4">
          <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
          <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
          <div className="w-23 h-23 bg-[#E7E4E4] rounded-lg"></div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-8">
        <h2 className="font-bold text-black text-lg mb-2">Responsibilities</h2>
        <p className="text-sm text-gray-800 pl-1">{responsibilities}</p>
      </div>

      {/* Requirements */}
      <div className="mt-8">
        <h2 className="font-bold text-black text-lg mb-2">Requirements</h2>
        <p className="text-sm text-gray-800 pl-1">{requirements}</p>
      </div>
    </div>
  );
};

export default JobListing;
