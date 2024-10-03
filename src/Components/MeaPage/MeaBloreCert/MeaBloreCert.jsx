import React from "react";
import "./MeaBloreCert.css";
import meaCert from "./../../../vid_img/mea cert.jpg";
const MeaBloreCert = () => {
  return (
    <div className="meaBloreCertContainer">
      <div className="meaBloreCertWrapper">
        <div className="meaBloreCertContent1">
          <h2>MEA Apostille in Bangalore for Certificates:</h2>

          <p>We have services for all types of documents such as:</p>
          <ul>
            <li>Birth Certificate Apostille in Bangalore</li>
            <li>MEA Apostille for Commercial Document in Bangalore</li>
            <li>Degree certificate Apostille in Bangalore & a lot more</li>
          </ul>
        </div>
        <div className="meaBloreCertContent1">
          <img src={meaCert} alt="meaCert" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default MeaBloreCert;
