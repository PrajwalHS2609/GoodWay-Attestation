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
import { Helmet } from "react-helmet";

const AttestationPage = () => {
  return (
    <div className="AttestationPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Certificates Attestation in Bangalore at Lowest Price</title>
        <meta
          name="description"
          content="Certificate Attestation Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/certificate-attestation-bangalore"
        />
      </Helmet>
      <AttestationFlagMain />
      <AttestationEdu />
      <AttestationBloreCert />
      <div id="atteNoneduCertContainer"></div>
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
