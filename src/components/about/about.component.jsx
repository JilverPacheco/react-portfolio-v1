import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import "./about.styles.css";
import PROFILE from "../../assets/img/profile.jpeg";
export const About = () => {
  return (
    <Fragment>
      <section className="about" id="acerca">
        <Fade duration={500}>
          <div className="about-wrapper">
            <h2 className="title">Acerca</h2>
            <div className="about-content">
              <div className="column-left">
                <img src={PROFILE} />
              </div>
              <div className="column-right">
                Hola, soy <span>Jilver Pacheco Rivera</span>.
                <br />
                Soy desarrollador web JavaScript con conocimientos en el ámbito
                front-end y back-end. Tengo conocimiento en React.JS, Node.JS,
                Electron.JS, Redux y el stack MERN. Tengo conocimientos
                intermedios en Angular.JS, Next.JS, Gatsby, Jest, jQuery, AJAX y
                Php.
                <br />
                También soy estudiante de ingeniería electrónica de noveno
                semestre, he realizado proyectos con énfasis industrial, he
                representado a mi universidad junto a compañeros de carrera en
                concursos de robótica tanto nacional como internacionalmente,
                tengo conocimientos intermedios en automatización,
                instrumentación y robótica lo cual me permite estar
                constantemente a la vanguardia con temas referidos a este campo.
                <br />
                Me gusta jugar voleibol, hacer ejercicio, ver series en Netflix,
                escuchar musica, salir a caminar y explorar lugares nuevos,
                meditar, esto me permite mantener mi mente fresca en un entorno
                laboral.
                <br />
                <br />
                <br />
                <div>
                  <a className="cv" href="#">
                    Curriculum vitae
                  </a>
                  <a className="cv-lac" href="#">
                    CvLAC
                  </a>
                  <a className="cv-lac" href="#">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </Fragment>
  );
};
