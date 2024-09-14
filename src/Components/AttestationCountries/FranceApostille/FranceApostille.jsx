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
import { Helmet } from "react-helmet";

const FranceApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          France Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="France Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/france-apostille-services-bangalore"
        />
      </Helmet>
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
