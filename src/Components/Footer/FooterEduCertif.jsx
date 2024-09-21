import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterEduCertif = () => {
  return (
    <div className="footerServiceContent">
      <h3>Educational Certificates</h3>
      <ul>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            UG, PG Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Diploma Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Engineering Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Management Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Hotel Management
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Medical Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Law Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Technical Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            Professional Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-attestation-bangalore"}>
            PhD Degree
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterEduCertif;
