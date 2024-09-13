import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const KuwaitPccImp = () => {
  return (
    <div className="pccImpContainer">
      <h2>
        Importance of Kuwait <span>PCC</span> Verification
      </h2>
      <p>
        Kuwait PCC verification holds significant importance for various
        purposes:
      </p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Immigration and Visa :</span> Kuwait requires a PCC for visa
          applications, residency permits, and other immigration-related
          procedures to ensure applicants meet security and eligibility
          criteria.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Employment:</span> Employers in Kuwait may request a PCC to
          verify the background and suitability of potential employees, ensuring
          a safe and trustworthy work environment.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Education:</span> Educational institutions in Kuwait may
          require a PCC to ensure the safety and integrity of their campus
          environment.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Legal and Personal Matters: :</span> Kuwait PCCs are often
          necessary for legal proceedings, adoption processes, and other
          personal matters to demonstrate a clean criminal record.
        </li>
      </ul>
    </div>
  );
};

export default KuwaitPccImp;
