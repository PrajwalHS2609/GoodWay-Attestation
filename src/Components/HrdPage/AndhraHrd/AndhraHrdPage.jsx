import React from "react";
import KaranatakaHrdWhat from "../KaranatakaHrd/KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "../KaranatakaHrd/WhyKaranatakaHrd/WhyHrd";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import HrdDocs from "./HrdDocs";
import HrdProcess from "./HrdProcess";
import AndhraHead from "./AndhraHead";
import AndhraHeadContent from "./AndhraHeadContent";
import WhyBlock from "../../WhyBlock/WhyBlock";

const AndhraHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <AndhraHead />
      <WhyBlock />
      <AndhraHeadContent />
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

export default AndhraHrdPage;
