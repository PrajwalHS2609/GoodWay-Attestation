import React from "react";
import KaranatakaHrdWhat from "../KaranatakaHrd/KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "../KaranatakaHrd/WhyKaranatakaHrd/WhyHrd";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import KeralaHead from "./KeralaHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const KeralaHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kerala State HRD & Home Department Services in Bangalore</title>
        <meta
          name="description"
          content="Kerala State HRD & Home Department Services in Bangalore. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/kerala-hrd-home-department-attestation"
        />
      </Helmet>
      <KeralaHead />
      <WhyBlock />
      <KaranatakaHrdWhat />
      <WhyHrd />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default KeralaHrdPage;
