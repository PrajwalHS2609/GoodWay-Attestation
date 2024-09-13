import React from "react";
import "./IncopCert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const IncopCert = () => {
  return (
    <div className="incopCertContainer">
      <h2>
        Procedure for Certificate of Incorporation <span>Attestation</span>
      </h2>
      <p>
        The attestation process for Certificate of Incorporation typically
        involves the following steps:
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Chamber of Commerce (CoC) Attestation:</span>{" "}
          <p>
            Initial attestation is obtained from the local Chamber of Commerce
            where the business is registered. This step validates the document's
            authenticity at the local level.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Ministry of External Affairs (MEA) Attestation:</span>{" "}
          <p>
            The document is then submitted to the Ministry of External Affairs
            (MEA) for attestation, certifying its validity for international
            use.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Embassy Attestation:</span>
          <p>
            Attestation from the embassy or consulate of the destination country
            further verifies the document's authenticity as per that country's
            legal requirements.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Ministry of Foreign Affairs (MOFA) Attestation: </span>
          <p>
            Upon arrival in the destination country, documents may require
            attestation from the Ministry of Foreign Affairs (MOFA) to finalize
            their acceptance and recognition.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IncopCert;
