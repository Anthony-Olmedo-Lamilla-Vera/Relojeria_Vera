import React, { useContext } from "react";
import ButtonPrincipal from "../Component/ButtonPrincipal";
import { contexto } from "../transiciones.js";

function Card(props) {
  const { Modal, setModal, Url, setUrl } = useContext(contexto);
  const openModal = () => {
    setModal(true);
    setUrl(props.url);
  };
  return (
    <div className="cont-card ">
      <div className="contenido-card  ">
        <div className="fav-card">
          <i className="bx bx-heart"></i>
          <button onClick={openModal}>
            <i className="bx bx-show-alt"></i>
          </button>
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
