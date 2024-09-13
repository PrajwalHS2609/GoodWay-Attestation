import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const NetherlandBloreCertMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          The authentication of document is the process of obtaining the MEA
          sticker on the document. It is a part of the legalization of the
          needed certificate authentication that indicates the authenticity of
          your documents & your intent of visiting Netherlands. Apostille
          documents in India are provided by the MEA which the department of the
          Indian government that deals with foreign affairs.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          In Apostille step, the MEA issues a sticker that includes the name &
          other details of the applicant. Sometimes, an MEA stamp is also
          required on the documents along with the apostille sticker especially
          for commercial documents. It is the last stage of apostille & is done
          by the central government.
        </li>
      </ul>
    </div>
  );
};

export default NetherlandBloreCertMain;
