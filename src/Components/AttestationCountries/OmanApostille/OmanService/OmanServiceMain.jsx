import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./../../UaeAttestation/UaeService/UaeService.css";
const OmanServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          The integrity of the Oman Embassy attestation certificate attestation
          document is quite important while traveling overseas. As Oman is not a
          member of the Hague Convention, attestation is required. Whether the
          documents are commercial or personal, attestation is required to
          verify their authenticity.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          Individually, you can submit the Certificate for attestation or
          Apostille for Oman embassy document attestation. However, this is a
          time-consuming process. With their expertise, Goodway Attestation
          accredited professionals can make this attestation procedure easier
          for you. We provide your work in a specified time frame and provide
          free pick-up and drop
        </li>
      </ul>
    </div>
  );
};

export default OmanServiceMain;
