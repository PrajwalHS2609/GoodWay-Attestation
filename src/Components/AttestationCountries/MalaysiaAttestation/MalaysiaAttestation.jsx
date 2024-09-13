import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MalaysiaReq from "./MalaysiaReq/MalaysiaReq";
import MalaysiaBlore from "./MalaysiaBlore/MalaysiaBlore";
import MalaysiaMofa from "./MalaysiaMofa/MalaysiaMofa";
import MalaysiaCertificate from "./MalaysiaCertificate/MalaysiaCertificate";
import MalaysiaCard from "./MalaysiaCard/MalaysiaCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import MalaysiaHeading from "./MalaysiaHeading/MalaysiaHeading";
import MalaysiaService from "./MalaysiaService/MalaysiaService";
import MalaysiaSeo from "./MalaysiaSeo/MalaysiaSeo";

const MalaysiaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <MalaysiaHeading />
      <WhyBlock />
      <MalaysiaCard />
      <MalaysiaCertificate />
      <MalaysiaMofa />
      <MalaysiaService />
      <MalaysiaBlore />
      <MalaysiaSeo/>
      <MalaysiaReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MalaysiaAttestation;
