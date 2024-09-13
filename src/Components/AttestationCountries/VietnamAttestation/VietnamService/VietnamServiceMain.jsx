import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./../../UaeAttestation/UaeService/UaeService.css";

const VietnamServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <p>
        Vietnam embassy attestation in Bangalore comprises documents such as
        personal documents, educational documents, & commercial documents. It is
        a part of security that ensures your trustworthiness to the Vietnam
        government. It shall also build trust between the employee & employer &
        or two businessmen if you are traveling for business or work.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          <span> Personal Document Attestation for Vietnam:</span>{" "}
          <p>
            Personal document legalization is the procedure done to certify
            personal documents for Vietnam. This type of legitimization covers
            certification of the documents for obtaining a residential visa
            generally & sometimes in the process of a work visa & student visa.
          </p>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
          <span>Commercial Document Attestation for Vietnam:</span>
          <p>
            The legalization of commercial document is the certification of
            commercial documents from the Chamber of Commerce. These documents
            are evidence of your business capital. When the entrepreneur is
            looking forward to carrying out commerce in Vietnam, the
            authentication of these documents for Vietnam is carried out at the
            time.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default VietnamServiceMain;
