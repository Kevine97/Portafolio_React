import React from 'react';
import Typed from "react-typed";
import author from "../asset/img/Perfil2.png";
const Header = () => {


    return (
        <div className="padding">
        <div className="main-info">
            <span className="span-Hey mt-5">Hi, my name is</span>
            <h1 className="nombre">Kevin Esquivel</h1>
            <img
            className="img-fluid profile-img"
            src={author}
            alt="Perfil"
          
          ></img>
          {/* <h1>Web development and website promotions</h1> */}
            <h3 className="typed-spam">I'm a<Typed
                className="typed-text ml-2"
                strings={["Web development", "Front-end", "Backend", "Web design"]}
                typeSpeed={50}
                backSpeed={70}
                loop
            />
            </h3>
        
            <a href="/#" className="btn-main-offer mt-4">Contact</a>
        </div>
        </div>
    )
}

export default Header
