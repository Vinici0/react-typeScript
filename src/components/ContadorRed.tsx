import React, { useReducer } from "react";

const initialState = {
  contador: 10,
};

const initialStateUser = {
  nombre: "Vinicio",
  apellido: "Borja",
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

type ActionTypeUser = { type: "setNombre" } | { type: "setApellido" };

const contadorReducerUser = (
  state: typeof initialStateUser,
  action: ActionTypeUser
) => {
  switch (action.type) {
    case "setNombre":
      return {
        ...state,
        nombre: "Leonardo",
      };

    case "setApellido":
      return {
        ...state,
        apellido: "Tapia",
      };

    default:
      return state;
  }
};

//TODO: El useReducer recibe dos argumentos, el primero es la funcion reductora y el segundo es el estado inicial
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  const [{ nombre, apellido }, dispatchUser] = useReducer(
    contadorReducerUser,
    initialStateUser
  );

  return (
    <>
      <h2>Contador: {contador}</h2>
      <hr />
      <h2>Datos del usuario</h2>
      <h3>Nombre: {nombre}</h3>
      <h3>Apellido: {apellido}</h3>

      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatchUser({ type: "setNombre" })}
      >
        Cambiar nombre
      </button>
    </>
  );
};
