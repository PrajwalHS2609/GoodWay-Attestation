import React from "react";
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";
import chinaAbout from "./../../../../vid&img/qatarAbout.jpg";
const PhilippinesAboutMain = () => {
  return (
    <div className="uaeAboutUsMainContainer">
      <div className="uaeAboutUsMainContent">
        <ul>
          <li>
            If you are planning to visit the Philippines, the Philippines
            Attestation of document is an important process is performed. It is
            a prerequisite part of the verification procedure which will verify
            the authenticity of your documents. .
          </li>
          <li>
            It is essential to acquire an attestation stamp from the Philippines
            embassy as it is a kind of legal process that proves the
            authenticity of the document. Goodwayattestation is an eminent
            service provider of Philippines embassy attestation in Bangalore. We
            are an agent for the collection, scrutiny, & deposit of visa
            applications and documents for Attestation.
          </li>
          <li>
            We provide a package for Philippines attestation in Bangalore of
            each type of document for Attestation by the Philippines Embassy
            such as educational, non-educational or commercial. We are approved
            by Ministries & embassies in India as well as abroad. We provide you
            best quality services & will complete the entire procedure of your
            document attestation.
          </li>
        </ul>
      </div>
      <div className="uaeAboutUsMainContentImg">
        <img src={chinaAbout} alt="chinaAbout" />
      </div>
    </div>
  );
};

export default PhilippinesAboutMain;
