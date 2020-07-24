import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push("/");
    history.replace("/"); // me remplaza el historia para que no pueda dar para atras y el push si lo permite.
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
