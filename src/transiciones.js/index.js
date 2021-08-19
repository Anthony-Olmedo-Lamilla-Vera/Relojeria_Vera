import { Children, createContext, useState } from "react";
export const contexto = createContext();

export default function ProviderValue({ children }) {
  const [Modal, setModal] = useState();
  const [Url, setUrl] = useState("");
  return (
    <contexto.Provider value={{ Url, setUrl, Modal, setModal }}>
      {children}
    </contexto.Provider>
  );
}
