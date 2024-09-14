import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import TaiwanHeading from "./TaiwanHeading/TaiwanHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import TaiwanCard from "./TaiwanCard/TaiwanCard";
import TaiwanCertificate from "./TaiwanCertificate/TaiwanCertificate";
import TaiwanMofa from "./TaiwanMofa/TaiwanMofa";
import TaiwanBlore from "./TaiwanBlore/TaiwanBlore";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import TaiwanReq from "./TaiwanReq/TaiwanReq";
import Review from "../../Review/Review";
import Benefits from "../../Benefits/Benefits";
import OurServices from "../../HomePage/OurServices/OurServices";
import HomeMarquee from "../../Marquee/HomeMarquee";
import TaiwanAbout from "./TaiwanAbout/TaiwanAbout";
import TaiwanService from "./TaiwanService/TaiwanService";
import TaiwanFaq from "./TaiwanFaq/TaiwanFaq";
import { Helmet } from "react-helmet";

const TaiwanAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Taiwan Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Taiwan Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com//taiwan-embassy-attestation-bangalore"
        />
      </Helmet>
      <TaiwanHeading />
      <WhyBlock />
      <TaiwanCard />
      <TaiwanCertificate />
      <TaiwanMofa />
      <TaiwanService />
      <TaiwanBlore />
      <TaiwanReq />
      <TaiwanAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <TaiwanFaq />
    </div>
  );
};

export default TaiwanAttestation;
