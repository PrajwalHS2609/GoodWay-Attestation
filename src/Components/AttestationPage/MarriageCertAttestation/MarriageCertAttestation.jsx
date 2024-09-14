import React from "react";
import MarriageCertImp from "./MarriageCertImp/MarriageCertImp";
import MarriageCertPurpose from "./MarriageCertPurpose/MarriageCertPurpose";
import MarriageDoc from "./MarriageDoc/MarriageDoc";
import MarriageProcedure from "./MarriageProcedure/MarriageProcedure";
import MarriageBenefits from "./MarriageBenefits/MarriageBenefits";
import "./MarriageCertAttestation.css";
import MarriageCertExp from "./MarriageCertExp/MarriageCertExp";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MarriageCertHead from "./MarriageCertHead/MarriageCertHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";
const MarriageCertAttestation = () => {
  return (
    <div className="marriageCertContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Marriage Certificate Attestation in Bangalore at Lowest Price
        </title>
        <meta
          name="description"
          content="Marriage Certificate Attestation in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/marriage-certificate-attestation-bangalore"
        />
      </Helmet>
      <MarriageCertHead />
      <WhyBlock />
      <MarriageCertImp />
      <MarriageCertPurpose />
      <MarriageDoc />
      <MarriageProcedure />
      <MarriageBenefits />
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

export default MarriageCertAttestation;
