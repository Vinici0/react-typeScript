import React from "react";
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
    </>
  );
}

export default App;
