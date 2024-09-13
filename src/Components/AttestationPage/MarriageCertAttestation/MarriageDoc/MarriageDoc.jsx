import React from "react";
import "./MarriageDoc.css"
const MarriageDoc = () => {
  return (
    <div className="birthImpDocContainer">
      <h2>
        Documents Required for Marriage Certificate <span>Attestation</span> in
        Bangalore
      </h2>
      <p>
        The following documents are necessary for marriage certificate
        attestation in Bangalore:
      </p>
      <div className="marriageImpDocContent">
        <ul>
          <li>
            <span>Original Marriage certificate :</span> The original document
            issued by the relevant authority
          </li>
          <li>
            <span>Passport copy :</span> A copy of the passport of one or both
            individuals mentioned in the marriage certificate.
          </li>
        </ul>
      </div>
      <p>
        These documents must be original and authentic to be considered for
        attestation. The process ensures that the certificate is genuine and can
        be used internationally.
      </p>
    </div>
  );
};

export default MarriageDoc;
