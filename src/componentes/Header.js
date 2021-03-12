import React from 'react';
// Typed
import Typed from "react-typed";
import author from "../asset/img/Perfil2.png";
const Header = () => {


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
                strings={["Web development", "Front-end development", "Backend development", "UX/UI"]}
                typeSpeed={50}
                backSpeed={70}
                loop
            />
            </h3>
        
            <a href="https://api.whatsapp.com/send?phone=50588862060&text=Hola%20Kevin%20"target="_blank" rel="nooponer noreferrer" className="btn-main-offer mt-4">Contacto</a>
        </div>
        </div>
    )
}

export default Header
