import Image from "next/image";
import React from "react";
import { GoArchive } from "react-icons/go";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const DetailsSidebar = ({friend}) => {
  return (
    <div className="space-y-6">
    <div className=" text-center p-4 bg-white shadow-sm rounded-md">
      <Image
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
        className="w-25 h-25 object-center object-cover mx-auto rounded-full"
      />
      <h2 className="text-[#1F2937] font-semibold text-xl">{friend.name}</h2>
      <p
        className={`text-xs font-medium py-1 px-3 text-white inline-flex rounded-full ${friend.status === "on-track" ? "bg-[#244D3F]" : friend.status === "almost due" ? "bg-yellow-500" : "bg-red-500"}`}
      >
        {friend.status}
      </p>
      <h4 className="my-4 ">
        {friend.tags.map((tag, ind) => (
          <span
            key={ind}
            className="bg-green-100 text-[#244D3F] text-xs font-medium py-1 px-3 rounded-full ml-2"
          >
            {tag}
          </span>
        ))}
      </h4>
      <h3 className="text-[#64748B] mb-2 text-sm">{friend.bio}</h3>
      <h4 className="text-sm text-[#64748B] font-medium ">Email: {friend.email}</h4>
    </div>
    <div className="space-y-2">
    <button className="btn w-full bg-white flex items-center"><HiOutlineBellSnooze className="w-4 h-4"/><span className="text-[#1F2937] font-medium">Snooze 2 Weeks</span></button>
    <button className="btn w-full bg-white flex items-center"><GoArchive className="w-4 h-4"/><span className="text-[#1F2937] font-medium">Archive</span></button>
    <button className="btn w-full bg-white flex items-center text-red-500"><RiDeleteBin6Line className="w-4 h-4"/><span className=" font-medium">Delete</span></button>
    </div>
    </div>
  );
};

export default DetailsSidebar;
