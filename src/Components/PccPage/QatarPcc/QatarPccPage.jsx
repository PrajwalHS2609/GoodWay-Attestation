import React from "react";

import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import WhatIsQatarPcc from "./WhatIsQatarPcc";
import QatarPccIntro from "./QatarPccIntro";
import QatarPccImp from "./QatarPccImp";
import QatarPccProcedure from "./QatarPccProcedure";
import QatarPccChallenge from "./QatarPccChallenge";
import QatarPccOvercome from "./QatarPccOvercome";
import QatarPccExp from "./QatarPccExp";
import ImpEachStep from "../ImpEachStep/ImpEachStep";
import QatarPccUse from "./QatarPccUse";
import QatarPccHead from "./QatarPccHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const QatarPccPage = () => {
  return (
    <div className="pccPageContainer">
       <Helmet>
        <meta charSet="utf-8" />
        <title>
        Qatar PCC Attestation Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Qatar PCC Attestation Services in Bangalore Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/qatar-pcc-attestation-bangalore"
        />
      </Helmet>
      <QatarPccHead/>
      <WhyBlock/>
      <QatarPccIntro />
      <QatarPccImp />
      <WhatIsQatarPcc />
      <QatarPccProcedure />
      <QatarPccChallenge />
      <QatarPccOvercome />
      <QatarPccExp />
      <ImpEachStep />
      <QatarPccUse />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default QatarPccPage;
