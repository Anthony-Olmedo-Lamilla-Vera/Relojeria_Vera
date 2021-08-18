import React from "react";
import ButtonSecundary from "../Component/ButtonSecundary";

function Nav() {
  return (
    <div className="cont-header">
      <div className="contenido-head">
        <div className="align-izquierda">
          {/*
            <div className="cont-logo-hamburger">
              <i class="bx bx-menu"></i>
            </div>*/}
          <div className="title-logo">
            <span className="t">T</span>-Reloj<span>.ec</span>
          </div>
          <div className="nav-head">
            <nav>
              <li>
                <a href="">Relojes</a>
              </li>
              <li>
                <a href="">Productos</a>
              </li>
              <li>
                <a href="">Inventario</a>
              </li>
            </nav>
          </div>
        </div>
        <div className="herramientas-shop">
          {/* <ButtonSecundary nombre="Iniciar Sesion" />
          <div className="cont-shop">
            <div className="button-shop center">
              <i class="bx bx-cart-alt"></i>
            </div>
          </div>
            */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
