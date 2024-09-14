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
import { Helmet } from "react-helmet";

const MarriageCertApostille = () => {
  return (
    <div className="degreeCertApostille">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Marriage Certificate Apostille in Bangalore at Lowest Price
        </title>
        <meta
          name="description"
          content="Marriage Certificate Apostille in Bangalore at Lowest Price	Marriage Certificate Apostille in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/marriage-certificate-apostille-bangalore"
        />
      </Helmet>
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
