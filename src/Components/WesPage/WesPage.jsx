import React from "react";
import WesHead from "./WesHead/WesHead";
import WesHeadContent from "./WesHeadContent/WesHeadContent";
import WesDocs from "./WesDocs/WesDocs";
import WesVerify from "./WesVerify/WesVerify";
import WesBenefits from "./WesBenefits/WesBenefits";
import WesEval from "./WesEval/WesEval";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import WhyBlock from "../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const WesPage = () => {
  return (
    <div className="wesPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          WES Attestation in Bangalore - Certificate Verification Services in
          Karnataka
        </title>
        <meta
          name="description"
          content="WES Attestation in Bangalore at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/wes-attestation-bangalore"
        />
      </Helmet>
      <WesHead />
      <WhyBlock />
      <WesHeadContent />
      <WesDocs />
      <WesEval />
      <WesVerify />
      <WesBenefits />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default WesPage;
