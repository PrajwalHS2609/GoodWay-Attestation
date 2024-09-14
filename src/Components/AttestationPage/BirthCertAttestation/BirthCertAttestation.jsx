import React from "react";
import "./BirthCertAttestation.css";
import BirthCertHeadContent from "./BirthCertHeadContent/BirthCertHeadContent";
import BirthCertProcedure from "./BirthCertProcedure/BirthCertProcedure";
import BirthCertPurpose from "./BirthCertPurpose/BirthCertPurpose";
import BirthCertImp from "./BirthCertImp/BirthCertImp";
import BirthCertExp from "./BirthCertExp/BirthCertExp";
import BirthImpDoc from "./BirthImpDoc/BirthImpDoc";
import BirthCertBenefits from "./BirthCertBenefits/BirthCertBenefits";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Review from "../../Review/Review";
import Benefits from "../../Benefits/Benefits";
import Faq from "../../HomePage/Faq/Faq";
import BirthCertHead from "./BirthCertHead/BirthCertHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";
const BirthCertAttestation = () => {
  return (
    <div className="birthCertContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Birth Certificate Attestation in Bangalore at Lowest Price
        </title>
        <meta
          name="description"
          content="Birth Certificate Attestation in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/birth-certificate-attestation-bangalore"
        />
      </Helmet>
      <BirthCertHead />
      <WhyBlock />
      <BirthCertHeadContent />
      <BirthImpDoc />
      <BirthCertProcedure />
      <BirthCertPurpose />
      <BirthCertImp />
      <BirthCertExp />
      <BirthCertBenefits />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default BirthCertAttestation;
