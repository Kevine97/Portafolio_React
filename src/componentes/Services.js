import React from "react";


const Services = () => {


  const click = (e) => {
    e.preventDefault();
  };

  return (
    <section className="ftco-section clases " id="services">
      <div className="container-fluid px-md-5 color">
        <div className="row justify-content-center py-5">
          <div data-aos="flip-left" className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Servicios</h1>
            <h2 className="text-uppercase colorTexto fuente-titulo">
              Servicios
            </h2>
            <p className="text-p-titulo">
              Los diferentes servicios que ofrezco
            </p>
            <div className="line-mf" style={{ marginBottom: "40px" }}></div>
          </div>
        </div>
        <div className="row ">
          <div data-aos="fade-right" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated animate__animated" >
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fas fa-palette"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Design</h3>
                <p>Diseños de sitios web (UI/UX)</p>
              </div>
            </a>
          </div>
          <div data-aos="fade-up" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated animate__animated">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fas fa-laptop-code"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
                <p>Desarrollo de sitios web a la medida</p>
              </div>
            </a>
          </div>
          <div data-aos="fade-right" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated animate__animated">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fab fa-react"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Front-End</h3>
                <p>
                  Desarrollo de sitios web del lado del cliente utilizando la
                  libreria React
                </p>
              </div>
            </a>
          </div>

          <div data-aos="fade-right" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated animate__animated">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fas fa-mobile-alt"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">App Developing</h3>
                <p>
                  Creacion de App para android y IOS manejando React Native.
                </p>
              </div>
            </a>
          </div>
          <div data-aos="fade-up" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated animate__animated">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fab fa-node-js"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Backend</h3>
                <p>Implementacion de API REST con Node.js y/o ASP.NET Core</p>
              </div>
            </a>
          </div>
          <div data-aos="fade-right" className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto services-animated">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
                <i className="fab fa-aws"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Cloud</h3>
                <p>Tecnologia en la nube como AWS y AZURE</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
