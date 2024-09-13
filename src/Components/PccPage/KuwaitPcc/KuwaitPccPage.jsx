import React from "react";
import Faq from "../../HomePage/Faq/Faq";
import Review from "../../Review/Review";
import Benefits from "../../Benefits/Benefits";
import OurServices from "../../HomePage/OurServices/OurServices";
import HomeMarquee from "../../Marquee/HomeMarquee";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import KuwaitPccIntro from "./KuwaitPccIntro";
import WhatIs from "./WhatIs";
import KuwaitPccImp from "./KuwaitPccImp";
import KuwaitProcedure from "./KuwaitProcedure";
import KuwaitPccExp from "./KuwaitPccExp";
import ImpEachStep from "../ImpEachStep/ImpEachStep";
import KuwaitPccUse from "./KuwaitPccUse";
import KuwaitPccOvercome from "./KuwaitPccOvercome";
import KuwaitPccChallenges from "./KuwaitPccChallenges";
import KuwaitPccHead from "./KuwaitPccHead";
import WhyBlock from "../../WhyBlock/WhyBlock";

const KuwaitPccPage = () => {
  return (
    <div className="pccPageContainer">
      <KuwaitPccHead/>
      <WhyBlock/>
      <KuwaitPccIntro />
      <KuwaitPccImp />
      <WhatIs />
      <KuwaitProcedure />
      <KuwaitPccChallenges />
      <KuwaitPccOvercome />
      <KuwaitPccExp/>
      <ImpEachStep />
      <KuwaitPccUse />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default KuwaitPccPage;
