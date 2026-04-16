"use client";

import Image from "next/image";
import React, { useContext } from "react";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import { InteractionContext } from "@/lib/context";
import toast from "react-hot-toast";

const InteractionBtn = ({ friend }) => {
  const { timeLine, setTimeLine } = useContext(InteractionContext);

  const handleInteraction = (interactionType) => {
    toast.success(`${interactionType} with ${friend.name}`);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div
        className="text-center text-[#1F2937] p-4 bg-base-200 rounded-md"
        onClick={() => handleInteraction("Call")}
      >
        <Image src={callIcon} alt="Call-icon" className="mx-auto w-6 h-6" />
        <p className="text-lg mt-2">Call</p>
      </div>
      <div className="text-center text-[#1F2937] p-4 bg-base-200  rounded-md">
        <Image src={textIcon} alt="Call-icon" className="mx-auto w-6 h-6" />
        <p className="text-lg mt-2">Text</p>
      </div>
      <div className="text-center text-[#1F2937] p-4 bg-base-200 rounded-md">
        <Image src={videoIcon} alt="Call-icon" className="mx-auto w-6 h-6" />
        <p className="text-lg mt-2">Video</p>
      </div>
    </div>
  );
};

export default InteractionBtn;
