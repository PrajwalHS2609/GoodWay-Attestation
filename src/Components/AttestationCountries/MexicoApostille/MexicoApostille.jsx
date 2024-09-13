import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import MexicoHeading from "./MexicoHeading/MexicoHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import MexicoMofa from "./MexicoMofa/MexicoMofa";
import MexicoBlore from "./MexicoBlore/MexicoBlore";
import MexicoCertificate from "./MexicoCertificate/MexicoCertificate";
// import MexicoService from "./MexicoService/MexicoService";
import MexicoCard from "./MexicoCard/MexicoCard";
import MexicoReq from "./MexicoReq/MexicoReq";
import MexicoBloreCert from "./MexicoBloreCert/MexicoBloreCert";
import MexicoFaq from "./MexicoFaq/MexicoFaq";
import MexicoSeo from "./MexicoSeo/MexicoSeo";

const MexicoApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <MexicoHeading />
      <WhyBlock />
      <MexicoCard />
      <MexicoCertificate />
      <MexicoMofa />
      {/* <MexicoService /> */}
      <MexicoBloreCert />
      <MexicoBlore />
      <MexicoSeo/>
      <MexicoReq />
      {/* <MexicoAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <MexicoFaq />
    </div>
  );
};

export default MexicoApostille;
