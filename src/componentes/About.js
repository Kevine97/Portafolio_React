import React from "react";
import aboutIMG from "./About.svg";

  const About = ({ fechaNacimiento, setfechaNacimiento }) => {
  const cv = () => {
    window.open("./CV/CV Kevin Esquivel Rojas.pdf");
  };

  return (
    <div className="container py-5 mb-5" id="about">
      <div className="row d-flex justify-content-center align-items-center">
        <div data-aos="fade-right"  className="col-lg-5 col-xm-12 mt-3">
          <div className="photo-wrap">
            <img
              id="imagen-About"
              className="img-fluid sm-display-none profile-img-about"
              src={aboutIMG}
              alt="Perfil"
            ></img>
          </div>
        </div>
        <div data-aos="flip-left" className="col-lg-7 col-xm-12 col-md-12 heading-section ftco-animate">
          <h2  className="sobremi font-weight-bold colorTexto text-center text-uppercase">
            Sobre mí
          </h2>
          <div  className="line-mf mb-4 mb-md-4"></div>
          <div className="count-box">
            <p data-aos="fade-right" className="about-text font-about mb-5">
              Soy un joven autodidacta y con gran pasión por el desarrollo de
              software. Soy capaz de adaptarme a cualquier circunstancia y dar
              siempre lo mejor de mí en cualquier proyecto.
            </p>
            <ul className="about-info mt-4 px-md-0 px-2">
              <li data-aos="fade-right" className="d-flex">
                <span className="span">
                  <i className="fas fa-angle-right mr-2"></i>Nombre:
                </span>{" "}
                <span className="">Kevin Esquivel</span>
              </li>
              <li data-aos="fade-right" className="d-flex">
                <span className="span">
                  <i className="fas fa-angle-right mr-2"></i>Edad:
                </span>
                <span className="">{fechaNacimiento}</span>
              </li>
              <li data-aos="fade-right" className="d-flex">
                <span className="span">
                  <i className="fas fa-angle-right mr-2"></i>Direccion:
                </span>{" "}
                <span className="">Managua, americas #2</span>
              </li>
              <li data-aos="fade-right" className="d-flex">
                <span className="span">
                  <i className="fas fa-angle-right mr-2"></i>Email:
                </span>{" "}
                <span>kevinesquivelrojas @hotmail.com </span>
              </li>
              <li data-aos="fade-right" className="d-flex">
                <span className="span">
                  <i className="fas fa-angle-right mr-2"></i>Telefono:{" "}
                </span>{" "}
                <span className="">+505 8278-4374</span>
              </li>
            </ul>
            <div data-aos="fade-right" className=" mt-4">
              <a onClick={cv} className="btn-main-cv">
                Descargar CV
              </a>
            </div>
          </div>

          <div className="counter-wrap ftco-animate d-flex mt-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
