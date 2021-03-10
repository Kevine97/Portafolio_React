import React from "react";
import author from "../asset/img/Perfil3.jpg";
const About = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
         <div className="photo-wrap">
         <img
            className="img-fluid sm-display-none profile-img-about"
            src={author}
            alt="Perfil"></img>
         </div>
        </div>
        <div className="col-lg-6 col-xm-12 heading-section ftco-animate">
          <h2 className="mb-4 mb-md-4 sobremi font-weight-bold">Sobre mí</h2>
          <p>Soy un joven apasionado por el desarrollo de software.</p>
          <ul className="about-info mt-4 px-md-0 px-2">
            <li className="d-flex">
              <span className="span">Nombre:</span>{" "}
              <span className="">Kevin Esquivel</span>
            </li>
            <li className="d-flex">
              <span className="span">Edad:</span> 
              <span className="" >23 años</span>
            </li>
            <li className="d-flex">
              <span className="span">Direccion:</span>{" "}
              <span className="">Managua, americas #2</span>
            </li>
            <li className="d-flex">
              <span className="span">Email:</span>{" "}
              <span>kevinesquivelrojas @hotmail.com </span>
            </li>
            <li className="d-flex">
              <span className="span">telefono: </span>{" "}
              <span className="">+505 8278-4374</span>
            </li>
          </ul>
          <div className="counter-wrap ftco-animate d-flex mt-md-3">
            <div className="text">
              <p>
                <a
                  href="./CV/CV Kevin Esquivel.pdf"
                  className="btn-main-cv  mt-4"
                  download
                >
                  Descargar CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
