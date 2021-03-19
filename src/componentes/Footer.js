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

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Managua - Nicaragua</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">(+505) 82784374</a>
            </div>
            <div className="d-flex">
              <p>Kevinesquivelrojas@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Inicio</a>
                <br />
                <a className="footer-nav">Sobre mi</a>
                <br />
                <a className="footer-nav">Servicios</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experiencia</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacto</a>
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
            <p className="pt-3 text-center">
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
