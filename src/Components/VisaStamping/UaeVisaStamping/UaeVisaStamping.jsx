import React from "react";
import { Helmet } from "react-helmet";
import WhyBlock from "../../WhyBlock/WhyBlock";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import UaeVisaStampingHeader from "./UaeVisaStampingHeader/UaeVisaStampingHeader";
import UaeVisaStampingContent from "./UaeVisaStampingContent/UaeVisaStampingContent";

const UaeVisaStamping = () => {
  return (
    <div className="karanatakaHrdContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/uae-visa-stamping-bangalore"
        />
      </Helmet>
      <UaeVisaStampingHeader />
      <WhyBlock />
      <UaeVisaStampingContent />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default UaeVisaStamping;
