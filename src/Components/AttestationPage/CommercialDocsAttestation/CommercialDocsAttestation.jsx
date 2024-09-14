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
import { Helmet } from "react-helmet";
const CommercialDocsAttestation = () => {
  return (
    <div className="commercialDocsAttestation">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Commercial Documents Attestation in Bangalore at Lowest Price
        </title>
        <meta
          name="description"
          content="Commercial Documents Attestation in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/commercial-documents-attestation-bangalore"
        />
      </Helmet>
      <CommercialDocsHead />
      <WhyBlock />
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
