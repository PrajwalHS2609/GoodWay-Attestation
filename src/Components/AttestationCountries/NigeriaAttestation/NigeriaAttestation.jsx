import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import NigeriaService from "./NigeriaService/NigeriaService";
import WhyBlock from "../../WhyBlock/WhyBlock";
import NigeriaHeading from './NigeriaHeading/NigeriaHeading';
import NigeriaCard from './NigeriaCard/NigeriaCard';
import NigeriaCertificate from './NigeriaCertificate/NigeriaCertificate';
import NigeriaMofa from './NigeriaMofa/NigeriaMofa';
import NigeriaBlore from './NigeriaBlore/NigeriaBlore';
import NigeriaReq from './NigeriaReq/NigeriaReq';
import NigeriaSeo from "./NigeriaSeo/NigeriaSeo";

const NigeriaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <NigeriaHeading />
      <WhyBlock />
      <NigeriaCard />
      <NigeriaCertificate />
      <NigeriaMofa />
      <NigeriaService/>
      <NigeriaBlore />
      <NigeriaSeo/>
      <NigeriaReq />
      {/* <NigeriaAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default NigeriaAttestation;
