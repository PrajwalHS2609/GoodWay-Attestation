import React from "react";
import "./MeaPage.css";
import MeaHead from "./MeaHead/MeaHead";
import MeaHeadContent from "./MeaHeadContent/MeaHeadContent";
import MeaMain from "./MeaMain/MeaMain";
import MeaBlore from "./MeaBlore/MeaBlore";
import MeaTime from "./MeaTime/MeaTime";
import MeaBloreCert from "./MeaBloreCert/MeaBloreCert";
import MeaProcedure from "./MeaProcedure/MeaProcedure";
import WhyBlock from "../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
const MeaPage = () => {
  return (
    <div className="meaPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          MEA Attestation & Apostille Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="MEA Attestation & Apostille Services in Bangalore Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/mea-attestation-apostille-services"
        />
      </Helmet>
      <MeaHead />
      <WhyBlock />
      <MeaHeadContent />
      <MeaMain />
      <MeaBlore />
      <MeaTime />
      <MeaBloreCert />
      <MeaProcedure />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MeaPage;
