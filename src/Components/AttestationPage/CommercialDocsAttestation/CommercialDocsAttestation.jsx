import React from "react";
import "./CommercialDocsAttestation.css";
import CommercialDocsIntro from "./CommercialDocsIntro/CommercialDocsIntro";
import CommercialDocImp from "./CommercialDocImp/CommercialDocImp";
import CommercialDocProcedure from "./CommercialDocProcedure/CommercialDocProcedure";
import CommercialDocChallenges from "./CommercialDocChallenges/CommercialDocChallenges";
import CommercialDocOverCome from "./CommercialDocOverCome/CommercialDocOverCome";
import CommercialDocTypes from "./CommercialDocTypes/CommercialDocTypes";
import CommercialDocsHead from "./CommercialDocsHead/CommercialDocsHead";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import Benefits from "../../Benefits/Benefits";
import WhyBlock from "../../WhyBlock/WhyBlock";
const CommercialDocsAttestation = () => {
  return (
    <div className="commercialDocsAttestation">
      <CommercialDocsHead />
      <WhyBlock/>
      <CommercialDocsIntro />
      <CommercialDocImp />
      <CommercialDocTypes />
      <CommercialDocProcedure />
      <CommercialDocChallenges />
      <CommercialDocOverCome />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default CommercialDocsAttestation;
