import React, { Fragment } from "react";
import Slide from "react-reveal/Slide";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./contact.styles.css";
export const Contact = () => {
  return (
    <Fragment>
      <section className="contact" id="contacto">
        <Slide>
          <div className="contact-wrapper">
            <h2 className="title">Contacto</h2>

            <div className="social-networks">
              <a
                className="facebook-group"
                href="https://www.facebook.com/JilverPRivera/"
              >
                <FaFacebook className="facebook-btn" />
                &nbsp;Facebook
              </a>
              <a className="gmail-group" href="mailto:jilverrivera1@email.com">
                <SiGmail className="gmail-btn" />
                &nbsp;Gmail
              </a>
              <a
                className="instagram-group"
                href="https://www.instagram.com/jilver.rivera/"
              >
                <FaInstagram className="instagram-btn" />
                &nbsp; Instagram
              </a>
              <a
                className="twitter-group"
                href="https://twitter.com/Jilverrivera"
              >
                <FaTwitter className="twitter-btn" />
                &nbsp;Twitter
              </a>
            </div>
            <a
              className="link-whatsapp"
              href="https://api.whatsapp.com/send?phone=573023662678&text=hola,%20me%20gustaría%20charlar%20contigo."
            >
              <div className="btn-whatsapp">
                <FaWhatsapp />
              </div>
            </a>
          </div>
        </Slide>
      </section>
    </Fragment>
  );
};

// export default Contact;
