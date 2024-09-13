import React from "react";
import "./KaranatakaHrdPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import KaranatakaHrdHead from "./KaranatakaHrdHead/KaranatakaHrdHead";
import KaranatakaHrdHeadContent from "./KaranatakaHrdHeadContent/KaranatakaHrdHeadContent";
import KaranatakaHrdWhat from "./KaranatakaHrdWhat/KaranatakaHrdWhat";
import WhyHrd from "./WhyKaranatakaHrd/WhyHrd";
import HrdProcess from "./HrdProcess/HrdProcess";
import HrdDocs from "./HrdDocs/HrdDocs";
import WhyBlock from "../../WhyBlock/WhyBlock";
const KaranatakaHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <KaranatakaHrdHead />
      <WhyBlock />
      <KaranatakaHrdHeadContent />
      <KaranatakaHrdWhat />
      <WhyHrd/>
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

export default KaranatakaHrdPage;
