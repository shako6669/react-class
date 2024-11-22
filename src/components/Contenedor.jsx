import { Fragment, useState } from "react";
import Contador from "./Contador";

const miObjeto = {
  padding: "20px",
  backgroundColor: "aqua",
};

const Contenedor = () => {
  // mis variables
  const [newConteo, setNuevoConteo] = useState(0);
  const [inputValue, setInputValue] = useState(10);

  // mis metodos
  const Reset = () => {
    console.log("hiciste click");
    setNuevoConteo(inputValue);
  };

  const ControlarValue = (event) => {
    setInputValue(event.target.value);
  };
  // mi return
  return (
    <Fragment>
      <div style={miObjeto} className="mi-clase" id="padre">
        <h1 style={{ textAlign: "center" }}>Alvaro Andres Duarte Rodriguez</h1>

        <h4 style={{ textAlign: "center" }}>Contador inicial</h4>
        <div className="botones">
          <input
            value={inputValue}
            type="number"
            onChange={(event) => ControlarValue(event)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={Reset}>reset</button>
        </div>
        <Contador nombre="Alvaro" conteoInicial={newConteo} />
      </div>
      <div>Footer {newConteo}</div>
    </Fragment>
  );
};

export default Contenedor;
