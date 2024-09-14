import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import SaudiPccIntro from "./SaudiPccIntro";
import SaudiPccImp from "./SaudiPccImp";
import SaudiPccChallenges from "./SaudiPccChallenges";
import SaudiPccOvercome from "./SaudiPccOvercome";
import SaudiPccExp from "./SaudiPccExp";
import ImpEachStep from "../ImpEachStep/ImpEachStep";
import SaudiPccUse from "./SaudiPccUse";
import WhatIsSaudi from "./WhatIsSaudi";
import SaudiPccProcedure from "./SaudiPccProcedure";
import SaudiHead from "./SaudiHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const SaudiPccPage = () => {
  return (
    <div className="pccPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Saudi PCC Attestation Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Saudi Arabia PCC Attestation Services in Bangalore Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/saudi-pcc-attestation-bangalore"
        />
      </Helmet>
      <SaudiHead />
      <WhyBlock />
      <SaudiPccIntro />
      <SaudiPccImp />
      <WhatIsSaudi />
      <SaudiPccProcedure />
      <SaudiPccChallenges />
      <SaudiPccOvercome />
      <SaudiPccExp />
      <ImpEachStep />
      <SaudiPccUse />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default SaudiPccPage;
