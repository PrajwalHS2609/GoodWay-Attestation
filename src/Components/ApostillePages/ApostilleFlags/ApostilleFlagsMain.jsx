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
          link="/oman-apostille-services-bangalore"
          img={omanFlag}
          head="OMAN"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/italy-apostille-services-bangalore"
          img={italyFlag}
          head="ITALY"
          para="Apostille"
        />  
        <AttestationFlagsCard
          link="/germany-apostille-services-bangalore"
          img={germanyFlag}
          head="GERMANY"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/australia-apostille-services-bangalore"
          img={australiaFlag}
          head="AUSTRALIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/austria-apostille-services-bangalore"
          img={austriaFlag}
          head="AUSTRIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/france-apostille-services-bangalore"
          img={franceFlag}
          head="FRANCE"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/lithuania-apostille-services-bangalore"
          img={lithuaniaFlag}
          head="LITHUANIA"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/mexico-apostille-services-bangalore"
          img={mexicoFlag}
          head="MEXICO"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/netherlands-apostille-services-bangalore"
          img={netherlandFlag}
          head="NETHERLAND"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/uk-apostille-services-bangalore"
          img={ukFlag}
          head="UNITED KINGDOM"
          para="Apostille"
        />
        <AttestationFlagsCard
          link="/usa-apostille-services-bangalore"
          img={usaFlag}
          head="USA"
          para="Apostille"
        />
      </div>
    </div>
  );
};

export default ApostilleFlagsMain;
