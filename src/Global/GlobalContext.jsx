import { createContext,useState } from "react";
export const GlobalState = createContext();

export const GlobalContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  
  return (
    <GlobalState.Provider value={{ count, addCount }}>
      {children}
    </GlobalState.Provider>
  );
};
