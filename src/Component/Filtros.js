import React from "react";
import Itemfiltro from "./Itemfiltro";

function Filtros() {
  return (
    <div className="filtro">
      <div className="cont-filtro">
        <div className="head-filtro">
          <h3>Filtrar por :</h3>
        </div>
        <div className="fix">
          <div className="item-filtro  center">
            <Itemfiltro item="Relojes Hombre " />
            <Itemfiltro item="Relojes Hombre " />
            <Itemfiltro item="Relojes Hombre " />
            <Itemfiltro item="Relojes Hombre " />
            <Itemfiltro item="Relojes Hombre " />
            <Itemfiltro item="Relojes Hombre " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtros;
