"use client";

import { InteractionContext } from "@/lib/context";
import Image from "next/image";
import React, { useContext } from "react";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import EmptyTimeline from "./ui/EmptyTimeline";

const iconMap = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
};

const TimelineCard = () => {
  const { filteredData } = useContext(InteractionContext);
  return filteredData.length === 0 ? (
    <EmptyTimeline />
  ) : (
    <div className="grid grid-cols-1 gap-6">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="p-6 rounded-md shadow-sm flex items-center gap-4 bg-white"
        >
          <Image
            src={iconMap[item.interactionType]}
            alt=""
            className="w-8 h-8"
          />
          <div className="space-y-3">
            <h4 className="text-[#244D3F] font-medium text-xl">
              {item.interactionType}{" "}
              <span className="text-[#64748B] text-lg">with {item.name}</span>
            </h4>
            <p className="text-[#64748B] font-medium">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineCard;
