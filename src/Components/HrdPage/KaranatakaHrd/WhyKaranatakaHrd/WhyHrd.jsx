import React from "react";
import "./WhyHrd.css";
const WhyHrd = () => {
  return (
    <div className="whyHrdContainer">
      <h2>
        Why is HRD <span>Attestation</span> Important?
      </h2>
      <p>HRD attestation is critical for a variety of purposes, including:</p>
      <ul>
        <li>
          <h3>
            {" "}
            <span> • </span>Higher Education Abroad:
          </h3>{" "}
          Many foreign universities require HRD-attested educational
          certificates for admission into their programs
        </li>
        <li>
          <h3>
            <span> • </span> Employment Overseas:
          </h3>{" "}
          TEmployers in many countries ask for HRD-attested documents to ensure
          the authenticity of an applicant’s qualifications.
        </li>
        <li>
          <h3>
            {" "}
            <span> • </span> Migration:
          </h3>{" "}
          For visa processing, HRD attestation is often a mandatory step to
          verify educational credentials.
        </li>
        <li>
          <h3>
            {" "}
            <span> • </span> Professional Licensing:
          </h3>{" "}
          Certain professions, such as engineering, medical, and legal, may
          require HRD-attested documents to obtain licenses to practice abroad.
        </li>
      </ul>
    </div>
  );
};

export default WhyHrd;
