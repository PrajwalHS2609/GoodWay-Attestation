import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const OmanBloreCertMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Apostille for Oman in India is a regionalized process & is procured
          with the intervention of Apostille services in India. Attestation for
          Oman is the procedure of verifying your documents to obtain a visa or
          expand your business in Oman.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          Therefore, it is a significant step that is to be performed if you
          plan to travel to Oman. It can be simpler to approach the validation
          procedure through apostille services for Oman as it can aid in getting
          the procedure done fast without any discomfort.
        </li>
      </ul>
    </div>
  );
};

export default OmanBloreCertMain;
