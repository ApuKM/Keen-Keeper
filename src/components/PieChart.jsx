"use client";

import { InteractionContext } from "@/lib/context";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Chart = () => {
  const { timeLine, setTimeLine } = useContext(InteractionContext);

  //   const texts = timeLine.filter(item => item.interactionType === "Text")
  //   const calls = timeLine.filter(item => item.interactionType === "Call")
  //   const videos = timeLine.filter(item => item.interactionType === "Video")

  const counts = timeLine.reduce(
    (acc, item) => {
      acc[item.interactionType]++;
      return acc;
    },
    { Text: 0, Call: 0, Video: 0 },
  );

  const data = [
    { name: "Text", value: counts.Text, fill: "#244D3F" },
    { name: "Call", value: counts.Call, fill: "#FF8042" },
    { name: "Video", value: counts.Video, fill: "#FF8067" },
  ];

  return (
    <div className="shadow p-10 rounded-md bg-white">
      <h2 className="text-[#244D3F] font-medium text-xl">
        By Interaction Type
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart;
