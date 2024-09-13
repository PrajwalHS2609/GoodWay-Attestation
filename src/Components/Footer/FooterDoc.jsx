import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterDoc = () => {
  return (
    <div className="footerServiceContent">
      <h3>Documents</h3>
      <ul>
        <li>
          <Link to={"/birth-certificate-attestation-bangalore"}>
            Birth Certificate
          </Link>
        </li>
        <li>
          <Link to={"/marriage-certificate-attestation-bangalore"}>
            Marriage Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>Commercial Documents</Link>
        </li>
        <li>
          <Link to={"/"}>Salary Certificate</Link>
        </li>
        <li>
          <Link to={"/"}>Equivalence Certificate</Link>
        </li>
        <li>
          <Link to={"/"}>Single Status Certificate</Link>
        </li>
        <li>
          <Link to={"/"}>Ministry of education department</Link>
        </li>
        <li>
          <Link to={"/"}>Foreign Affairs (FA)</Link>
        </li>
        <li>
          <Link to={"/"}>Transfer Certificate (TC)</Link>
        </li>
        <li>
          <Link to={"/"}>Employment Certificate</Link>
        </li>
        <li>
          <Link to={"/"}>Medical Certificate</Link>
        </li>
        <li>
          <Link to={"/"}>Ministry of Health department</Link>
        </li>
        <li>
          <Link to={"/"}>Ministry of Justice</Link>
        </li>
        <li>
          <Link to={"/"}>Chamber of Commerce</Link>
        </li>
        <li>
          <Link to={"/"}>Labor Department</Link>
        </li>
        <li>
          <Link to={"/"}>Death Certificate</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterDoc;
