import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const HrdDocs = () => {
  return (
    <div className="hrdDocsContainer">
      <h2>
        Documents Required for HRD <span>Attestation</span> in Andhra Pradesh
      </h2>
      <p>
        To initiate the HRD attestation process, you will need the following
        documents:
      </p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Original educational certificates (degree, diploma, mark sheets, etc.)
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Photocopies of the educational certificates
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Passport copy of the certificate holder
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Passport-sized photographs
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Authorization letter (if someone else is submitting the documents on
          your behalf)
        </li>
      </ul>
    </div>
  );
};

export default HrdDocs;
