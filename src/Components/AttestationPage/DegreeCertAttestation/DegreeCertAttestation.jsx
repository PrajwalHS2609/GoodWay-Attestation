import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import DegreeCertHead from "./DegreeCertHead";
import DegreeCertHeadContent from "./DegreeCertHeadContent";
import DegreeCertImp from "./DegreeCertImp";
import DegreeCertProcess from "./DegreeCertProcess";
import DegreeCertReq from "./DegreeCertReq";
import DegreeCertAssist from "./DegreeCertAssist";
import DegreeGuide from "./DegreeGuide";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const DegreeCertAttestation = () => {
  return (
    <div className="birthCertContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Degree Certificate Attestation in Bangalore at Lowest Price
        </title>
        <meta
          name="description"
          content="Degree Certificate Attestation in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/degree-certificate-attestation-bangalore"
        />
      </Helmet>
      <DegreeCertHead />
      <WhyBlock />
      <DegreeCertHeadContent />
      <DegreeCertImp />
      <DegreeCertProcess />
      <DegreeCertReq />
      <DegreeCertAssist />
      <DegreeGuide />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default DegreeCertAttestation;
