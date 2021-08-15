import React from "react";
import Divisor from "../Component/Divisor";
import Filtros from "../Component/Filtros";
import Busqueda from "../Elements/b_busqueda";
import Card from "./Card";

function MainProductos() {
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default MainProductos;
