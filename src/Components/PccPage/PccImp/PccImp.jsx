import React from "react";
import "./PccImp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const PccImp = () => {
  return (
    <div className="pccImpContainer">
      <h2>
        Importance of <span>PCC</span> Verification
      </h2>
      <p>PCC verification holds significant importance for various reasons:</p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Immigration and Visa Applications:</span> Many countries require
          a PCC to process visa applications, residency permits, and other
          immigration-related processes to ensure the applicant does not have a
          criminal history.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Employment:</span> Employers abroad often demand a PCC to verify
          that potential employees have a clean criminal record, which is
          essential for trust and safety in the workplace.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Education:</span> Educational institutions abroad may require a
          PCC to ensure the safety of their campus and the integrity of their
          student body.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Adoption:</span> When adopting a child, a PCC is often required
          to ensure that the adoptive parents have no criminal background.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Business and Trade:</span> For businesses looking to expand or
          operate internationally, a PCC may be required to ensure that key
          personnel have a clean record.
        </li>
      </ul>
    </div>
  );
};

export default PccImp;
