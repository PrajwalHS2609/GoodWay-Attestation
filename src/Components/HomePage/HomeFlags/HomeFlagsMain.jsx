import React from "react";
import "./HomeFlags.css";
import HomeFlagCard from "./HomeFlagCard";
import bahrainEmbassy from "../../../vid&img/Embassy/Bahrain.png";
import indianMea from "../../../vid&img/Embassy/IndianMea.png";
import qatarEmbassy from "../../../vid&img/Embassy/Qatar Embassy.png";
import saudiEmbassy from "../../../vid&img/Embassy/Saudi.png";
import uaeEmbassy from "../../../vid&img/Embassy/UAE Embassy.png";
import kuwaitEmbassy from "../../../vid&img/Embassy/Kuwait.png";

const HomeFlagsMain = () => {
  return (
    <div className="homeFlagMainContainer">
      <HomeFlagCard
        flag={indianMea}
        name="INDIAN MEA"
        alt="indianEmbassy"
        link="/mea-attestation-apostille-services"
      />
      <HomeFlagCard
        flag={uaeEmbassy}
        name="UAE EMBASSY"
        alt="uaeEmbassy"
        link="/uae-embassy-attestation-bangalore"
      />

      <HomeFlagCard
        flag={qatarEmbassy}
        name="QATAR EMBASSY"
        alt="qatarEmbassy"
        link="/qatar-embassy-attestation-bangalore"
      />
      <HomeFlagCard
        flag={kuwaitEmbassy}
        name="KUWAIT EMBASSY"
        alt="kuwaitEmbassy"
        link="/kuwait-embassy-attestation-bangalore"
      />
      <HomeFlagCard
        flag={bahrainEmbassy}
        name="BAHRAIN EMBASSY"
        alt="bahrainEmbassy"
        link="/bahrain-embassy-attestation-bangalore"
      />

      <HomeFlagCard
        flag={saudiEmbassy}
        name="SAUDI EMBASSY"
        alt="saudiEmbassy"
        link="/saudi-embassy-attestation-bangalore"
      />
    </div>
  );
};

export default HomeFlagsMain;
