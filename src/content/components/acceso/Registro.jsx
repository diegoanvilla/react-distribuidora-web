import React from "react";
function Registro() {
  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="" placeholder="Nombre" />
          <input
            type="text"
            name="usuario"
            id=""
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="area-formulario">
          <input type="email" name="email" placeholder="Correo Electronico" />
        </div>
        <div className="area-formulario">
          <input type="email" name="password" placeholder="Contraseña" />
        </div>
        <div className="area-formulario">
          <input type="email" placeholder="Confirmar Contraseña" />
        </div>
        <button
          onClick={() => {
            window.location.assign("/dashboard");
          }}
          className="boton-sesion"
        >
          <h2>Registrate</h2>
        </button>
      </form>
    </>
  );
}

export default Registro;
