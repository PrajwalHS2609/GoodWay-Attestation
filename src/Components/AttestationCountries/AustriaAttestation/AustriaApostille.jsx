import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import AustriaHeading from "./AustriaHeading/AustriaHeading";
import AustriaBlore from './AustriaBlore/AustriaBlore';
import AustriaReq from "./AustriaReq/AustriaReq";
import AustriaMofa from './AustriaMofa/AustriaMofa';
import AustriaCertificate from './AustriaCertificate/AustriaCertificate';
import AustriaCard from './AustriaCard/AustriaCard';
import AustriaBloreCert from "./AustriaBloreCert/AustriaBloreCert";
import AustriaFaq from './AustriaFaq/AustriaFaq';
import AustriaSeo from "./AustriaSeo/AustriaSeo";

const AustriaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <AustriaHeading />
      <AustriaCard />
      <AustriaCertificate />
      <AustriaMofa />
      {/* <AustriaService /> */}
      <AustriaBloreCert/>
      <AustriaBlore />
      <AustriaSeo/>
      <AustriaReq />
      {/* <AustriaAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <AustriaFaq />
    </div>
  );
};

export default AustriaAttestation;
