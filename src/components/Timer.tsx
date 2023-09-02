import React, { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  // Estado para almacenar el número de segundos transcurridos.
  const [segundos, setSegundos] = useState(0);
  const [segundos2, setSegundos2] = useState(0);

  // Referencia mutable para almacenar el identificador del intervalo de tiempo.
  //TODO: Crea una referencia que no importa si el componente se renderiza, no se va a volver a ejecutar
  const ref = useRef<NodeJS.Timeout>(); //Guarda el id del setInterval en la variable ref y se ejecuta cada milisegundos
  const ref2 = useRef<NodeJS.Timeout>();
  // Efecto que se ejecuta cuando cambia la prop milisegundos.
  useEffect(() => {
    // Se cancela el intervalo anterior, si existe.
    ref.current && clearInterval(ref.current);
    ref2.current && clearInterval(ref2.current);
    // Se configura un nuevo intervalo que actualiza segundos cada milisegundos.
    //SetInterval es una fucion vatina de JS
    //TODO: El argumento del setSegundos es una funcion que recibe el valor anterior y retorna el nuevo valor
    //TODO: El ref.current obtiene la referencia del setInterval y lo almacena en la variable ref
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
    ref2.current = setInterval(() => setSegundos2((s) => s + 1), 2000);
    console.log("ref.current", ref.current);
    
  }, [milisegundos]);

  // Renderiza un fragmento JSX que muestra el contador de segundos.
  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
      <h4>
        Timer2: <small>{segundos2}</small>
      </h4>
    </>
  );
};
