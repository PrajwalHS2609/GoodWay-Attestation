import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./../../UaeAttestation/UaeService/UaeService.css";
const UkServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          The authentication of the document is the procedure of acquiring the
          MEA sticker on the document. It is a part of the validation of the
          required certificate authentication in order to prove the authenticity
          of your documents & your purpose of visiting USA. Attestation
          documents in India are provided by the MEA which is the department of
          the Indian government that deals with foreign affairs.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          At attestation stage, the MEA issues a sticker that includes the name
          & other details of the applicant. Sometimes, an MEA stamp is also
          required on the documents along with the apostille sticker especially
          for commercial documents. It is the last stage of attestation & is
          done by the central government.
        </li>
      </ul>
    </div>
  );
};

export default UkServiceMain;
