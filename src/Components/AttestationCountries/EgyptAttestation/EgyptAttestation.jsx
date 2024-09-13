import React from "react";
import "./../BahrainAttestation/BahrainAttestation.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import EgyptHeading from './EgyptHeading/EgyptHeading';
import EgyptBlore from "./EgyptBlore/EgyptBlore";
import EgyptMofa from './EgyptMofa/EgyptMofa';
import EgyptCard from './EgyptCard/EgyptCard';
import EgyptCertificate from "./EgyptCertificate/EgyptCertificate";
import WhyBlock from "../../WhyBlock/WhyBlock";
import EgyptSeo from "./EgyptSeo/EgyptSeo";

const EgyptAttestation = () => {
  return (
    <div className="bahrainAttestationPage">
      <EgyptHeading/>
      <WhyBlock/>
      <EgyptCard/>
      <EgyptCertificate/>
      <EgyptMofa/>
      <EgyptBlore/>
      <EgyptSeo/>
      <EgyptSeo/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default EgyptAttestation;
