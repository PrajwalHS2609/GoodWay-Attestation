import React from "react";
import "./../../AttestationPage/AttestationFlags/AttestationFlags.css";
import mainFlag from "./../../../vid&img/flags/Flags.jpg";
import omanFlag from "./../../../vid&img/flags/OmanFlag.jpg";
import italyFlag from "./../../../vid&img/flags/ItalyFlag.jpg";
import germanyFlag from "./../../../vid&img/flags/GermanyFlag.jpg";
import australiaFlag from "./../../../vid&img/flags/AustraliaFlag.jpg";
import austriaFlag from "./../../../vid&img/flags/AustriaFlag.jpg";
import franceFlag from "./../../../vid&img/flags/FranceFlag.jpg";
import lithuaniaFlag from "./../../../vid&img/flags/LithuaniaFlag.jpg";
import mexicoFlag from "./../../../vid&img/flags/MexicoFlag.jpg";
import netherlandFlag from "./../../../vid&img/flags/NetherlandFlag.jpg";
import ukFlag from "./../../../vid&img/flags/UkFlag.jpg";
import usaFlag from "./../../../vid&img/flags/UsaFlag.jpg";
import AttestationFlagsCard from "../../AttestationPage/AttestationFlags/AttestationFlagsCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import ApostilleBlore from "./../ApostilleBlore/ApostilleBlore";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const ApostilleFlagsMain = () => {
  return (
    <div className="attestationFlagMainContainer">
      <div className="atteFlagMainContent1">
        <div className="atteFlagMainImgCover">
          <TypeWriter txt="Our Certificate Apostille Service in " />
        </div>
        <img src={mainFlag} alt="mainFlag" />
      </div>
      <WhyBlock />
      <ApostilleBlore />
      <div className="atteFlagMainContent2">
        <AttestationFlagsCard
          link="/oman-apostille-attestation-bangalore"
          img={omanFlag}
          head="OMAN"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/italy-apostille-attestation-bangalore"
          img={italyFlag}
          head="ITALY"
          para="Apostille"
        />  
        <AttestationFlagsCard
          link="/germany-apostille-attestation-bangalore"
          img={germanyFlag}
          head="GERMANY"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/australia-apostille-attestation-bangalore"
          img={australiaFlag}
          head="AUSTRALIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/austria-apostille-attestation-bangalore"
          img={austriaFlag}
          head="AUSTRIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/france-apostille-attestation-bangalore"
          img={franceFlag}
          head="FRANCE"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/lithuania-apostille-attestation-bangalore"
          img={lithuaniaFlag}
          head="LITHUANIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/mexico-apostille-attestation-bangalore"
          img={mexicoFlag}
          head="MEXICO"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/netherland-apostille-attestation-bangalore"
          img={netherlandFlag}
          head="NETHERLAND"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/uk-apostille-attestation-bangalore"
          img={ukFlag}
          head="UNITED KINGDOM"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/usa-apostille-attestation-bangalore"
          img={usaFlag}
          head="USA"
          para="Apostille"
        />
      </div>
    </div>
  );
};

export default ApostilleFlagsMain;
