import React, { createContext, useContext, useEffect, useState } from 'react';

const TabContext = createContext();

export const useTab = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
