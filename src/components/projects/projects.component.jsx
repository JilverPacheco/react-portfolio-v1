import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";
// import { Timeline, UrlButton, ImageEvent, Events } from "@merc/react-timeline";
import { FaUsersCog } from "react-icons/fa";
import { SiElectron } from "react-icons/si";
import { GiRobotGrab } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// Images
import P_ELECTRO_UDI from "../../assets/img/projects/ELECTRO_UDI.png";
import P_ROBOT_ANTROPOMORFICO from "../../assets/img/projects/ROBOT_ANTROPOMORFICO.png";
import P_SCADA_LABVIEW_CERVEZA from "../../assets/img/projects/SCADA_Labview_Cerveza.png";

import "./projects.styles.css";

export const Projects = () => {
  return (
    <Fragment>
      <section className="projects" id="proyectos">
        <Slide bottom duration={1000}>
          <div className="projects-wrapper">
            <h2 className="title">Proyectos</h2>

            {/* <h3 className="sub-title">React</h3>
            <h3 className="sub-title">React Native</h3>
            <h3 className="sub-title">Ingeniería</h3> */}
            <div className="projects-content">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #333",
                  }}
                  date="Oct / 2020"
                  iconStyle={{ background: "#D3291A", color: "#fff" }}
                  icon={<GiRobotGrab />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Brazo robótico antropomórfico
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Tecnológias: SolidWorks
                  </h5>
                  {/* <h4 className="vertical-timeline-element-subtitle">
                    SolidWoks
                  </h4> */}
                  <img
                    className="image-event"
                    src={P_ROBOT_ANTROPOMORFICO}
                    alt="..."
                  />
                  <p>
                    Creación de un brazos robótico tipo antropomórfico con su
                    respectiva documentación.
                  </p>
                  {/* <p>Tecnologia utilizada</p>
                  <ul>
                    <li>Solidworks</li>
                  </ul> */}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #333",
                  }}
                  date="Nov / 2020"
                  iconStyle={{ background: "#2F3241", color: "#FFF" }}
                  icon={<SiElectron />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Electró-TECH
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Tecnológias: Javascript, Node.Js, Electron.Js, SASS
                  </h5>
                  {/* <h4 className="vertical-timeline-element-subtitle">
                    Javascript, Node.Js, Electron.Js, SASS
                  </h4> */}
                  <img className="image-event" src={P_ELECTRO_UDI} alt="..." />
                  <p>
                    Aplicación multiplataforma en la que los estudiantes de
                    ingeniería electrónica pueden encontrar diferentes cursos
                    académicos y proyectos realizados.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #333",
                  }}
                  date="2008 - 2010"
                  iconStyle={{ background: "#F5DA00", color: "#fff" }}
                  icon={<FaUsersCog />}
                >
                  <h3 className="vertical-timeline-element-title">
                    SCADA para la producción de cerveza
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Tecnológias: LabVIEW
                  </h5>
                  <img
                    className="image-event"
                    src={P_SCADA_LABVIEW_CERVEZA}
                    alt="..."
                  />

                  <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
              {/* <Timeline className="projects-timeline">
                <Events className="projects-events">
                  <ImageEvent className='projects-image-event'
                    date="15/10/2020"
                    text="Brazos robótico antropomórfico"
                    src={P_ROBOT_ANTROPOMORFICO}
                    alt="Brazo robótico"
                  >
                    <hr />
                    <p>
                      <strong>Descripción: </strong>Creación brazos robóticos
                      tipo antropomórfico y SCARA con su respectiva
                      documentación.
                    </p>
                    <hr />
                    <p>
                      <strong>Características: </strong>Uso de medidas a escala
                      para impresión en 3D.
                    </p>
                    <hr />
                    <div>
                      <UrlButton href="https://unsplash.com/search/photos/undersea">
                        View more undersea photos
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="15/10/2020"
                    text="Brazos robótico antropomórfico"
                    src={P_ELECTRO_UDI}
                    alt="Brazo robótico"
                  >
                    <hr />
                    <p>
                      <strong>Descripción:</strong> Aplicación en la que los
                      estudiantes de la carrera de ingeniería electrónica de la
                      Universidad de Investigación y Desarrollo pueden navegar
                      entre diferentes cursos académicos y encontrar información
                      acerca de cartillas y proyectos realizados.
                    </p>
                    <hr />
                    <p>
                      <strong>Características:</strong>
                      Uso de Node.Js para crear el entorno de Electron,
                      navegación integrada dentro de la aplicación si hay
                      conexión a internet.
                    </p>
                    <div>
                      <UrlButton href="https://unsplash.com/search/photos/undersea">
                        View more undersea photos
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="15/10/2020"
                    text="Brazos robótico antropomórfico"
                    src={P_SCADA_LABVIEW_CERVEZA}
                    alt="Brazo robótico"
                  >
                    <div>
                      <UrlButton href="https://unsplash.com/search/photos/undersea">
                        View more undersea photos
                      </UrlButton>
                    </div>
                  </ImageEvent>
                </Events>
              </Timeline> */}
            </div>
          </div>
        </Slide>
      </section>
    </Fragment>
  );
};
