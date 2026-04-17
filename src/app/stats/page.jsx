import Chart from "@/components/PieChart";
import React from "react";

const StatsPage = () => {
  return (
    <div className="py-10 md:py-20 bg-[#F8FAFC]">
      <div className="w-11/12 mx-auto max-w-7xl space-y-4">
        <h1 className="text-[#1F2937] font-bold text-4xl md:text-5xl">
          Friendship Analytics
        </h1>
        <Chart />
      </div>
    </div>
  );
};

export default StatsPage;
