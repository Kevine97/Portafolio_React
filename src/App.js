import React, {useState} from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// PARTICULAS
import Particles from "react-particles-js"
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import About from "./componentes/About";
import Services from './componentes/Services';
import Skill from './componentes/Skill';
import Experience from './componentes/Experience';
import Portafolio from './componentes/Portafolio';





function App() {

  const [navbar, setNavbar] = useState(false);



  
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value: 70,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type: "circle",
          stroke:{
            width:8,
            color:"#007bff"
            
          }
        },
       
      }

    }}
    />
      <Navbar 
        navbar = {navbar}
        setNavbar = {setNavbar}
      />
      <Header />
      <About/>
      <Services/>
      <Skill/>
      <Experience/>
      <Portafolio/>
    </>
  );
}

export default App;
