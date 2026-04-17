"use client";

import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionContextProvider = ({children}) => {
  const [timeLine, setTimeLine] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredData = timeLine.filter(item => {
    if(filter === "all") return true;
    return item.interactionType === filter;
  })

  const data = { timeLine, setTimeLine, filter,  setFilter, filteredData};

  return <InteractionContext.Provider value={data}>{children}</InteractionContext.Provider>;
};

export default InteractionContextProvider;
