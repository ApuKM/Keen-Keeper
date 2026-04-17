"use client";

import { InteractionContext } from "@/lib/context";
import React, { useContext } from "react";

const BannerData = ({ friends }) => {
  const { timeLine } = useContext(InteractionContext);

  const count = friends.reduce(
    (acc, friend) => {
      if (friend.status === "on-track") {
        acc.onTract += 1
      } else {
        acc.needAttention += 1
      }
      return acc;
    },
    { onTract: 0, needAttention: 0 },
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
      <div className="text-center p-4 bg-white shadow-sm rounded-md">
        <h2 className="text-[#244D3F] font-semibold text-3xl">
          {friends.length}
        </h2>
        <p className="text-[#64748B] text-lg">Total Friends</p>
      </div>
      <div className="text-center p-4 bg-white shadow-sm rounded-md">
        <h2 className="text-[#244D3F] font-semibold text-3xl">
          {count.onTract}
        </h2>
        <p className="text-[#64748B] text-lg">On Track</p>
      </div>
      <div className="text-center p-4 bg-white shadow-sm rounded-md">
        <h2 className="text-[#244D3F] font-semibold text-3xl">{count.needAttention}</h2>
        <p className="text-[#64748B] text-lg">Need Attention</p>
      </div>
      <div className="text-center p-4 bg-white shadow-sm rounded-md">
        <h2 className="text-[#244D3F] font-semibold text-3xl">{timeLine.length}</h2>
        <p className="text-[#64748B] text-lg">Interactions This Month</p>
      </div>
    </div>
  );
};

export default BannerData;
