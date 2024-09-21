import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterEduCertif = () => {
  return (
    <div className="footerServiceContent">
      <h3>Educational Certificates</h3>
      <ul>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            UG, PG Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Diploma Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Engineering Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Management Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Hotel Management
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Medical Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>Law Degree</Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Technical Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>
            Professional Degree
          </Link>
        </li>
        <li>
          <Link to={"/degree-certificate-apostille-bangalore"}>PhD Degree</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterEduCertif;
