import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterApo = () => {
  return (
    <div className="footerServiceContent">
      <h3>Apostille</h3>
      <ul>
        <li>
          <Link to={"/oman-apostille-attestation-bangalore"}>Oman</Link>
        </li>
        <li>
          <Link to={"/italy-apostille-attestation-bangalore"}>Italy</Link>
        </li>
        <li>
          <Link to={"/germany-apostille-attestation-bangalore"}>Germany</Link>
        </li>
        <li>
          <Link to={"/australia-apostille-attestation-bangalore"}>
            Australia
          </Link>
        </li>
        <li>
          <Link to={"/austria-apostille-attestation-bangalore"}>Austria</Link>
        </li>
        <li>
          <Link to={"/france-apostille-attestation-bangalore"}>France</Link>
        </li>
        <li>
          <Link to={"/lithuania-apostille-attestation-bangalore"}>
            Lithuania
          </Link>
        </li>
        <li>
          <Link to={"/mexico-apostille-attestation-bangalore"}>Mexico</Link>
        </li>
        <li>
          <Link to={"/netherland-apostille-attestation-bangalore"}>
            Netherlands
          </Link>
        </li>
        <li>
          <Link to={"/uk-apostille-attestation-bangalore"}>UK</Link>
        </li>
        <li>
          <Link to={"/usa-apostille-attestation-bangalore"}>USA</Link>
        </li>
        {/* <li>
          <Link to={"/sweden-apostille"}>Sweden</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default FooterApo;
