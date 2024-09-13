import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterAttest = () => {
  return (
    <div className="footerServiceContent">
      <h3>Attestation</h3>
      <ul>
        <li>
          <Link to={"/uae-embassy-attestation-bangalore"}>UAE</Link>
        </li>
        <li>
          <Link to={"/qatar-embassy-attestation-bangalore"}>Qatar</Link>
        </li>
        <li>
          <Link to={"/kuwait-embassy-attestation-bangalore"}>Kuwait</Link>
        </li>
        <li>
          <Link to={"/saudi-embassy-attestation-bangalore"}>Saudi Arabia</Link>
        </li>
        <li>
          <Link to={"/bahrain-embassy-attestation-bangalore"}>Bahrain</Link>
        </li>
        <li>
          <Link to={"/china-embassy-attestation-bangalore"}>China</Link>
        </li>
        <li>
          <Link to={"/vietnam-embassy-attestation-bangalore"}>Vietnam</Link>
        </li>
        <li>
          <Link to={"/taiwan-embassy-attestation-bangalore"}>Taiwan</Link>
        </li>
        <li>
          <Link to={"/egypt-embassy-attestation-bangalore"}>Egypt</Link>
        </li>
        <li>
          <Link to={"/nigeria-embassy-attestation-bangalore"}>Nigeria</Link>
        </li>
        <li>
          <Link to={"/malaysia-embassy-attestation-bangalore"}>Malaysia</Link>
        </li>
        <li>
          <Link to={"/philippines-embassy-attestation-bangalore"}>
            Philippines
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterAttest;
