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

const SaudiPccPage = () => {
  return (
    <div className="pccPageContainer">
      <SaudiHead/>
      <WhyBlock/>
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
