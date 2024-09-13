import React from "react";
import qatarAbout from "./../../../../vid&img/qatarAbout.jpg";
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";

const TaiwanAboutMain = () => {
  return (
    <div className="uaeAboutUsMainContainer">
      <div className="uaeAboutUsMainContent">
        <ul>
          <li>
            If you are traveling to Taiwan, you must get documents attested. It
            is a versatile country with a myriad of opportunities in each field.
            If you wish to make the most of their career, you can consider
            visiting this place. The certificate attestation from Taiwan embassy
            is a part of the document verification process. It is an essential
            part of the verification process which will certify the authenticity
            of your documents.
          </li>
          <li>
            It is beneficial to get your documents attested from the experts.
            Goodwayattestation is approved by Ministries & embassies in India as
            well as abroad that make your certificate attestation in Bangalore
            for Taiwan. We sustain transparency of the process that is being
            carried out & you will be kept updated with the progress. We provide
            you best quality services & will complete the entire procedure of
            your document attestation.
          </li>
        </ul>
      </div>
      <div className="uaeAboutUsMainContentImg">
        <img src={qatarAbout} alt="qatarAbout" />
      </div>
    </div>
  );
};

export default TaiwanAboutMain;
