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

const TelanganaHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <TelanganaHead/>
      <WhyBlock />
      <TelanganaHeadContent/>
      <KaranatakaHrdWhat />
      <HrdProcess/>
      <HrdDocs/>
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
