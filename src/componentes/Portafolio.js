import React from "react";
import "react-popupbox/dist/react-popupbox.css";

// POPUPMANAGER
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portafolio = () => {
  

  const imgCarritoCompra = 'https://i.ibb.co/v4r6gPg/Captura-de-pantalla-2021-03-13-195352.png'
  const imgTrabajo = 'https://i.ibb.co/bgVCRFR/Compu-Trabajo.png'
  const imgClima = 'https://i.ibb.co/nzQcDrx/Clima.png'
  const imgAgenciaVijae = 'https://i.ibb.co/0nTzvcb/Agencia.png'
  const imgAgendacita = 'https://i.ibb.co/M6Bq91X/agendacita.png'
  const imgClimatica = 'https://i.ibb.co/6HDvcqr/Climatica.png'


  const github = ()=>{
    window.open("https://github.com/Kevine97", "_blank")
  }

  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgCarritoCompra} alt="Proyecto carrito de compra" />
        <p className="portafolio-p mt-2">Proyecto carrito de compra en Js</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://carritojscompra.netlify.app/", "_blank")}>https://carritojscompra.netlify.app</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Carrito de compra'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  const compuTrabajo = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgTrabajo} alt="Proyecto carrito de compra" />
        <p className="portafolio-p mt-2">Proyecto Github jobs en Js consumiendo API de GitHub Jobs</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://buscatrabajo.netlify.app", "_blank")}>https://buscatrabajo.netlify.app</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Github Jobs'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  const ClimaJS = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgClima} alt="Proyecto carrito de compra" />
        <p className="portafolio-p mt-2">Proyecto clima en Js consumiendo API de tercero</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://climajs.netlify.app", "_blank")}>https://climajs.netlify.app</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Clima Js'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  const AgenciaViaje = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgAgenciaVijae} alt="Proyecto agenciaVijae" />
        <div className="mt-2">
        <span className="portafolio-p">Proyecto agencia de viaje desarrollado en Node.js.</span>
        <br />
        <span className="portafolio-p">Tecnologías: Express, Mysql, Bootstrap y pug</span>
        </div>
        
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://agenciasviajes.herokuapp.com/", "_blank")}>https://agenciasviajes.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Agencia de viaje'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }


  const AgendaCita = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgAgendacita} alt="Proyecto agenciaVijae" />
        <div className="mt-2">
        <span className="portafolio-p">Proyecto agenda de citas para una veterinaria</span>
        <br />
        <span className="portafolio-p">STACK MERN</span>
        </div>
        
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://agendacita.netlify.app/", "_blank")}>https://agendacita.netlify.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Agencia de citas'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  const Agroclimatica = () => {
    const content = (
      <>
        <img className="portafolio-image-popupbox" src={imgClimatica} alt="Proyecto agenciaVijae" />
        <div className="mt-2">
        <span className="portafolio-p">Proyecto de servicios climaticos geoposicionamiento</span>
        <br />
        <span className="portafolio-p">ASP.net MVC, Js, Jquery, Bootstrap 4, leaflet entre otras...</span>
        </div>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={github}>https://github.com/Kevine97</a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Climatica'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }



  return (
    <section className="ftco-section ftco-project" id="portafolio">
    <div className="container-fluid px-md-0">
      <div className="row no-gutters justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <h1 className="big big-2">Projects</h1>
          <h2 className="mb-4 text-uppercase colorTexto">Portafolio</h2>
          <p>Preyectos que he desarrollo como practica y en el mundo laboral</p>
        </div>
      </div>
      <div className="row no-gutters">

        <div className="col-md-4 " >
          <div onClick={openPopupboxTaskManager} className="project img ftco-animate d-flex justify-content-center align-items-center portfolio-image-box" style={{backgroundImage: `url(${imgCarritoCompra})`}} >
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Proyeccto carrito de compra</a></h3>
              <span>Web Design</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div onClick={compuTrabajo} className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${imgTrabajo})`}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Github jobs (Buscador de trabajo)</a></h3>
              <span>Web Design</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div onClick={ClimaJS} className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${imgClima})`}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Proyeccto clima en Js</a></h3>
              <span>Frontend development</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div onClick={AgenciaViaje} className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${imgAgenciaVijae})`}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Proyeccto agencia de viaje desarrollado en Node.js (Express), Mysql, Bootstrap y pug </a></h3>
              <span>Full Stack development</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div onClick={AgendaCita} className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${imgAgendacita})`}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Proyeccto agenda de citas para una veterinaria desarrollo con el stack MERN </a></h3>
              <span>Full Stack development</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div onClick={Agroclimatica} className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${imgClimatica})`}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3><a>Proyecto de geoposicionamiento climaticos multi pais</a></h3>
              <span>Full Stack development</span>
            </div>
          </div>
        </div>
        
        <PopupboxContainer />
      </div>
    </div>
  </section>
  );
};

export default Portafolio;
