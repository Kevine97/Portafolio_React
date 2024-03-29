import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_wHqmBAtCuFb1lcEVy084N";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID).then(
      (result) => {
        if (result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Contacto",
            text: "Se ha enviado su solicitud al administrador de la pagina",
          });
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contacts" id="contact">
      <div data-aos="flip-left">
      <h1 className="sobremi font-weight-bold colorTexto text-center text-uppercase">
        Contacto
      </h1>  
        <p className="text-center text-p-titulo">
          Pongase en contacto conmigo llenando los siguientes campos
        </p>
        <div className="line-mf" style={{ marginBottom: "40px" }}></div>
      </div>

      <div data-aos="flip-down" className="container">
        <div className="count-box-contacto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div  className="row">
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <input
                    className="form-control"
                    placeholder="Asunto"
                    name="subject"
                    type="text"
                    id="asunto"
                    autoComplete="off"
                    ref={register({
                      required: "Ingrese un asunto",
                    })}
                  />

                  <div className="line"></div>
                </div>
                <span className="error-message mb-5 text-white">
                  {errors.subject && errors.subject.message}
                </span>
                {/* NAME INPUES */}
                <div className="text-center">
                  <input
                    className="form-control"
                    placeholder="Nombre y Apellido"
                    name="name"
                    type="text"
                    id="nombre"
                    autoComplete="off"
                    ref={register({
                      required: "Ingrese un nombre y/o apellido",
                      maxLength: {
                        value: 20,
                        message: "Escriba menos de 20 caracteres",
                      },
                    })}
                  />
                  <div className="lineBoton"></div>
                </div>
                <span className="error-message mb-2 text-white">
                  {errors.name && errors.name.message}
                </span>
                {/* NAME INPUES */}
                <div className="text-center">
                  <input
                    className="form-control"
                    placeholder="Telefono"
                    name="phone"
                    type="number"
                    id="phone"
                    autoComplete="off"
                    ref={register({
                      required: "Ingese un numero de telefono",
                      maxLength: {
                        value: 8,
                        message: "Escriba menos de 8 caracteres",
                      },
                    })}
                  />

                  <div className="line"></div>
                </div>
                <span className="error-message mb-2 text-white">
                  {errors.phone && errors.phone.message}
                </span>
                {/* NAME INPUES */}
                <div className="text-center">
                  <input
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="off"
                    ref={register({
                      required: "Ingrese un email",
                      maxLength: {
                        value: 50,
                        message: "Escriba menos de 50 caracteres",
                      },
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message mb-2 text-white">
                  {errors.email && errors.email.message}
                </span>
              </div>

              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <textarea
                    className="form-control"
                    placeholder="Descripcion"
                    name="description"
                    type="text"
                    id="descripcion"
                    ref={register({
                      required: "Ingrese una descripcion",
                      minLength: {
                        value: 10,
                        message: "Escriba mas de 10 caracteres",
                      },
                    })}
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message mb-2 text-white">
                  {errors.description && errors.description.message}
                </span>
                <button type="submit" className="mt-2 btn btn-primary boton">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
