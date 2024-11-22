import { useEffect, useState } from "react";

const Contador = ({ conteoInicial, nombre }) => {
  const [inputContador, setInputContador] = useState(0);

  useEffect(() => {
    setInputContador(conteoInicial);
  }, [conteoInicial, nombre]);

  console.log(nombre);

  const Incrementar = () => {
    setInputContador((prev) => parseInt(prev) + 1);
  };
  const Decrementar = () => {
    setInputContador(Number(inputContador) - 1);
  };
  return (
    <div id="hijo">
      <h4 style={{ textAlign: "center" }}>Componente contador</h4>
      <div className="botones">
        <button onClick={Decrementar} style={{ marginRight: "10px" }}>
          -
        </button>
        <input value={inputContador} style={{ marginRight: "10px" }} disabled />
        <button onClick={Incrementar}>+</button>
      </div>
    </div>
  );
};

export default Contador;
