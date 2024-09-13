import React from "react";
import "./AttestationPage.css";
import AttestationFlagMain from "./AttestationFlags/AttestationFlagMain";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import AttestationEdu from "./AttestationEdu/AttestationEdu";
import AttestationBloreCert from "./AttestationBloreCert/AttestationBloreCert";
import UaeCertificateHead from "../AttestationCountries/UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../AttestationCountries/UaeAttestation/UaeCertificate/UaeCertificateMain";

const AttestationPage = () => {
  return (
    <div className="AttestationPageContainer">
      <AttestationFlagMain />
      <AttestationEdu />
      <AttestationBloreCert />
      <div id='atteNoneduCertContainer'></div>
      <UaeCertificateHead certHead="Certificates Required For  Attestation" />
      <UaeCertificateMain />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default AttestationPage;
