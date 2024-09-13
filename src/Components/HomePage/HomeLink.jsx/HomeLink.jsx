import React from "react";
import "./HomeLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const HomeLink = () => {
  return (
    <div className="homeLinkContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faPhone}
            className="menuIcon1"
          ></FontAwesomeIcon>
          <div className="upperNavContact">
            <a href="tel:9148889666">+91 9148889666</a> ,{" "}
            <a href="tel:9148889444">+91 9148889444</a>
          </div>
        </li>
        <li>
        <FontAwesomeIcon
            icon={faWhatsapp}
            className="menuIcon2"
          ></FontAwesomeIcon>
          <div className="upperNavContact">
            <a href="https://api.whatsapp.com/send?phone=919148889666">+91 9148889666</a> ,{" "}
            <a href="https://api.whatsapp.com/send?phone=919148889444">+91 9148889444</a>
          </div>
        </li>
        <li>
        <FontAwesomeIcon
            icon={faLocationDot}
            className="menuIcon1"
          ></FontAwesomeIcon>
          <div className="upperNavContact">
            <a href="https://maps.app.goo.gl/NCLzs7sdHPtjJkh59">Bangalore</a> {" "}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeLink;
