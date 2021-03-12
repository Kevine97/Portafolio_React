import React from "react";
import Netflix from "../asset/img/netflix.png";
import "react-popupbox/dist/react-popupbox.css";

// POPUPMANAGER
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portafolio = () => {
  const openNetlix = () => {
    window.open("https://github.com/Kevine97");
  };

  const openPupupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portafolio-image-popupbox"
          src={Netflix}
          alt="Proyecto Netflix"
        ></img>
        <p>lorem ipsum</p>
        <b>Github: </b>
        <a className="hyper-link" onClick={openNetlix}>
          https://github.com/Kevine97
        </a>
        <br />
        <b>Demo: </b>
        <a className="hyper-link" onClick={openNetlix}>
          https://github.com/Kevine97
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix proyecto xdxd",
    },
    fadeInUp: true,
    fadeInSpeed: 5,
  };

  return (
    <div className="portafolio-wrapper">
      <div className="container">
        <h1
          className="font-weight-bold text-uppercase text-center py-5 "
          style={{
            fontWeight: "700 !important",
            color: "#FFF",
            fontSize: "50px",
          }}
        >
          Portafolio
        </h1>

        <div className="image-box-wrapper row justify-content-center">
        <div className="portafolio-image-box" onClick={openPupupboxNetflix}>
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>

          {/** */}

          <div className="portafolio-image-box" onClick={openPupupboxNetflix}>
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>

          {/** */}

          <div className="portafolio-image-box" onClick={openPupupboxNetflix}>
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>

          <div className="portafolio-image-box">
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>

          <div className="portafolio-image-box">
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>
          <div className="portafolio-image-box">
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>
          <div className="portafolio-image-box">
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>
          <div className="portafolio-image-box">
            <img
              className="portafolio-image"
              src={Netflix}
              alt="Proyeccto Netflix"
            />
            <div className="overflow"></div>
            <i className="fa fa-search portafolio-icon" aria-hidden="true"></i>
          </div>
        </div>
        {/** */}
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
    </div>
  );
};

export default Portafolio;
