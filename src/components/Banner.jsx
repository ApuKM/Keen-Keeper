import React from "react";
import { FaPlus } from "react-icons/fa";
import BannerData from "./ui/BannerData";
import { friendsPromise } from "@/lib/friendsPromise";

const Banner = async () => {
  const friends = await friendsPromise();
  return (
    <div className="w-11/12 max-w-7xl mx-auto mt-10 md:mt-20">
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-[#1F2937] font-bold text-center text-4xl md:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-center md:w-[60%]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <FaPlus />
          <span>Add a Friend</span>
        </button>
      </div>
      <BannerData friends={friends} />
    </div>
  );
};

export default Banner;
