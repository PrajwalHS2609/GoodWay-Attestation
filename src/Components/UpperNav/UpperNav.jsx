import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
const UpperNav = () => {
  const handleRedirect=()=>{
    window.location.href = "https://goodwayattestation.com/track-status"
  }
  return (
    <div className="upperNavContainer">
      <div className="respUpperNavContainer">
        <NavHashLink smooth to="/#footerContactContainer">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="respUpperMenuIcon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPhone}
            className="respUpperMenuIcon"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="respUpperMenuIcon"
          ></FontAwesomeIcon>
        </NavHashLink>
      </div>

      <ul>
        <li>
          <FontAwesomeIcon
            icon={faPhone}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="upperNavContact">
            <a href="tel:9148889666">+91 9148889666</a> ,{" "}
            <a href="tel:9148889444">+91 9148889444</a>
          </div>
        </li>
      </ul>
      <div className="upperLogo">
        <img
          src="https://sunriseattestation.com/wp-content/uploads/2024/01/sunrise-logo.png"
          alt="logo"
        />
      </div>
      <div className="upperNavContent">
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="respUpperMenuIcon"
            ></FontAwesomeIcon>
            <div className="upperNavContact">
              <a href="mailto:info@goodwayattestation.com">
                info@goodwayattestation.com
              </a>
            </div>
          </li>
          <li>
            <NavHashLink smooth to="/#footerContactContainer">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="respUpperMenuIcon"
              ></FontAwesomeIcon>
              <div className="upperNavContact">
                <a href="*">Bangalore </a>
              </div>
            </NavHashLink>
          </li>
        </ul>
      </div>
      <div className="menuTrack" onClick={handleRedirect}>
        <h3>Track Status</h3>
      </div>
    </div>
  );
};

export default UpperNav;
