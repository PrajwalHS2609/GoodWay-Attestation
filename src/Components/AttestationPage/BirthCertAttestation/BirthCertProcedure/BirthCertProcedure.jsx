import React from "react";
import "./BirthCertProcedure.css";
const BirthCertProcedure = () => {
  return (
    <div className="birthCertProcedureContainer">
      <h2>
        Procedure for Birth Certificate <span>Attestation</span> in Bangalore
      </h2>
      <p>
        Utilizing the birth certificate beyond the borders of your country of
        origin is not a simple process. The procedure for birth certificate
        attestation in Bangalore involves several steps:
      </p>
      <ol>
        <li>
          1. <span> Notary Attestation:</span> The initial step in the
          attestation process is getting the document notarized. A notary public
          will verify the authenticity of the document and add their seal and
          signature.
        </li>
        <li>
          2. <span>Home Department Attestation:</span> Following the notary
          attestation, the document needs to be attested by the Home Department.
          This step further verifies the legitimacy of the document within the
          issuing country.
        </li>
        <li>
          3. <span>MEA (Ministry of External Affairs) Attestation:</span> Once
          the Home Department attestation is complete, the document must be
          attested by the Ministry of External Affairs. This attestation
          confirms that the document is genuine and can be used internationally.
        </li>
        <li>
          4. <span>Embassy Attestation:</span> After the MEA attestation, the
          document needs to be attested by the embassy of the destination
          country. This step ensures that the document is recognized by the
          foreign government.
        </li>
        <li>
          5. <span>MOFA (Ministry of Foreign Affairs) Attestation:</span> In
          some cases, the document might also require attestation from the
          Ministry of Foreign Affairs in the destination country.
        </li>
      </ol>
      <p>
        During each step of this process, seals and signatures are added to the
        documents as they are verified. Birth certificate attestation in
        Bangalore thus involves a thorough and detailed verification process to
        ensure the document’s authenticity.
      </p>
    </div>
  );
};

export default BirthCertProcedure;
