import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterEduCertif = () => {
  return (
    <div className="footerServiceContent">
      <h3>Educational Certificates</h3>
      <ul>
        <li>
          <Link to={"/"}>UG, PG Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Diploma Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Engineering Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Management Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Hotel Management</Link>
        </li>
        <li>
          <Link to={"/"}>Medical Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Law Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Technical Degree</Link>
        </li>
        <li>
          <Link to={"/"}>Professional Degree</Link>
        </li>
        <li>
          <Link to={"/"}>PhD Degree</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterEduCertif;
