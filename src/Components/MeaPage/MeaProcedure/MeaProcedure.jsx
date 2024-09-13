import React from "react";
import "./MeaProcedure.css";
const MeaProcedure = () => {
  return (
    <div className="meaProcedureContainer">
      <h2>The procedure for Apostille is as follows:</h2>
      <p>
        <h3>Authentication of documents:</h3>
        <p>
          The original certificates or documents that need MEA to issue
          Apostille must be initially authenticated by the designated
          authorities of the State or Union Territory from where the document is
          originated. If the respective relevant state authority has attested a
          specific document, Indian Apostille can only be issued by MEA.
        </p>
      </p>
      <p>
        <h3>Legalization of documents:</h3>
        <p>
          MEA (The Ministry of External Affairs) attests or legalizes the
          documents only if these have been authenticated with the signature &
          seal or stamp of the designated authorities of the State Government or
          Union Territory or Chambers of Commerce from where the documents have
          been originated. The MEA authorize the documents or certificate on the
          basis of the designated authorities’ signature. However, it does not
          take responsibility of the contents of the documents.
        </p>
        <ul>
          <li>
            For educational documents: Education Department of the concerned
            State Government/Union Territory (HRD/GAD)/NORKA + Apostille from
            MEA
          </li>
          <li>
            For non-educational documents: State Home Department/GAD/SDM of the
            concerned State Government/Union Territory + Apostille from MEA
          </li>
          <li>
            For commercial documents: Respective Chamber of Commerce + Apostille
            from MEA
          </li>
        </ul>
      </p>
    </div>
  );
};

export default MeaProcedure;
