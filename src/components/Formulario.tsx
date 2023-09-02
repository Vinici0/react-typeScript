import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

interface User {
  nombre: string;
  email: string;
  edad : number;
}

export const Formulario = () => {
  const { nombre, email, handleChange } = useForm<User>({
    nombre: "Vinicio",
    email: "vinicio.borja10@gmail.com",
    edad: 35,
  });



  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify({ nombre, email }, null, 3)}</pre>
    </form>
  );
};
