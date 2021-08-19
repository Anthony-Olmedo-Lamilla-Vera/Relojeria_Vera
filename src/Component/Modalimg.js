import React, { useContext } from "react";
import { contexto } from "../transiciones.js";
//import "../transiciones.js/index";
function Modalimg() {
  const { Modal, setModal, Url } = useContext(contexto);
  return (
    <>
      {Modal ? (
        <div className="modal-img">
          <div className="cont-modal">
            <div className="head-modal">
              <button onClick={() => setModal(false)}>
                <i className="bx bx-x-circle"></i>
              </button>
            </div>
            <div className="img-modal">
              <img lazy="loading" src={Url} alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modalimg;
