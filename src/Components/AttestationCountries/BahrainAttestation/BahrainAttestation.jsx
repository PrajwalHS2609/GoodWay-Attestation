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

const BahrainAttestation = () => {
  return (
    <div className="bahrainAttestationPage">
      <BahrainHeading />
      <WhyBlock />
      <BahrainMainCard />
      <BahrainCertificate />
      <BahrainMofa />
      <BahrainBlore />
      <BahrainSeo/>
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
