import React from "react";
import "./BirthCertExp.css";
const BirthCertExp = () => {
  return (
    <div className="birthCertExpContainer">
      <h2>
        Detailed Explanation of Birth Certificate <span>Attestation</span> in
        Bangalore
      </h2>
      <p>
        The process of birth certificate attestation in Bangalore is
        comprehensive and meticulous. Each step in the process is designed to
        ensure that the document is legitimate and can be trusted by foreign
        authorities. Here's a more detailed look at each step:
      </p>
      <ul>
        <li>
          <h3>
            {" "}
            <span> 1.</span> Notary Attestation:
          </h3>{" "}
          The notary public in Bangalore verifies the authenticity of the birth
          certificate. This involves checking the details on the certificate
          against the records and ensuring that the certificate is not
          fraudulent. The notary then adds their official seal and signature to
          the document, indicating that it has been verified.
        </li>
        <li>
          <h3>
            <span> 2.</span> Home Department Attestation:
          </h3>{" "}
          After the notary attestation, the document is submitted to the Home
          Department. This department is responsible for verifying the
          authenticity of documents issued within the state. The Home Department
          checks the certificate's details and compares them with their records.
          Once verified, the Home Department adds its seal and signature to the
          document.
        </li>
        <li>
          <h3>
            <span>3.</span> MEA (Ministry of External Affairs) Attestation:
          </h3>
          The next step involves the Ministry of External Affairs. The MEA is
          the central government authority responsible for foreign affairs, and
          its attestation is crucial for international recognition of the
          document. The MEA verifies the document and adds its seal and
          signature, confirming that the document is legitimate and can be used
          internationally.
        </li>
        <li>
          <h3>
            {" "}
            <span>4.</span> Embassy Attestation:
          </h3>{" "}
          After the MEA attestation, the document is sent to the embassy of the
          destination country. The embassy verifies the document and ensures
          that it meets the requirements of their country. This step is vital
          for the document to be accepted by the foreign government. The embassy
          adds its seal and signature to the document, indicating that it has
          been verified.
        </li>
        <li>
          {" "}
          <h3>
            {" "}
            <span>5.</span> MOFA (Ministry of Foreign Affairs) Attestation:
          </h3>{" "}
          In some cases, the document may also need to be attested by the
          Ministry of Foreign Affairs in the destination country. This final
          step ensures that the document is recognized and accepted by all
          relevant authorities in the destination country.
        </li>
      </ul>
    </div>
  );
};

export default BirthCertExp;
