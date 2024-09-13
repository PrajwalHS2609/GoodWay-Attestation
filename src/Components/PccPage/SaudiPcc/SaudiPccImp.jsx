import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const SaudiPccImp = () => {
  return (
    <div className="pccImpContainer">
      <h2>
        Importance of Saudi <span>PCC</span> Verification
      </h2>
      <p>
        Saudi PCC verification holds significant importance for various
        purposes:
      </p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Immigration and Visa :</span> Required for visa applications,
          residency permits, and other immigration procedures to confirm the
          applicant’s eligibility and security clearance.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Employment:</span> Employers in Saudi Arabia often request a PCC
          to ensure prospective employees meet security and integrity standards.
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

export default SaudiPccImp;
