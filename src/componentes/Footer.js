import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import {Link} from "react-scroll"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Managua - Nicaragua</p>
            </div>
            <div className="d-flex mt-2 mb-2">
              <a href="tel:555-555-555">(+505) 82784374</a>
            </div>
            <div className="d-flex mb-2">
              <p className="correo">Kevinesquivelrojas@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-100} className="footer-nav mb-3">Inicio</Link>
                <br />
                <Link smooth={true} to="about" offset={-100} className="footer-nav mb-3">Sobre mi</Link>
                <br />
                <Link smooth={true} to="services" offset={-80} className="footer-nav mb-3">Servicios</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experiencie" offset={-100} className="footer-nav mb-3">Experiencia</Link>
                <br />
                <Link smooth={true} to="portafolio" offset={-100} className="nav-link"  className="footer-nav mb-3">Portfolio</Link>
                <br />
                <Link smooth={true} to="contact" offset={-100} className="footer-nav mb-2">Contacto</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://kevinesquivel.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript_React"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://kevinesquivel.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript_React"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://kevinesquivel.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript_React"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://kevinesquivel.netlify.app/"}
                quote={"FullStack Developer"}
                hashtag="#javascript_React"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center mt-3">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Kevin Esquivel Rojas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
