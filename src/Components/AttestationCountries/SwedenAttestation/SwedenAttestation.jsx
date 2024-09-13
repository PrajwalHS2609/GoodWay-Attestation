import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import SwedenHeading from './SwedenHeading/SwedenHeading';
import SwedenCard from './SwedenCard/SwedenCard';
import WhyBlock from './../../WhyBlock/WhyBlock';
import SwedenMofa from './SwedenMofa/SwedenMofa';
import SwedenCertificate from './SwedenCertificate/SwedenCertificate';
import SwedenReq from './SwedenReq/SwedenReq';
import SwedenBlore from './SwedenBlore/SwedenBlore';

const SwedenAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <SwedenHeading />
      <WhyBlock />
      <SwedenCard />
      <SwedenCertificate />
      <SwedenMofa />
      {/* <SwedenAbout /> */}
      {/* <SwedenService /> */}
      <SwedenBlore />
      <SwedenReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default SwedenAttestation;
