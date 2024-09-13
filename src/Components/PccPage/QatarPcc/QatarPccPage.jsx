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

const QatarPccPage = () => {
  return (
    <div className="pccPageContainer">
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
