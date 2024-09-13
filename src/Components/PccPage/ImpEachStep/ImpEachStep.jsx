import React from "react";
import "./ImpEachStep.css"

const ImpEachStep = () => {
  return (
    <div className="impEachStepContainer">
      <h2>Importance of Each Step</h2>
      <p>
        Each step in the PCC verification process is crucial for ensuring the
        document’s authenticity and acceptance abroad:
      </p>
      <ul>
        <li>
          <h3>  <span> • </span> Application Submission:</h3> This step ensures that all required
          information and documents are provided for the PCC application.
        </li>
        <li>
           <h3><span> • </span> Background Check:</h3> This step verifies the
          applicant's criminal record, ensuring that only individuals with a
          clean record receive a PCC.
        </li>
        <li>
        
          <h3>  <span> • </span> Issuance of PCC:</h3> This step provides the official
          certification that the applicant has no criminal history.
        </li>
        <li>
          <h3>  <span> • </span> Verification and Attestation:</h3> This step ensures that the
          PCC is authenticated and recognized by foreign authorities and
          institutions.
        </li>
      </ul>
    </div>
  );
};

export default ImpEachStep;
