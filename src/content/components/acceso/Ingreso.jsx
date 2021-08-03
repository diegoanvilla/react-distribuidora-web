import React from "react";
function Ingreso() {
  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Ingresa</h1>
        </div>
        <div className="area-formulario">
          <input type="email" name="email" placeholder="Correo Electronico" />
        </div>
        <div className="area-formulario">
          <input type="email" name="password" placeholder="Contraseña" />
        </div>
        <button
          className="boton-sesion"
          onClick={() => {
            window.location.assign("/dashboard");
          }}
        >
          <h2>Ingresa</h2>
        </button>
      </form>
    </>
  );
}

export default Ingreso;
