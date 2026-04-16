import FilterTimeline from "@/components/FilterTimeline";
import TimelineCard from "@/components/TimelineCard";
import React from "react";

const TimeLinePage = () => {
  return (
    <div className="py-10 md:py-20 bg-[#F8FAFC]">
      <div>
        <h1>Timeline</h1>
        <FilterTimeline />
      </div>
      <TimelineCard />
    </div>
  );
};

export default TimeLinePage;
