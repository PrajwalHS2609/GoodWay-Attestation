import React from "react";
import EachStepImp from "../DegreeCertApostille/EachStepImp/EachStepImp";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MarriageCertHead from "./MarriageCertHead";
import MarriageCertHeadContent from "./MarriageCertHeadContent";
import MarriageCertImp from "./MarriageCertImp";
import MarriageCertProcedure from "./MarriageCertProcedure";
import ApostilleWhat from "../DegreeCertApostille/ApostilleWhat/ApostilleWhat";
import MarriageCertChallenge from "./MarriageCertChallenge";
import MarriageCertOvercome from "./MarriageCertOvercome";
import MarriageCertExp from "./MarriageCertExp";
import WhyBlock from "../../WhyBlock/WhyBlock";

const MarriageCertApostille = () => {
  return (
    <div className="degreeCertApostille">
      <MarriageCertHead />
      <WhyBlock />
      <MarriageCertHeadContent />
      <MarriageCertImp />
      <ApostilleWhat />
      <MarriageCertProcedure />
      <MarriageCertChallenge />
      <MarriageCertOvercome />
      <EachStepImp />
      <MarriageCertExp />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MarriageCertApostille;
