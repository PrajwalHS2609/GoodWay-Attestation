import React from "react";
import { Helmet } from "react-helmet";
import WhyBlock from "../../WhyBlock/WhyBlock";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import KuwaitVisaStampingContent from "./KuwaitVisaStampingContent/KuwaitVisaStampingContent";
import KuwaitVisaStampingHeader from "./KuwaitVisaStampingHeader/KuwaitVisaStampingHeader";

const KuwaitVisaStamping = () => {
  return (
    <div className="karanatakaHrdContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kuwait Visa Stamping Services in Bangalore, Karnataka at Best Price
        </title>
        <meta
          name="description"
          content="Kuwait Visa Stamping Services in Bangalore, Karnataka at Best Price. Goodway Attestation has 16 years of Experience, Govt Approved, ISO Certified & More than 25000+ Customer Reviews."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/kuwait-visa-stamping-bangalore"
        />
      </Helmet>
      <KuwaitVisaStampingHeader />
      <WhyBlock />
      <KuwaitVisaStampingContent />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default KuwaitVisaStamping;
