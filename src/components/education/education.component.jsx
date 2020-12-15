import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";
import {
  FaUniversity,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaPhp,
  FaJsSquare,
  FaSchool
  
} from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./education.styles.css";

export const Education = () => {
  return (
    <Fragment>
      <section className="education" id="educacion">
        <Slide bottom duration={750}>
          <div className="education-wrapper">
            <h2 className="title">Educación</h2>
            <div className="education-content">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2016"
                  iconStyle={{ background: "#333", color: "#fff" }}
                  icon={<FaSchool />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachiller académico
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Floridablanca, Santander
                  </h4>
                  <p>Instituto Madre del Buen Consejo</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2017 - Presente"
                  iconStyle={{ background: "#333", color: "#fff" }}
                  icon={<FaUniversity />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Ingeniero electrónico
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Bucaramanga, Santander
                  </h4>
                  <p>Universidad de Investigación y Desarrollo - UDI</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2019"
                  iconStyle={{ background: "#EFD81D", color: "#fff" }}
                  icon={<FaJsSquare />}
                >
                  <h3 className="vertical-timeline-element-title">
                    HTML5, CSS3, Javascript, AJAX, PHP y MySQL
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2020"
                  iconStyle={{ background: "#8CBE3F", color: "#fff" }}
                  icon={<FaNodeJs />}
                >
                  <h3 className="vertical-timeline-element-title">Node.Js</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2020"
                  iconStyle={{ background: "#60D3F3", color: "#fff" }}
                  icon={<FaReact />}
                >
                  <h3 className="vertical-timeline-element-title">
                    React.Js (Hooks, MERN, Unit Testing)
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2020"
                  iconStyle={{ background: "#2D2D2D", color: "#FFF" }}
                  icon={<SiNextDotJs />}
                >
                  <h3 className="vertical-timeline-element-title">
                    React.Js (Hooks, Context, Redux, MERN), Next.Js y Gatsby
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2021"
                  iconStyle={{ background: "#7377AD", color: "#fff" }}
                  icon={<FaPhp />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Php (Laravel y Symfony), Wordpress, SQL y MySQL
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#333",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #333",
                  }}
                  date="2021"
                  iconStyle={{ background: "#D6002F", color: "#fff" }}
                  icon={<FaAngular />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Angular 10+
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certificación virtual
                  </h4>
                  <p>UDEMY</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
              {/* <Timeline className="education-timeline">
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
