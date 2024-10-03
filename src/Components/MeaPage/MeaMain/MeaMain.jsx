import React from "react";
import "./MeaMain.css";
import mea from "./../../../vid_img/Mea.jpg"
const MeaMain = () => {
  return (
    <div className="meaMainContainer">
      <div className="meaMainContent" id="meaMainContent1">
        <h2>COMMERCIAL DOCUMENTS:</h2>
        <p>
          Commercial Documents are to be pre-authenticated by the respective
          Chambers of Commerce before these can be attested by the Ministry of
          External Affairs.
        </p>
        <h3>
          DOCUMENTS REQUIRED FOR EDUCATIONAL/PERSONAL CERTIFICATE ATTESTATION
          FOR MEA ATTESTATION:
        </h3>
        <p>
          Only original documents duly authenticated by the designated
          authorities of the State Governments are Apostilled by the Ministry of
          External Affairs. Apostille is done on the reverse side of the
          original document. The applicants need to submit the following
          documents/fees
          <ul>
            <li>
              <span>Original document to be attested or apostilled.</span>
            </li>
            <li>
              <span>One clear photocopy of the document.</span>
            </li>
            <li>
              <span>One clear photocopy of the passport.</span>
            </li>
          </ul>
          <p>
            <span>Please note:</span> For MEA attestation, original document
            needs to be pre authenticated first by respective HRD/HD
          </p>
        </p>
      </div>
      <div className="meaMainContent" id="meaMainContent2">
        <img src={mea} alt="mea" loading="lazy"/>
      </div>
    </div>
  );
};

export default MeaMain;
