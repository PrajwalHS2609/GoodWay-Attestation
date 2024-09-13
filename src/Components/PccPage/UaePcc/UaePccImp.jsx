import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const UaePccImp = () => {
  return (
    <div className="pccImpContainer">
      <h2>
        Importance of UAE <span>PCC</span> Verification
      </h2>
      <p>
        UAE PCC verification holds significant importance across various
        domains:
      </p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Visa and Immigration:</span> Required for visa applications,
          residency permits, and other immigration procedures to confirm the
          applicant’s eligibility and security clearance.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Employment:</span>: Employers in the UAE may request a PCC to
          ensure the suitability and reliability of prospective employees.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Education:</span> Educational institutions may require a PCC to
          safeguard their campus environment and verify the background of
          students.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Legal and Personal Matters: :</span> Used in legal proceedings,
          adoption processes, and personal matters to demonstrate a clean
          criminal record.
        </li>
      </ul>
    </div>
  );
};

export default UaePccImp;
