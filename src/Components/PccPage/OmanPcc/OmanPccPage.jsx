import React from "react";
import ImpEachStep from "../ImpEachStep/ImpEachStep";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import OmanPccIntro from "./OmanPccIntro";
import OmanPccImp from "./OmanPccImp";
import WhatIs from "./WhatIs";
import OmanPccExp from "./OmanPccExp";
import OmanProcedure from "./OmanProcedure";
import OmanPccChallenges from "./OmanPccChallenges";
import OmanPccUse from "./OmanPccUse";
import OmanPccOvercome from "./OmanPccOvercome";
import OmanPccHead from "./OmanPccHead";
import WhyBlock from "../../WhyBlock/WhyBlock";

const OmanPccPage = () => {
  return (
    <div className="pccPageContainer">
      <OmanPccHead/>
      <WhyBlock/>
        <OmanPccIntro/>
        <OmanPccImp/>
        <WhatIs/>
        <OmanProcedure/>
        <OmanPccChallenges/>
        <OmanPccOvercome/>
        <OmanPccExp/>
      <ImpEachStep />
      <OmanPccUse/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default OmanPccPage;
