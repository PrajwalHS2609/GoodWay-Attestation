import React from "react";
import KaranatakaHrdWhat from "../KaranatakaHrd/KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "../KaranatakaHrd/WhyKaranatakaHrd/WhyHrd";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import HrdProcess from "./HrdProcess";
import HrdDocs from "./HrdDocs";
import TamilNaduHeadContent from "./TamilNaduHeadContent";
import TamilHead from "./TamilHead";
import WhyBlock from "../../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const TamilNaduHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Tamilnadu State HRD & Home Department Services in Bangalore
        </title>
        <meta
          name="description"
          content="Tamilnadu State HRD & Home Department Services in Bangalore. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link rel="canonical" href="https://goodway-attestation.com/tamilnadu-hrd-home-department-attestation" />
      </Helmet>
      <TamilHead />
      <WhyBlock />
      <TamilNaduHeadContent />
      <KaranatakaHrdWhat />
      <WhyHrd />
      <HrdProcess />
      <HrdDocs />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default TamilNaduHrdPage;
