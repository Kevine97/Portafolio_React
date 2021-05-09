import React from 'react';
// Typed
import Typed from "react-typed";
const Header = () => {

    const author = 'https://i.ibb.co/DppnJh5/Perfil2.jpg'
    const whatsapp = ()=>{
        window.open("https://api.whatsapp.com/send?phone=50588862060&text=Hola%20Kevin%20", "_blank")
      }

    return (
        <div className="padding">
        <div className="main-info">
            <span className="span-Hey mt-5">Hola, mi nombre es</span>
            <h1 className="nombre">Kevin Esquivel</h1>
            <img
            className="img-fluid profile-img mb-2"
            src={author}
            alt="Perfil"
          
          ></img>
          {/* <h1>Web development and website promotions</h1> */}
            <h3 className="typed-spam">Soy<Typed
                className="typed-text ml-2"
                strings={["Web developer", "Front-end developer", "Backend developer", "UX/UI"]}
                typeSpeed={50}
                backSpeed={70}
                loop
            />
            </h3>
        
            <a className="btn-main-offer mt-4" onClick={whatsapp}>Contacto</a>
        </div>
        </div>
    )
}

export default Header
