import React, { useEffect, useState } from "react";
import { db } from "./productos";
export function CustomHooks() {
  const [Info, setInfo] = useState([]);
  const [Hombres, setHombres] = useState([]);
  const [Mujeres, setMujeres] = useState([]);

  useEffect(() => {
    const datos = [];
    const mujeres = [];
    const hombres = [];
    db.collection("Productos").onSnapshot((doc) => {
      doc.forEach((info) => {
        hombres.push(info.data());
        datos.push(info.data());
      });
      setInfo(datos);
      setHombres(hombres);
    });
    db.collection("Relojes Mujeres").onSnapshot((doc) => {
      doc.forEach((info) => {
        datos.push(info.data());
        mujeres.push(info.data());
      });
      setMujeres(mujeres);
    });
  }, []);
  return { Info, setInfo, Hombres, Mujeres };
}
