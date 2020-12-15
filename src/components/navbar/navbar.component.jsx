import React, { Fragment, useState } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import "./navbar.styles.css";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  //   const handleCLick = () => {
  //     setClick(!click);
  //   };

  //   const closeMobileMenu = () => {
  //     setClick(false);
  //   };

  // const showMobileButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  const changeNavBg = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };

  // useEffect(() => {
  //   showMobileButton();
  // }, []);

  // window.addEventListener("resize", showMobileButton);
  window.addEventListener("scroll", changeNavBg);

  return (
    <Fragment>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="nav-content">
          <div className="logo">
            <a href="#inicio">
              <FiChevronsLeft />
              Jilver
              <FiChevronsRight />
            </a>
          </div>
          <ul className="menu-items">
            <li className="nav-items">
              <a href="#acerca">Acerca</a>
            </li>
            <li className="nav-items">
              <a href="#educacion">Educación</a>
            </li>

            <li className="nav-items">
              <a href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-items">
              <a href="#experiencia">Experiencia</a>
            </li>
            <li className="nav-items">
              <a href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-items">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
