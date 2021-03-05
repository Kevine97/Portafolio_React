import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value: 30,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type: "circle",
          stroke:{
            width:6,
            color:"#007bff"
            
          }
        },
       
      }

    }}
    />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
