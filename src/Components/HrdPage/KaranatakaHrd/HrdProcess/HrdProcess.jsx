import React from "react";
import "./HrdProcess.css"
const HrdProcess = () => {
  return (
    <div className="hrdProcessContainer">
      <h2>
        The HRD <span>Attestation</span> Process{" "}
      </h2>
      <p>
        The HRD attestation process involves several steps to ensure that your
        educational documents are verified accurately. Here is a detailed
        outline of the process:
      </p>
      <ul>
        <li>
          <h3>
            <span>1.</span> Document Verification:
          </h3>{" "}
          The first step involves verifying the authenticity of the educational
          documents from the issuing educational institution. This verification
          ensures that the documents are genuine and issued by a recognized
          institution.
        </li>
        <li>
          <h3>
            <span>2.</span> Submission to the State HRD Department:
          </h3>{" "}
          Once the documents are verified by the educational institution, they
          are submitted to the HRD department of the state where the institution
          is located. For documents issued in Karnataka, this would be the
          Karnataka HRD department.
        </li>
        <li>
          <h3>
            <span>3.</span>Attestation by the HRD Department:
          </h3>{" "}
          The HRD department then attests the documents by affixing a seal and
          signature. This attestation signifies that the educational documents
          are authentic and have been verified by the relevant authorities.
        </li>
        <li>
          <h3>
            {" "}
            <span>4.</span> Further Attestation (if required):
          </h3>{" "}
          After HRD attestation, the documents may need to be attested by the
          Ministry of External Affairs (MEA) and the embassy of the destination
          country for them to be accepted internationally.
        </li>
      </ul>
    </div>
  );
};

export default HrdProcess;
