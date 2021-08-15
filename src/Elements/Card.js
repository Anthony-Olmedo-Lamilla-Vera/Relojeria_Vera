import React from "react";
import ButtonPrincipal from "../Component/ButtonPrincipal";
import img1 from "../IMG/IMG-20210808-WA0030.jpg";

function Card() {
  return (
    <div className="cont-card ">
      <div className="contenido-card  ">
        <div className="fav-card"></div>
        <div className="img-card">
          <img src={img1} alt="" />
        </div>
        <div className="preciocard">
          <p>$ 15 </p>
        </div>
        <div className="botoncard">
          <ButtonPrincipal />
        </div>
      </div>
    </div>
  );
}

export default Card;
