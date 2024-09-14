import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import SaudiHeading from "./SaudiHeading/SaudiHeading";
import SaudiMainCard from "./SaudiCard/SaudiMainCard";
import SaudiCertificate from "./SaudiCertificate/SaudiCertificate";
import SaudiMofa from "./SaudiMofa/SaudiMofa";
import SaudiBlore from "./SaudiBlore/SaudiBlore";
import SaudiReq from "./SaudiReq/SaudiReq";
import SaudiAbout from "./SaudiAbout/SaudiAbout";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import SaudiFaq from "./SaudiFaq/SaudiFaq";
import SaudiSeo from "./SaudiSeo/SaudiSeo";
import { Helmet } from "react-helmet";

const SaudiAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Saudi Embassy Attestation Services in Bangalore Karnataka</title>
        <meta
          name="description"
          content="Saudi Arabia Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link rel="canonical" href="https://goodway-attestation.com//saudi-embassy-attestation-bangalore" />
      </Helmet>
      <SaudiHeading />
      <WhyBlock />
      <SaudiMainCard />
      <SaudiCertificate />
      <SaudiMofa />
      <SaudiBlore />
      <SaudiSeo />
      <SaudiReq />
      <SaudiAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <SaudiFaq />
    </div>
  );
};

export default SaudiAttestation;
