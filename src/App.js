import React, { useContext } from "react";
import "./App.css";
import Modalimg from "./Component/Modalimg";
import MainProductos from "./Elements/MainProductos";
import Nav from "./Elements/Nav";
import Article from "./Secciones/Article";
import Providervalue, { contexto } from "./transiciones.js/index";
function App() {
  return (
    //RUTAS
    <Providervalue>
      <div className="App">
        <Modalimg />
        <header>
          <Nav />
        </header>
        <Article />
        <MainProductos />
        <div className="cont-flecha">
          <a href="#inicio">
            <i className="bx bxs-up-arrow-square"></i>
          </a>
        </div>
      </div>
    </Providervalue>
  );
}

export default App;
