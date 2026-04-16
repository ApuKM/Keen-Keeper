"use client";

import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionContextProvider = ({children}) => {
  const [timeLine, setTimeLine] = useState([]);

  const data = { timeLine, setTimeLine };

  return <InteractionContext.Provider value={data}>{children}</InteractionContext.Provider>;
};

export default InteractionContextProvider;
