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
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Commercial Documents
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Salary Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Equivalence Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Single Status Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Ministry of education department
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Foreign Affairs (FA)
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Transfer Certificate (TC)
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Employment Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Medical Certificate
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Ministry of Health department
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Ministry of Justice
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Chamber of Commerce
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Labor Department
          </Link>
        </li>
        <li>
          <Link to={"/commercial-documents-attestation-bangalore"}>
            Death Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterDoc;
