import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import ChinaHeading from "./ChinaHeading/ChinaHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import ChinaCertificate from "./ChinaCertificate/ChinaCertificate";
import ChinaReq from "./ChinaReq/ChinaReq";
import ChinaAbout from "./ChinaAbout/ChinaAbout";
import ChinaCard from './ChinaCard/ChinaCard';
import ChinaBlore from "./ChinaBlore/ChinaBlore";
import ChinaMofa from "./ChinaMofa/ChinaMofa";
import ChinaFaq from './ChinaFaq/ChinaFaq';
import ChinaSeo from "./ChinaSeo/ChinaSeo";
const ChinaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <ChinaHeading />
      <WhyBlock />
      <ChinaCard />
      <ChinaCertificate />
      <ChinaMofa/>
      <ChinaBlore/>
      <ChinaSeo/>
      <ChinaReq />
      <ChinaAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <ChinaFaq />
    </div>
  );
};

export default ChinaAttestation;
