import React from "react";

const Experience = () => {
  return (
    <div className="experience" id="experiencie">
      <div data-aos="flip-left">
        <div className="d-flex justify-content-center my-4">
          <h1 className="text-uppercase colorTexto">Experiencia</h1>
        </div>
        <p className="text-center text-p-titulo">
          Experiencia profesional en este maravilloso mundo del desarrollo
        </p>
        <div className="line-mf" style={{ marginBottom: "90px" }}></div>
      </div>
      <div className="container experience-wrapper">
        <div
          data-aos="flip-left"
          className="timeline-block timeline-block-right"
        >
          <div className="marker"></div>
          <div className="timeline-content">
            <div className="">
              <h3>2019-2020</h3>
            </div>
            <li className="count-box-experience mt-3">
              Taller de programación avanzada en Java impartido en la
              Universidad Politécnica de Nicaragua.
            </li>
          </div>
        </div>
        {/* - */}
        <div
         data-aos="flip-left"
          className="timeline-block timeline-block-left"
        >
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019 - 2020</h3>
            <li className="count-box-experience mt-3">
              Taller de desarrollo web con Asp.Net MVC 5, impartido en la
              Universidad Politécnica de Nicaragua.
            </li>
          </div>
        </div>
        {/* - */}
        <div
         data-aos="flip-left"
          className="timeline-block timeline-block-right"
        >
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <li className="count-box-experience mt-3">
              Jr Software developer en la empresa Ingemann Nicaragua.
              Desarrollando nuevas funcionalidades en el backend y frontend en
              la plataforma web.agroclimatica.com, asi como desarrollar
              aplicaciones web y moviles nativas para android y IOS utilzando el
              framework React Native y React.
            </li>
          </div>
        </div>
        {/* */}

        <div
          data-aos="flip-left"
          className="timeline-block timeline-block-left"
        >
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - Actualmente</h3>
            <li className="count-box-experience mt-3">
              FrontEnd Developer en la empresa costarricense iDoAgency
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
