"use client";

import { InteractionContext } from "@/lib/context";
import React, { useContext } from "react";

const FilterTimeline = () => {
  const { filter, setFilter } = useContext(InteractionContext);
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 text-[#64748B] text-base w-50">
          {filter === "all" ? "Filter timeline" : filter}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button className="btn" onClick={() => setFilter("all")}>
              All
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => setFilter("Text")}>
              Text
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => setFilter("Call")}>
              Call
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => setFilter("Video")}>
              Video
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterTimeline;
