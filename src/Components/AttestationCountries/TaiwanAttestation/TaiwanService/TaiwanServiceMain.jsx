import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./../../UaeAttestation/UaeService/UaeService.css";
const TaiwanServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          Taiwan is an Asian island nation recognized for its high GDP and rapid
          technological development. It has one of the world's most educated
          populations and a highly trained workforce. Taipei is Taiwan's capital
          as well as the country's political, cultural, and economic hub.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          Those planning to travel outside of Taiwan for tourism, education,
          business, or employment should have their documents attested by the
          relevant authorities in Taiwan. You can entirely rely on Goodway
          Attestation if you require any assistance during this process. We
          offer a full range of expedited Taiwan attestation services.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          As Taiwan is not a signatory to the Attestation Convention, the Taiwan
          document attestation process requires multiple processes and rounds of
          verification. You must acquire a notary attestation and have your
          documents validated by state and ministry officials. It comprises the
          creation of required documents and the timely submission of their
          original copies. To enable speedy visa applications and approvals,
          faster attestation is required.
        </li>
      </ul>
    </div>
  );
};

export default TaiwanServiceMain;
