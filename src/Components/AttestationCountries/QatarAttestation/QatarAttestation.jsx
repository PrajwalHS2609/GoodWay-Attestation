import React from "react";
import "./QatarAttestation.css";
import QatarCardMain from "./QatarCard/QatarCardMain";
import QatarHeading from "./QatarHeading/QatarHeading";

import QatarMofa from "./QatarMofa/QatarMofa";
import QatarCertificate from "./QatarCertificate/QatarCertificate";
import QatarBlore from "./QatarBlore/QatarBlore";
import QatarReq from "./QatarReq/QatarReq";
import QatarAbout from "./QatarAbout/QatarAbout";
import HomeMarquee from "./../../Marquee/HomeMarquee";
import OurServices from "./../../HomePage/OurServices/OurServices";
import Benefits from "./../../Benefits/Benefits";
import Review from "./../../Review/Review";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import HomeLink from "./../../HomePage/HomeLink.jsx/HomeLink";
import QatarFaq from "./QatarFaq/QatarFaq";
import QatarSeo from "./QatarSeo/QatarSeo";
import { Helmet } from "react-helmet";
const QatarAttestation = () => {
  return (
    <div className="qatarAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qatar Embassy Attestation Services in Bangalore Karnataka</title>
        <meta
          name="description"
          content="Qatar Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/qatar-embassy-attestation-bangalore"
        />
      </Helmet>
      <QatarHeading />
      <WhyBlock />
      <QatarCardMain />
      <QatarCertificate />
      <QatarMofa />
      <QatarBlore />
      <QatarSeo />
      <QatarReq />
      <QatarAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <QatarFaq />
    </div>
  );
};

export default QatarAttestation;
