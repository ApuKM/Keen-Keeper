import FilterTimeline from "@/components/FilterTimeline";
import TimelineCard from "@/components/TimelineCard";
import React from "react";

const TimeLinePage = () => {
  return (
    <div className="py-10 md:py-20 bg-[#F8FAFC] ">
      <div className="w-11/12 mx-auto max-w-7xl space-y-6">
        <h1 className="text-[#1F2937] font-bold text-4xl md:text-5xl">
          Timeline
        </h1>
        <FilterTimeline />
        <TimelineCard />
      </div>
    </div>
  );
};

export default TimeLinePage;
