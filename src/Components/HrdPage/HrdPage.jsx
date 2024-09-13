import React from "react";
import "./HrdPage.css";
import HrdHead from "./HrdHead/HrdHead";
import HrdContent from "./HrdContent/HrdContent";
import HrdMain from "./HrdMain/HrdMain";
import HrdBlore from "./HrdBlore/HrdBlore";
import HrdTime from "./HrdTime/HrdTime";
import HdBlore from "./HdBlore/HdBlore";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import WhyBlock from './../WhyBlock/WhyBlock';
const HrdPage = () => {
  return (
    <div className="hrdContainer">
      <HrdHead />
      <WhyBlock/>
      <HrdContent />
      <HrdMain />
      <HrdBlore />
      <HrdTime />
      <HdBlore />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default HrdPage;
