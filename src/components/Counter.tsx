import React, { useState } from "react";

export const Counter = () => {
    //useState - Sirve para crear un estado en un componente funcional 
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <>
      <h3>Counter:</h3>
      <span>Valor: {counter} </span>
      <br />
      <button
        //   incrementar - Cuando se pasa solo el nombre solo se llama, pero sin los parentesis
        //    Cuando no se ubica los parentesis, se esta pasando la referencia de la funcion
        onClick={() => incrementar()}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => incrementar(2)}
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-primary mt-2"
      >
        0
      </button>
    </>
  );
};
