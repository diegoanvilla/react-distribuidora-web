import React from "react";
import Soporte from "../soporte/Soporte";
import "../../styles/home.css";
function Home() {
  return (
    <div className="contenedor-inicio">
      <div className="contenedor-contenido-inicio">
        <div className="jumbotron">
          <h1>Lorem Ipsum</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            veritatis voluptates voluptatum quod.
          </h5>
          <button
            onClick={() => {
              window.location.assign("/acceso");
            }}
            className="boton-sesion"
          >
            <h2>Inicia Sesion</h2>
          </button>
        </div>
        <h1 className="titulo-inicio">Nuestros Servicios</h1>
        <div className="servicios">
          <div className="servicios-elemento">
            <h1>1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              odit, quod consequatur quia dolorem minus eaque assumenda harum
              inventore possimus facilis voluptates, nobis excepturi corrupti
              dicta, molestiae reiciendis! Architecto, tempore?
            </p>
          </div>
          <div className="servicios-elemento">
            <h1>2</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            sequi, dolorum dolores nesciunt nisi enim voluptatibus consequatur
            fugiat inventore ab veritatis. Id assumenda praesentium vitae neque
            suscipit fugit voluptatum numquam!
          </div>
          <div className="servicios-elemento">
            <h1>3</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              qui quaerat veniam amet nostrum distinctio error alias quae
              commodi nam dicta quisquam, deserunt ut maxime. Iusto aut
              laudantium cum commodi.
            </p>
          </div>
        </div>
        <h1 className="titulo-inicio">Acerca de Nosotros</h1>
        <div className="acerca-nosotros">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            delectus, beatae expedita placeat similique, praesentium corrupti
            non cupiditate ducimus reprehenderit vero? Repellat dolor dolorem
            ducimus eveniet nostrum obcaecati harum. Adipisci? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Natus magnam facere cum
            doloremque earum, provident porro quisquam totam quasi consequatur
            eligendi. Aliquid pariatur voluptatem laborum dolor maiores officiis
            eius. Ipsam.
          </p>
        </div>
        <Soporte />
      </div>
    </div>
  );
}

export default Home;
