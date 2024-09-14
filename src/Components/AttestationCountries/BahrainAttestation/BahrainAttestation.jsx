import React from "react";
import "./BahrainAttestation.css";
import BahrainHeading from "./BahrainHeading/BahrainHeading";
import BahrainMainCard from "./BahrainCard/BahrainMainCard";
import BahrainCertificate from "./BahrainCertificate/BahrainCertificate";
import BahrainMofa from "./BahrainMofa/BahrainMofa";
import BahrainBlore from "./BahrainBlore/BahrainBlore";
import BahrainAbout from "./BahrainAbout/BahrainAbout";
import BahrainReq from "./BahrainReq/BahrainReq";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import WhyBlock from "../../WhyBlock/WhyBlock";
import BahrainFaq from "./BahrainFaq/BahrainFaq";
import BahrainSeo from "./BahrainSeo/BahrainSeo";
import { Helmet } from "react-helmet";

const BahrainAttestation = () => {
  return (
    <div className="bahrainAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bahrain Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Bahrain Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/bahrain-embassy-attestation-bangalore "
        />
      </Helmet>
      <BahrainHeading />
      <WhyBlock />
      <BahrainMainCard />
      <BahrainCertificate />
      <BahrainMofa />
      <BahrainBlore />
      <BahrainSeo />
      <BahrainReq />
      <BahrainAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <BahrainFaq />
    </div>
  );
};

export default BahrainAttestation;
