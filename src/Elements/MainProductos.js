import React from "react";
import Divisor from "../Component/Divisor";
import Filtros from "../Component/Filtros";
import Busqueda from "../Elements/b_busqueda";
import Card from "./Card";
import { CustomHooks } from "../Servicio/CustomHooks";
function MainProductos() {
  const { Info } = CustomHooks();

  return (
    <div className="cont-productos">
      <div className="cont-header-producto">
        <Divisor />
      </div>
      {/*
      <div className="cont-busqueda-productos">
        <Busqueda />
      <div className="cont-filtos-productos">
        <Filtros />
      </div>
      </div>*/}
      <div className="cont-cards-productos">
        <div className="center">
          <h3>Productos</h3>
        </div>
        <div className="map-cards">
          {Info.map((item) => {
            return <Card key={item.id} url={item.url} precio={item.precio} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainProductos;
