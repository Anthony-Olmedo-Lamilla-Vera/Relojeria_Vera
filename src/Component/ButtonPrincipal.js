import React from "react";

function ButtonPrincipal() {
  return (
    <div className="cont-boton-principal">
      <a
        href="https://wa.me/5930960847188/?text=Hola!,me interesa el producto, como procederia la compra"
        target="__blank"
        className=""
      >
        Comprar
        <span>
          <i class="bx bxl-whatsapp"></i>
        </span>
      </a>
    </div>
  );
}

export default ButtonPrincipal;
