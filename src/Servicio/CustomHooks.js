import React, { useEffect, useState } from "react";
import { db } from "./productos";
export function CustomHooks() {
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    const datos = [];
    db.collection("Productos").onSnapshot((doc) => {
      doc.forEach((info) => {
        datos.push(info.data());
      });
      setInfo(datos);
    });
  }, []);
  return { Info };
}
