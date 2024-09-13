import React from "react";

const OmanPccExp = () => {
  return (
    <div className="pccExpContainer">
      <h2>
        Detailed Explanation of the Oman <span>PCC</span> Verification Procedure
      </h2>
      <p>
        To provide a comprehensive understanding, here is a detailed explanation
        of each step involved in the Oman PCC verification process:
      </p>
      <ul>
        <li>
          <h3>
            <span>1.</span> Application Submission:
          </h3>{" "}
          The process begins with submitting the PCC application to the local
          police station or relevant government agency. The application must
          include all required documents, such as identification proof and
          address proof.
        </li>
        <li>
          <h3>
            <span>2.</span> Background Check:
          </h3>{" "}
          Once the application is submitted, the police department conducts a
          thorough background check on the applicant. This involves checking the
          applicant's criminal records, if any, and verifying the details
          provided in the application.
        </li>
        <li>
          <h3>
            <span>3.</span> Issuance of PCC:
          </h3>{" "}
          After the background check is completed and no criminal records are
          found, the police department issues the PCC. This document certifies
          that the applicant has no criminal history and is cleared for
          international use.
        </li>
        <li>
          <h3>
            {" "}
            <span>4. </span>State Home Department Attestation
          </h3>{" "}
          The issued PCC is then submitted to the State Home Department for
          attestation. This step ensures that the document is authenticated at
          the state level.
        </li>
        <li>
          <h3>
            {" "}
            <span>5. </span>MEA Attestation:
          </h3>{" "}
          After the State Home Department attestation, the document is further
          attested by the Ministry of External Affairs (MEA). The MEA
          attestation confirms that the document is genuine and can be used
          internationally.
        </li>
        <li>
          <h3>
            {" "}
            <span>6. </span>Embassy Attestation:
          </h3>{" "}
          The final step involves getting the PCC attested by the Oman Embassy.
          This step ensures that the document is recognized and accepted by the
          Omani authorities.
        </li>
      </ul>
    </div>
  );
};

export default OmanPccExp;
