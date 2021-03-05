import React from 'react';
import Typed from "react-typed";

const Header = () => {


    return (
        <div className="">
        <div className="main-info">
            <span className="span-Hey">HEY! I AM</span>
            <h1 className="nombre">Kevin Esquivel</h1>
          {/* <h1>Web development and website promotions</h1> */}
            <h3 className="typed-spam">I'm a<Typed
                className="typed-text ml-2"
                strings={["Web development", "Front-end", "Backend"]}
                typeSpeed={50}
                backSpeed={70}
                loop
            />
            </h3>
        
            <a href="/#" className="btn-main-offer mt-4"  >Contact</a>
        </div>
        </div>
    )
}

export default Header
