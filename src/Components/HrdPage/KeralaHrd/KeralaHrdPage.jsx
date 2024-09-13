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

const KeralaHrdPage = () => {
  return (
    <div className="karanatakaHrdContainer">
      <KeralaHead/>
      <WhyBlock />
      <KaranatakaHrdWhat/>
      <WhyHrd/>
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
