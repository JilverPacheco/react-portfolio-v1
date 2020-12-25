import React, { Fragment, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.styles.css";

export const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const backgroundNavbar = () => {
    if (window.scrollY > 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    backgroundNavbar();
  }, [navbar]);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("scroll", backgroundNavbar);
  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      <nav className={navbar ? "navbar-scrolled" : "navbar"}>
        <a className="logo" href="#">
          ◄ Jilver ►
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>

        <div className={click ? "nav-menu-active" : "nav-menu"}>
          <div className="menu">
            <a href="#acerca" onClick={closeMobileMenu} className="nav_link">
              Acerca
            </a>
            <a href="#educacion" onClick={closeMobileMenu} className="nav_link">
              Educación
            </a>
            <a
              href="#habilidades"
              onClick={closeMobileMenu}
              className="nav_link"
            >
              Habilidades
            </a>

            <a
              href="#experiencia"
              onClick={closeMobileMenu}
              className="nav_link"
            >
              Experiencia
            </a>
            <a href="#proyectos" onClick={closeMobileMenu} className="nav_link">
              Proyectos
            </a>
            <a href="#contacto" onClick={closeMobileMenu} className="nav_link">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
