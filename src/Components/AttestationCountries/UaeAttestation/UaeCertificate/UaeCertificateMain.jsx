import React from "react";
import "./UaeCertificate.css";
import UaeEduCert from "./UaeEduCert";
import UaeNonEduCert from "./UaeNonEduCert";

const UaeCertificateMain = () => {
  return (
    <div className="uaeCertMainContainer">
      <div className="uaeCertMainContent">
        <UaeEduCert />
      </div>
      <div className="uaeCertMainContent">
        <UaeNonEduCert />
      </div>
    </div>
  );
};

export default UaeCertificateMain;
