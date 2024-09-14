import React from "react";
import ApostilleWhat from "./ApostilleWhat/ApostilleWhat";
import EachStepImp from "./EachStepImp/EachStepImp";
import DegreeExp from "./DegreeExp";
import DegreeHeadContent from "./DegreeHeadContent";
import DegreeCertImp from "./DegreeCertImp";
import DegreeChallenge from "./DegreeChallenge";
import DegreeOverCome from "./DegreeOverCome";
import DegreeProcedure from "./DegreeProcedure";
import DegreeHead from "./DegreeHead";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const DegreeCertApostille = () => {
  return (
    <div className="degreeCertApostille">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Degree Certificate Apostille in Bangalore at Lowest Price</title>
        <meta
          name="description"
          content="Degree Certificate Apostille in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/degree-certificate-apostille-bangalore"
        />
      </Helmet>
      <DegreeHead />
      <WhyBlock />
      <DegreeHeadContent />
      <DegreeCertImp />
      <ApostilleWhat />
      <DegreeProcedure />
      <DegreeChallenge />
      <DegreeOverCome />
      <EachStepImp />
      <DegreeExp />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default DegreeCertApostille;
