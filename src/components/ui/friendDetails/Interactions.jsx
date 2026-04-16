import React from "react";
import InteractionBtn from "./InteractionBtn";

const Interactions = ({ friend }) => {
  const { days_since_contact, goal, next_due_date } = friend;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">
            {days_since_contact}
          </h2>
          <p className="text-[#64748B] text-lg">Days Since Contact</p>
        </div>
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">{goal}</h2>
          <p className="text-[#64748B] text-lg">Goal(Days)</p>
        </div>
        <div className="text-center p-4 bg-white shadow-sm rounded-md">
          <h2 className="text-[#244D3F] font-semibold text-3xl">
            {next_due_date}
          </h2>
          <p className="text-[#64748B] text-lg">Next Due</p>
        </div>
      </div>
      <div className="flex justify-between bg-white shadow-sm rounded-md p-4">
        <div className="">
          <h2 className="text-[#244D3F] font-medium text-xl mb-2">
            Relationship Goal
          </h2>
          <p className="text-[#64748B] text-lg">
            Connect Every{" "}
            <span className="text-[#1F2937] font-bold">{goal} days</span>
          </p>
        </div>
        <button className="btn text-[#1F2937]">Edit</button>
      </div>
      <div className="p-4 bg-white shadow-sm rounded-md">
        <h2 className="text-[#244D3F] font-medium text-xl mb-2">Quick Check-In</h2>
        <InteractionBtn />
      </div>
    </div>
  );
};

export default Interactions;
