import React, { useState } from "react";
import { CustomHooks } from "../Servicio/CustomHooks";

function B_busqueda() {
  const [ValInput, setValInput] = useState("");

  const Input = (evt) => {
    const { Info } = CustomHooks();
    setValInput(evt.target.value);
  };
  return (
    <div className="barrabusqueda">
      <div className="cont-barra center">
        <form>
          <input type="text" value={ValInput} onChange={Input} />
          <button>
            <i class="bx bx-search-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default B_busqueda;
