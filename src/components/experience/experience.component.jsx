import React, { Fragment } from "react";
import { ExperienceData } from "./experience-data";
import "./experience.styles.css";

export const Experience = () => {
  return (
    <Fragment>
      <section className="experience" id="experiencia">
        <div className="experience-wrapper">
          <h2 className="title">Experiencia</h2>
          <div className="experience-content">
            {ExperienceData.map((exp, index) => (
              <div className="card-experience">
                <span className="skill__card" key={index}></span>
                <img className="logo-company" src={exp.imgCompany} alt="Dyco" />
                <hr />
                <div className="experience-role">
                  <p>
                    <strong>Rol: </strong>
                    {exp.role}
                  </p>
                  <p>
                    <strong>Empresa: </strong>
                    {exp.company}
                  </p>
                  <p>
                    <strong>Duración: </strong>
                    {exp.duration}
                  </p>
                  <p>
                    <strong>Ubicación: </strong>
                    {exp.ubication}
                  </p>
                  <p>
                    <strong>Descripción: </strong>
                    {exp.description}
                  </p>
                  <p>
                    <strong>Tecnológias: </strong>
                    {exp.technologies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
