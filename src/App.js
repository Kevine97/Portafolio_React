import React, {useState} from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import About from "./componentes/About";




function App() {

  const [navbar, setNavbar] = useState(false);
  const [showBelow, setShowBelow] = useState(false);
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
    
    </>
  );
}

export default App;
