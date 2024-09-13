import React from "react";
import "./Footer2.css";
import trySeo from "./../../../vid&img/TSS.png";
const Footer2Main = () => {
  return (
    <div className="footer2MainContainer">
      <div className="footer2MainContent">
        <p>© 2023 GoodWay Attestation. All Rights Reserved.</p>
      </div>
      <div className="footer2MainContent1">
        <a href="https://tryseoservices.com/">
          <img src={trySeo} alt="trySeo" />
        </a>
      </div>
    </div>
  );
};

export default Footer2Main;
