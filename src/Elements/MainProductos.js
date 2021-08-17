import React, { useEffect, useState } from "react";
import Divisor from "../Component/Divisor";
import Filtros from "../Component/Filtros";
import Busqueda from "../Elements/b_busqueda";
import Card from "./Card";
import { db } from "../Servicio/productos";
function MainProductos() {
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
  return (
    <div className="cont-productos">
      <div className="cont-header-producto">
        <Divisor />
      </div>
      <div className="cont-busqueda-productos">
        <Busqueda />
      </div>
      <div className="cont-filtos-productos">
        <Filtros />
      </div>
      <div className="cont-cards-productos">
        <div className="center">
          <h3>Productos</h3>
        </div>
        <div className="map-cards">
          {Info.map((item) => {
            console.log(item);
            return <Card key={item.id} url={item.url} precio={item.precio} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainProductos;
