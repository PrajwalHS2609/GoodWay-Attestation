import React from "react";
import KaranatakaHrdWhat from "../KaranatakaHrd/KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "../KaranatakaHrd/WhyKaranatakaHrd/WhyHrd";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MaharastraHead from "./MaharastraHead";
import MaharastraHeadContent from "./MaharastraHeadContent";
import HrdProcess from "./HrdProcess";
import HrdDocs from "./HrdDocs";
import WhyBlock from "../../WhyBlock/WhyBlock";

const MaharastraHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <MaharastraHead/>
      <WhyBlock />
      <MaharastraHeadContent/>
      <KaranatakaHrdWhat />
      <WhyHrd />
      <HrdProcess/>
      <HrdDocs/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MaharastraHrdPage;
