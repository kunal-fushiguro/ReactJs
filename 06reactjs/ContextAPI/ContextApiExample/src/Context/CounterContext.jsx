import { createContext, useState } from "react";

const counterContext = createContext(null);

const ContextProvider = (props) => {
  const [value, setValue] = useState(0);
  return (
    <counterContext.Provider value={{ count: value, setValue }}>
      {props.children}
    </counterContext.Provider>
  );
};

export { counterContext, ContextProvider };
