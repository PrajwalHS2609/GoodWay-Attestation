import React from "react";
import "./../AttestationPage/AttestationPage.css";
import ApostilleFlagsMain from "./ApostilleFlags/ApostilleFlagsMain";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import ApostilleEdu from "./ApostilleEdu/ApostilleEdu";
import ApostilleBloreCert from "./ApostilleBloreCert/ApostilleBloreCert";
import ApostilleSeo from "./ApostilleSeo/ApostilleSeo";
import UaeCertificateHead from './../AttestationCountries/UaeAttestation/UaeCertificate/UaeCertificateHead';
import AustraliaCertificateMain from './../AttestationCountries/Australia/AustraliaCertificate/AustraliaCertificateMain';
const ApostillePages = () => {
  return (
    <div className="AttestationPageContainer">
      <ApostilleFlagsMain />
      <ApostilleEdu/>
      <ApostilleBloreCert/>
      <div id='apoNonEduContainer'></div>
      <UaeCertificateHead certHead="Certificates Required For  Apostille" />
      <AustraliaCertificateMain />
      <ApostilleSeo/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default ApostillePages;
