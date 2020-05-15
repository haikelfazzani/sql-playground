import React, { useState, createContext } from 'react';

const GlobalContext = createContext();

/** init values global state */
let initState = {
  db: null,
  fontSize: '16px',
  isRunning: false,
  isNavOpen: false // open nav history tables creatation
};

export default function GlobalProvider ({ children }) {
  const [globalState, setGlobalState] = useState(initState);
  return <GlobalContext.Provider value={{ globalState, setGlobalState }}>
    {children}
  </GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };