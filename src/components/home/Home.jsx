import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import "./home.styles.css";

export const Home = () => {
  return (
    <Fragment>
      <div className="banner" id="inicio">
        <div className="banner-content">
          <div className="text-1">Hola, soy</div>
          <div className="text-2">Jilver Pacheco Rivera</div>
          <div className="text-3">
            Soy:&nbsp;
            <span className="text-3-content">
              <Typewriter
                options={{
                  strings: [
                    "Estudiante de ingeniería electrónica",
                    "Web Full stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
