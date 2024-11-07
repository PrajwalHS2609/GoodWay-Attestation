import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterService = () => {
  return (
    <div className="footerServiceContent">
      <h3>Our Services</h3>
      <ul>
        <li>
          <Link to={"/certificate-attestation-bangalore"}>Attestation</Link>
        </li>
        <li>
          <Link to={"/certificate-apostille-bangalore"}>Apostille</Link>
        </li>
        <li>
          <Link to={"/state-hrd-home-department-attestation"}>State HRD</Link>
        </li>
        <li>
          <Link to={"/mea-attestation-apostille-services"}>MEA Apostille</Link>
        </li>
        <li>
          <Link to={"/mofa-attestation-services"}>MOFA</Link>
        </li>
        <li>
          <Link to={"/pcc-attestation-bangalore"}>PCC</Link>
        </li>
        <li>
          <Link to={"/wes-attestation-bangalore"}>WES</Link>
        </li>
        <li>
          <Link to={"/translation-attestation-bangalore"}>Translation</Link>
        </li>
        <li>
          <Link to={"/kuwait-visa-stamping-bangalore"}>Kuwait Visa Stamping</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterService;
