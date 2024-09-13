import React from "react";
import SeoContent2 from "../../HomePage/SeoContent/SeoContent2";

const MarriageCertExp = () => {
  return (
    <div className="birthCertExpContainer">
      <h2>
        Detailed Explanation of Birth <span>Apostille </span>Certificate in
        Bangalore
      </h2>
      <p>
        To provide a comprehensive understanding, here is a detailed explanation
        of each step involved in the birth certificate apostille process:
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
          After notary attestation, the marriage certificate is submitted to the
          Home Department. This department verifies the authenticity of the
          document and ensures it was issued by the appropriate authority. Once
          verified, the Home Department adds its seal and signature to the
          marriage certificate.
        </li>
        <li>
          <h3>
            <span>3.</span> MEA (Ministry of External Affairs) Attestation:
          </h3>
          The final step involves the Ministry of External Affairs. The MEA
          verifies the document and adds its official apostille sticker. This
          sticker contains a unique identification number that can be used to
          verify the document's authenticity online. The MEA apostille confirms
          that the document is genuine and can be used internationally.
        </li>
      </ul>
      <SeoContent2 />
    </div>
  );
};

export default MarriageCertExp;
