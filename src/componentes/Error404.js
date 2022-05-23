import React from "react";
import { Link } from "react-router-dom";
import error404 from "./Error404.svg";
const Error404 = () => {
  return (
    <>
       <div className="page-wrap d-flex flex-row align-items-center mx-auto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img className="img-fluid mb-5" src={error404} alt="imagen 404" width='600' height='600'></img>
          </div>
          <div className="mt-4">
            <Link to="/" className="btn-main-cv py-3 boton">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Error404;
