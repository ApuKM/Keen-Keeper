import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto mt-20">
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-[#1F2937] font-bold text-5xl">Friends to keep close in your life</h1>
        <p className="text-[#64748B] text-center w-[60%]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
          <FaPlus />
          <span>Add a Friend</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-8">
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">10</h2>
          <p className="text-[#64748B] text-lg">Total Friends</p>
        </div>
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">10</h2>
          <p className="text-[#64748B] text-lg">On Track</p>
        </div>
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">10</h2>
          <p className="text-[#64748B] text-lg">Need Attention</p>
        </div>
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">10</h2>
          <p className="text-[#64748B] text-lg">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
