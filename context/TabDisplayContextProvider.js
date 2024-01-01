import React, { createContext, useEffect, useState } from "react";

export const TabDisplayContext = createContext();

const TabDisplayContextProvider = ({ children }) => {
  const [tabDisplay, setTabDisplay] = useState("flex");
  useEffect(() => {
    console.log(tabDisplay);
  }, [tabDisplay]);
  return (
    <TabDisplayContext.Provider value={{ tabDisplay, setTabDisplay }}>
      {children}
    </TabDisplayContext.Provider>
  );
};

export default TabDisplayContextProvider;
