import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterContact = () => {
  return (
    <div className="footerContactContainer" id="footerContactContainer">
      <div className="footContactContent">
        <img
          src="https://goodwayattestation.com/images/images-logo.png"
          alt=""
        />
      </div>
      <div className="footContactContent">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="footerIconCon"
            ></FontAwesomeIcon>
            <p>
              #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
              Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              className="footerIconCon"
            ></FontAwesomeIcon>
            <p>
              <a href="tel:9148889666">+91 9148889666</a> ,<br />
              <a href="tel:9148889444">+91 9148889444</a>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footerIconCon"
            ></FontAwesomeIcon>
            <p>
              <a href="mailto:info@goodwayattestation.com">
                info@goodwayattestation.com
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="footerSocial">
        <ul>
          <li>
            <a href="https://www.instagram.com/goodwayattestation.india/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/goodwayattestation">
              <FontAwesomeIcon
                icon={faFacebook}
                className="footerIcon"
                id="footerIcon1"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Goodway_India">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/goodway-attestation/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footerIcon"
                id="footerIcon1"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
