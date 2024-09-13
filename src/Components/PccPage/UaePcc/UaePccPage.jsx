import React from "react";
import UaePccIntro from "./UaePccIntro";
import UaePccImp from "./UaePccImp";
import WhatUaePcc from "./WhatUaePcc";
import UaePccProcedure from "./UaePccProcedure";
import UaePccChallenges from "./UaePccChallenges";
import UaePccOvercome from "./UaePccOvercome";
import UaePccExp from "./UaePccExp";
import ImpEachStep from "../ImpEachStep/ImpEachStep";
import UaePccUse from "./UaePccUse";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import UaePccHead from "./UaePccHead";
import WhyBlock from "../../WhyBlock/WhyBlock";

const UaePccPage = () => {
  return (
    <div className="pccPageContainer">
      <UaePccHead />
      <WhyBlock />
      <UaePccIntro />
      <WhyBlock />
      <UaePccImp />
      <WhatUaePcc />
      <UaePccProcedure />
      <UaePccChallenges />
      <UaePccOvercome />
      <UaePccExp />
      <ImpEachStep />
      <UaePccUse />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default UaePccPage;
