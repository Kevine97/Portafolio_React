import React from "react";

const Services = () => {


    const click = (e)=> {
        e.preventDefault();
    }

  return (
    <section className="ftco-section clases ">
      <div className="container-fluid px-md-5 color">
        <div className="row justify-content-center py-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Servicios</h1>
            <h2 className="mb-4">Servicios</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fas fa-palette"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Design</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fas fa-laptop-code"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developer</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fab fa-react"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Front-End</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>

          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fas fa-mobile-alt"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">App Developing</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fab fa-node-js"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Backend</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-8 text-center d-flex ftco-animate mx-auto">
            <a href="/#" className="services-1 shadow box" onClick={click}>
              <span className="icon">
              <i className="fab fa-aws"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Cloud</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
