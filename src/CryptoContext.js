import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

const CryptoContext = ( {children} ) => {
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("Є");

  useEffect(() => {
    if (currency === "EUR") setSymbol("Є");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
      <Crypto.Provider value={{currency,setCurrency,symbol}}>{children}</Crypto.Provider>
  );
};

export default CryptoContext;

export const CrypotoState = () => {
  return useContext(Crypto);
};
