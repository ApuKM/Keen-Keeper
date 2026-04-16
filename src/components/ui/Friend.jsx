import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friend = ({ friend }) => {
  return (
    <Link href={`friends/${friend.id}`}>
      <div className="text-center p-4 bg-white shadow-sm rounded-md hover:shadow-lg transition-all">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={100}
          height={100}
          className="w-25 h-25 object-center object-cover mx-auto rounded-full"
        />
        <h2 className="text-[#1F2937] font-semibold text-xl">{friend.name}</h2>
        <p className="text-[#64748B] text-xs">
          {friend.days_since_contact} days ago
        </p>
        <h4 className="my-4 ">
          {friend.tags.map((tag, ind) => (
            <span key={ind} className="bg-green-100 text-[#244D3F] text-xs font-medium py-1 px-3 rounded-full ml-2">
              {tag}
            </span>
          ))}
        </h4>
        <p
          className={`text-xs font-medium py-1 px-3 text-white inline-flex rounded-full ${friend.status === "on-track" ? "bg-[#244D3F]" : friend.status === "almost due" ? "bg-yellow-500" : "bg-red-500"}`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default Friend;
