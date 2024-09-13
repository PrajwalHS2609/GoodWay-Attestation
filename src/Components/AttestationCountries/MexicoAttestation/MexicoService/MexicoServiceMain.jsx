import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const MexicoServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <p>
        {" "}
        Goodwayattestation offers authentic Apostille services in Bangalore for
        Mexico. The certificate goes through different levels of approval until
        it finally procures MEA sticker. The MEA is the extension of the Indian
        government that offers the MEA stamp on the certificate.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          <span> Educational Document for Mexico:</span>
          <p>
            The procedure for the attestation of educational certificates will
            vary depending on the origin or sorts of the document.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          <span>Personal Document Apostille for Mexico:</span>
          <p>
            Personal documents need validation from levels of government
            departments.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          <span> Commercial Document Attestation for Mexico:</span>
          <p>
            Commercial documents are authenticated by an amalgamation of
            governmental & non-governmental organizations.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MexicoServiceMain;
