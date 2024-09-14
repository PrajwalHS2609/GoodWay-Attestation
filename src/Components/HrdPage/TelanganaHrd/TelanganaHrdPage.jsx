import React from "react";
import KaranatakaHrdWhat from "../KaranatakaHrd/KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "../KaranatakaHrd/WhyKaranatakaHrd/WhyHrd";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import TelanganaHead from "./TelanganaHead";
import TelanganaHeadContent from "./TelanganaHeadContent";
import HrdProcess from "./HrdProcess";
import HrdDocs from "./HrdDocs";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const TelanganaHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Telangana State HRD & Home Department Services in Bangalore
        </title>
        <meta
          name="description"
          content="Telangana State HRD & Home Department Services in Bangalore. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/telangana-hrd-home-department-attestation"
        />
      </Helmet>
      <TelanganaHead />
      <WhyBlock />
      <TelanganaHeadContent />
      <KaranatakaHrdWhat />
      <HrdProcess />
      <HrdDocs />
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

export default TelanganaHrdPage;
