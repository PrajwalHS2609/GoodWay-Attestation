import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import FranceHeading from "./FranceHeading/FranceHeading";
import FranceService from "./FranceService/FranceService";
import FranceBlore from "./FranceBlore/FranceBlore";
import FranceReq from "./FranceReq/FranceReq";
import WhyBlock from "../../WhyBlock/WhyBlock";
import FranceMofa from "./FranceMofa/FranceMofa";
import FranceCard from "./FranceCard/FranceCard";
import FranceCertificate from "./FranceCertificate/FranceCertificate";
import FranceBloreCert from "./FranceBloreCert/FranceBloreCert";
import FranceFaq from "./FranceFaq/FranceFaq";
import FranceSeo from "./FranceSeo/FranceSeo";

const FranceApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <FranceHeading />
      <WhyBlock />
      <FranceCard />
      <FranceCertificate />
      <FranceMofa />
      {/* <FranceAbout /> */}
      <FranceService />
      <FranceBloreCert />
      <FranceBlore />
      <FranceSeo />
      <FranceReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <FranceFaq />
    </div>
  );
};

export default FranceApostille;
