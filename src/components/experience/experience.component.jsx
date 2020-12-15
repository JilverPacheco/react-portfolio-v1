import React, { Fragment } from "react";
import "./experience.styles.css";
import EXPERIENCE_1 from "../../assets/img/dyco.svg";
export const Experience = () => {
  return (
    <Fragment>
      <section className="experience" id="experiencia">
        <div className="experience-wrapper">
          <h2 className="title">Experiencia</h2>
          <div className="experience-content">
            <div className="card-experience">
              <img className="logo-company" src={EXPERIENCE_1} alt="Dyco" />
              <hr />
              <div className="experience-role">
                <p>
                  <strong>Rol: </strong>Análista de desarrollo Full Stack
                </p>
                <p>
                  <strong>Empresa: </strong>DyCO Solutions
                </p>
                <p>
                  <strong>Duración: </strong>Jul 2020 - Nov 2020
                </p>
                <p>
                  <strong>Ubicación: </strong>Bucaramanga, Santander
                </p>
                <p>
                  <strong>Descripción: </strong>
                  Desarollo de plataforma online que simula de manager personal
                  para los artistas que se encuentren alojados en su base de
                  datos.
                </p>
                <p>
                  <strong>Tecnológias: </strong>React.Js, SASS, Firebase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
