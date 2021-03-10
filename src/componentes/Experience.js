import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-4">
        <h1>Experiencia</h1>
        
      </div>
      <p className="text-center" style={{ marginBottom: "90px" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              Taller de programación avanzada en Java impartido en la Universidad Politécnica de Nicaragua. 
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
            Taller de desarrollo web con Asp.Net MVC 5, impartido en la Universidad Politécnica de Nicaragua. 
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              Jr Software developer en la empresa Ingemann Nicaragua. Desarrollando nuevas funcionalidades en el backend y frontend en la plataforma web.agroclimatica.com, asi como desarrollar aplicaciones web y moviles nativas para android y IOS utilzando el framework React Native y React. 
            </p>
          </div>
        </div>
     
      
      </div>
    </div>
  );
};

export default Experience;
