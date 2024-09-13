import React from "react";
import AttestationBloreMain from "../../AttestationPage/AttestationBlore/AttestationBloreMain";
import AttestationBloreHead from "../../AttestationPage/AttestationBlore/AttestationBloreHead";
import "./../../AttestationPage/AttestationBlore/AttestationBlore.css";
const ApostilleBlore = () => {
  return (
    <div className="attestationBloreContiner">
      <AttestationBloreHead span="Apostille" head=" Services in Bengaluru" />
      <AttestationBloreMain
        mainImg="https://goodwayattestation.com/images/images-service-14.jpg"
        mainHead="Certificate Apostille In India"
        mainPara1="Apostille is an international treaty drafted by the Hague Conference on Private International Law. It specifies the modalities through which a document issued in one of the signatory countries can be certified for legal purposes in all the other signatory states. A certification under the terms of the convention is called an apostille. It is an international certification comparable to a notarisation in domestic law, and normally supplements a local notarisation of the document. If the convention applies between two countries, such an apostille is sufficient to certify a document's validity, and removes the need for double-certification, by the originating country and then by the receiving country."
        mainPara2="Apostille is an international attestation that is acceptable in about 112 countries, and most of the western world recognises Apostille Only original documents duly authenticated by the designated authorities of the State Governments / Sub-Divisional Magistrate are Apostilled by the Ministry of External Affairs. Apostille is done on the reverse side of the original document."
      />
    </div>
  );
};

export default ApostilleBlore;
