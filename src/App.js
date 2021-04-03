import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// PARTICULAS
import Particles from "react-particles-js";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import About from "./componentes/About";
import Services from "./componentes/Services";
import Skill from "./componentes/Skill";
import Experience from "./componentes/Experience";
import Portafolio from "./componentes/Portafolio";
import Spinner from "./componentes/Spinner";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [value, setValue] = useState(80);
  const [value_area, setValue_area] = useState(900);

  const cargandoSnipper = () => {
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  };

  const calcularResolucion = () => {
    if (window.innerWidth <= 768) {
      console.log("Calculando la resolucion de pantalla");
      setValue(120);
      setValue_area(800);
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    cargandoSnipper();
    calcularResolucion();
  });

  return (
    <>
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <Particles
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: value,
                  density: {
                    enable: true,
                    value_area: value_area,
                  },
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 8,
                    color: "#007bff",
                  },
                },
              },
            }}
          />

          <Navbar navbar={navbar} setNavbar={setNavbar} />
          <Header />
          <About />
          <Services />
          <Skill />
          <Experience />
          <Portafolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
