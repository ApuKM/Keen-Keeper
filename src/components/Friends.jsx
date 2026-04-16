import React from "react";
import Friend from "./ui/Friend";
import { friendsPromise } from "@/lib/friendsPromise";



const Friends = async () => {
  const friends = await friendsPromise();
  return (
    <div className="w-11/12 max-w-7xl mx-auto mt-10 md:mt-20">
      <h4 className="text-[#1F2937] font-semibold text-2xl">Your Friends</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
