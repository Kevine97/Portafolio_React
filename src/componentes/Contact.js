import React from "react";

const Contact = () => {
  return (
    <div className="contacts bg-dark">
      <h1 className="text-center text-uppercase colorTexto">Contacto</h1>
      <p className="text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUES */}
            <div className="text-center">
            <input
              className="form-control"
              placeholder="Nombre y Apellido"
              name="nombre"
              type="text"
              id="nombre"
              autoComplete="off"
            />
            <div className="line"></div>
            </div>
            {/* NAME INPUES */}
            <div className="text-center">
            <input
              className="form-control"
              placeholder="Telefono"
              phone="phone"
              type="text"
              id="phone"
              autoComplete="off"
            />
            
            <div className="lineBoton"></div>
            </div>
            {/* NAME INPUES */}
            <div className="text-center">
            <input
              className="form-control"
              placeholder="Email"
              email="email"
              type="email"
              id="email"
              autoComplete="off"
            />
            <div className="line"></div>
            </div>
          </div>

          <div className="col-md-6 col-xs-12">
          <div className="text-center">
            <textarea
              className="form-control"
              placeholder="Descripcion"
              email="descripcion"
              type="text"
              id="descripcion"
            ></textarea>
            <div className="line"></div>
            </div>
            <button type="submit" className="mt-2 btn btn-primary boton">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
