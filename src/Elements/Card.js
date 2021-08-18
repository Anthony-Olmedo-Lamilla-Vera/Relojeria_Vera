import React from "react";
import ButtonPrincipal from "../Component/ButtonPrincipal";
import img1 from "../IMG/1.jpg";

function Card(props) {
  return (
    <div className="cont-card ">
      <div className="contenido-card  ">
        <div className="fav-card">
          <i class="bx bx-heart"></i>
        </div>
        <div className="img-card">
          <img src={props.url} alt="" />
        </div>
        <div className="preciocard">
          <p>$ {props.precio} </p>
        </div>
        <div className="botoncard">
          <ButtonPrincipal />
        </div>
      </div>
    </div>
  );
}

export default Card;
