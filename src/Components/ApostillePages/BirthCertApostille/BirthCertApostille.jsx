import React from "react";
import BirthCertHeadContent from "./BirthCertHeadContent";
import ApostilleWhat from "../DegreeCertApostille/ApostilleWhat/ApostilleWhat";
import BirthCertProcedure from "./BirthCertProcedure";
import BirthCertChallenges from "./BirthCertChallenges";
import BirthCertOvercome from "./BirthCertOvercome";
import BirthCertExp from "./BirthCertExp";
import EachStepImp from "../DegreeCertApostille/EachStepImp/EachStepImp";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import BirthCertImp from "./BirthCertImp";
import BirthCertHead from "./BirthCertHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const BirthCertApostille = () => {
  return (
    <div className="birthCertContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Birth Certificate Apostille in Bangalore at Lowest Price</title>
        <meta
          name="description"
          content="Birth Certificate Apostille in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/birth-certificate-apostille-bangalore"
        />
      </Helmet>
      <BirthCertHead />
      <WhyBlock />
      <BirthCertHeadContent />
      <BirthCertImp />
      <ApostilleWhat />
      <BirthCertProcedure />
      <BirthCertChallenges />
      <BirthCertOvercome />
      <EachStepImp />
      <BirthCertExp />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default BirthCertApostille;
