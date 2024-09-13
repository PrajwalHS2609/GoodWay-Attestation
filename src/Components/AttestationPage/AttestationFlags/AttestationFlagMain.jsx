import React from "react";
import "./AttestationFlags.css";
import AttestationFlagsCard from "./AttestationFlagsCard";
import mainFlag from "./../../../vid&img/flags/Flags.jpg";
import uaeFlag from "./../../../vid&img/flags/UaeFlag.png";
import qatarFlag from "./../../../vid&img/flags/QatarFlag.jpg";
import kuwaitFlag from "./../../../vid&img/flags/KuwaitFlag.jpg";
import saudiFlag from "./../../../vid&img/flags/SaudiFlag.jpg";
import bahrainFlag from "./../../../vid&img/flags/BahrainFlag.jpg";
import chinaFlag from "./../../../vid&img/flags/ChinaFlag.jpg";
import vietnamFlag from "./../../../vid&img/flags/VietnamFlag.jpg";
import taiwanFlag from "./../../../vid&img/flags/TaiwanFlag.jpg";
import egyptFlag from "./../../../vid&img/flags/EgyptFlag.jpg";
import philippinesFlag from "./../../../vid&img/flags/PhilippinesFlag.png";
import malaysiaFlag from "./../../../vid&img/flags/MalaysiaFlag.png";
import nigeriaFlag from "./../../../vid&img/flags/NigeriaFlag.jpg";
import AttestationBlore from "../AttestationBlore/AttestationBlore";
import WhyBlock from "../../WhyBlock/WhyBlock";
import TypeWriter from "../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const AttestationFlagMain = () => {
  return (
    <div className="attestationFlagMainContainer">
      <div className="atteFlagMainContent1">
        <div className="atteFlagMainImgCover">
          <TypeWriter txt="Our Certificate Attestation Service in " />
        </div>
        <img src={mainFlag} alt="mainFlag" />
      </div>
      <WhyBlock />
      <AttestationBlore />
      <div className="atteFlagMainContent2">
        <AttestationFlagsCard
          link="/uae-embassy-attestation-bangalore"
          img={uaeFlag}
          head="UAE"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/qatar-embassy-attestation-bangalore"
          img={qatarFlag}
          head="QATAR"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/kuwait-embassy-attestation-bangalore"
          img={kuwaitFlag}
          head="KUWAIT"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/saudi-embassy-attestation-bangalore"
          img={saudiFlag}
          head="SAUDI"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/bahrain-embassy-attestation-bangalore"
          img={bahrainFlag}
          head="BAHRAIN"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/china-embassy-attestation-bangalore"
          img={chinaFlag}
          head="CHINA"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/qatar-embassy-attestation-bangalore"
          img={vietnamFlag}
          head="VIETNAM"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/taiwan-embassy-attestation-bangalore"
          img={taiwanFlag}
          head="TAIWAN"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/egypt-embassy-attestation-bangalore"
          img={egyptFlag}
          head="EGYPT"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/philippines-embassy-attestation-bangalore"
          img={philippinesFlag}
          head="PHILIPPINES"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/malaysia-embassy-attestation-bangalore"
          img={malaysiaFlag}
          head="MALAYSIA"
          para="Embassy Attestation"
        />
        <AttestationFlagsCard
          link="/nigeria-embassy-attestation-bangalore"
          img={nigeriaFlag}
          head="NIGERIA"
          para="Embassy Attestation"
        />
      </div>
    </div>
  );
};

export default AttestationFlagMain;
