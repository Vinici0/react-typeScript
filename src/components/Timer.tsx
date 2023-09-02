import React, { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
    // Estado para almacenar el número de segundos transcurridos.
    const [segundos, setSegundos] = useState(0);
  
    // Referencia mutable para almacenar el identificador del intervalo de tiempo.
    const ref = useRef<NodeJS.Timeout>();
  
    // Efecto que se ejecuta cuando cambia la prop milisegundos.
    useEffect(() => {
      // Se cancela el intervalo anterior, si existe.
      ref.current && clearInterval(ref.current);
      
      // Se configura un nuevo intervalo que actualiza segundos cada milisegundos.
      //SetInterval es una fucion vatina de JS
      //TODO: El argumento del setSegundos es una funcion que recibe el valor anterior y retorna el nuevo valor
      ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
    }, [milisegundos]);
  
    // Renderiza un fragmento JSX que muestra el contador de segundos.
    return (
      <>
        <h4>
          Timer: <small>{segundos}</small>
        </h4>
      </>
    );
  };
  