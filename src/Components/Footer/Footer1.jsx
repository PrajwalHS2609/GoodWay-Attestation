import React from "react";
import FooterContact from "./FooterContact";
import FooterDoc from "./FooterDoc";
import FooterEduCertif from "./FooterEduCertif";
import FooterAttest from "./FooterAttest";
import FooterApo from "./FooterApo";
import FooterService from "./FooterService";
import "./Footer.css";
const Footer1 = () => {
  return (
    <div className="footer1Container">
      <div className="footerContent">
        <FooterService />
      </div>
      <div className="footerContent">
        <FooterDoc />
      </div>
      <div className="footerContent">
        <FooterEduCertif />
      </div>
      <div className="footerContent">
        <FooterAttest />
      </div>
      <div className="footerContent">
        <FooterApo />
      </div>
      <div className="footerContentContact">
        <FooterContact />
      </div>
    </div>
  );
};

export default Footer1;
