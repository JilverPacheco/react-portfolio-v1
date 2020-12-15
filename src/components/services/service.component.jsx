import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./service.styles.css";
import { FaCogs, FaPencilRuler, FaCode } from "react-icons/fa";
export const Services = () => {
  return (
    <Fragment>
      <section className="services" id="servicios">
        <Slide bottom duration={1000}>
          <div className="service-wrapper">
            <h2 className="title">Servicios</h2>
            <div className="service-content">
              {/* <Fade bottom duration={1000}> */}
                <div className="service-list">
                  <FaCogs />
                  <h2>Ingeniería</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, veniam veritatis dolor quasi cum ex, accusamus
                  voluptatem possimus porro repellendus, minus in ipsam sed odit
                  explicabo nobis aliquid obcaecati cupiditate? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Praesentium,
                  veniam veritatis dolor quasi cum ex, accusamus voluptatem
                  possimus porro repellendus, minus in ipsam sed odit explicabo
                  nobis aliquid obcaecati cupiditate?
                </div>

                <div className="service-list">
                  <FaPencilRuler />
                  <h2>Diseño CAD</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, veniam veritatis dolor quasi cum ex, accusamus
                  voluptatem possimus porro repellendus, minus in ipsam sed odit
                  explicabo nobis aliquid obcaecati cupiditate? explicabo nobis
                  aliquid obcaecati cupiditate? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Praesentium, veniam veritatis
                  dolor quasi cum ex, accusamus voluptatem possimus porro
                  repellendus, minus in ipsam sed odit explicabo nobis aliquid
                  obcaecati cupiditate? explicabo nobis aliquid obcaecati
                  cupiditate?
                </div>

                <div className="service-list">
                  <FaCode />
                  <h2>Diseño Web</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, veniam veritatis dolor quasi cum ex, accusamus
                  voluptatem possimus porro repellendus, minus in ipsam sed odit
                  explicabo nobis aliquid obcaecati cupiditate? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Praesentium,
                  veniam veritatis dolor quasi cum ex, accusamus voluptatem
                  possimus porro repellendus, minus in ipsam sed odit explicabo
                  nobis aliquid obcaecati cupiditate?
                </div>
              {/* </Fade> */}
            </div>
          </div>
        </Slide>
      </section>
    </Fragment>
  );
};
