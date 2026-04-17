import Link from "next/link";
import React from "react";

const EmptyTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">📭</div>

      <h2 className="text-2xl font-semibold text-gray-700">
        No Timeline Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        You don’t have any calls/ messages/ or videos yet. Start a conversation
        to see your timeline here.
      </p>

      <Link href={"/"} className="btn bg-[#244D3F] text-white mt-6">
        Start Now
      </Link>
    </div>
  );
};

export default EmptyTimeline;
