import React, { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const user2: User = {
    uid: "2350614513",
    name: "Vinicio Borja",
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Fernando Herrera",
    });
  };

  return (
    <div className="mt-2">
      <h3>Usuario:</h3>

      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {!user ? (
        <pre> No hay usuario </pre>
      ) : (
        <pre> {JSON.stringify(user)} </pre>
      )}

        <pre> {JSON.stringify(user2)} </pre>
    </div>
  );
};
