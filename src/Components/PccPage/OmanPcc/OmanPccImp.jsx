import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const OmanPccImp = () => {
  return (
    <div className="pccImpContainer">
      <h2>
        Importance of Oman <span>PCC</span> Verification
      </h2>
      <p>Oman PCC verification is crucial for several reasons:</p>
      <ul>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Immigration and Visa Applications:</span> The Omani authorities
          require a PCC to process visa applications, residency permits, and
          other immigration-related procedures to verify the applicant’s
          background.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Employment:</span>Employers in Oman often require a PCC to
          ensure that potential employees do not have a criminal record, thus
          maintaining a safe and trustworthy work environment.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Education:</span> Educational institutions in Oman may require
          a PCC to ensure the safety and integrity of their campus and student
          body.
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Legal and Business Transactions:</span> For legal processes such
          as marriage, adoption, or business transactions, a PCC is often
          necessary to prove the individual's clean criminal record.
        </li>
      </ul>
    </div>
  );
};

export default OmanPccImp;
