import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const MexicoBloreCertMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          Goodwayattestation offers authentic Apostille services in Bangalore
          for Mexico. The certificate goes through different levels of approval
          until it finally procures MEA sticker. The MEA is the extension of the
          Indian government that offers the MEA stamp on the certificate.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Educational Document for Mexico:</span> The procedure for the
          attestation of educational certificates will vary depending on the
          origin or sorts of the document.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Personal Document Apostille for Mexico:</span> Personal
          documents need validation from levels of government departments.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Commercial Document Attestation for Mexico:</span> Commercial
          documents are authenticated by an amalgamation of governmental &
          non-governmental organizations.
        </li>
      </ul>
    </div>
  );
};

export default MexicoBloreCertMain;
