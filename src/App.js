import React, { useState, useEffect } from "react";
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

//Librerias
import moment from "moment";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [value, setValue] = useState(80);
  const [value_area, setValue_area] = useState(900);
  const [fechaNacimiento, setfechaNacimiento] = useState("");

  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  const cargandoSnipper = () => {
    setTimeout(() => {
      setCargando(false);
    }, 1000);
  };

  const calcularResolucion = () => {
    if (window.innerWidth <= 768) {
      setValue(120);
      setValue_area(800);
    }
  };

  const obtenerEdad = () => {
    let nacimiento = moment("1997-09-01");
    let hoy = moment();
    let years = hoy.diff(nacimiento, "years");
    setfechaNacimiento(years);
  };

  window.addEventListener("DOMContentLoaded", () => {
    cargandoSnipper();
    calcularResolucion();
    obtenerEdad();
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
                    color: "#18d26e",
                  },
                },
              },
            }}
          />

          <Navbar navbar={navbar} setNavbar={setNavbar} />
          <Header />
          <About
            fechaNacimiento={fechaNacimiento}
            setfechaNacimiento={setfechaNacimiento}
          />
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
