import React, { useState } from "react";

const Context = React.createContext({});

export function UserContectProvider({ children }) {
  const [jwt, setJWT] = useState(null);

  const isAuth = window.sessionStorage.jwt ? true : false;
  return (
    <Context.Provider value={{ jwt, setJWT, isAuth }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
