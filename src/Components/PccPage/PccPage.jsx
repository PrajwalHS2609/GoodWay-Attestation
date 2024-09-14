import React from "react";
import PccHead from "./PccHead/PccHead";
import PccHeadContent from "./PccHeadContent/PccHeadContent";
import PccImp from "./PccImp/PccImp";
import WhatIsPcc from "./WhatIsPcc/WhatIsPcc";
import PccProcedure from "./PccProcedure/PccProcedure";
import PccChallenge from "./PccChallenge/PccChallenge";
import PccOverCome from "./PccOverCome/PccOverCome";
import ImpEachStep from "./ImpEachStep/ImpEachStep";
import PccUse from "./PccUse/PccUse";
import PccExp from "./PccExp/PccExp";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import WhyBlock from "../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const PccPage = () => {
  return (
    <div className="pccPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          PCC Attestation Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="PCC Attestation Services in Bangalore Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link rel="canonical" href="https://goodway-attestation.com/pcc-attestation-bangalore" />
      </Helmet>
      <PccHead />
      <WhyBlock />
      <PccHeadContent />
      <PccImp />
      <WhatIsPcc />
      <PccProcedure />
      <PccChallenge />
      <PccOverCome />
      <PccExp />
      <ImpEachStep />
      <PccUse />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default PccPage;
