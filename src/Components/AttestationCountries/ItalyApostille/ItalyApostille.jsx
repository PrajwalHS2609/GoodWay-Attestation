import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
// import ItalyService from "./ItalyService/ItalyService";
import ItalyMofa from "./ItalyMofa/ItalyMofa";
import ItalyCertificate from "./ItalyCertificate/ItalyCertificate";
import ItalyCard from "./ItalyCard/ItalyCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import ItalyHeading from "./ItalyHeading/ItalyHeading";
import ItalyBlore from "./ItalyBlore/ItalyBlore";
import ItalyReq from "./ItalyReq/ItalyReq";
import ItalyBloreCert from "./ItalyBloreCert/ItalyBloreCert";
import ItalyFaq from "./ItalyFaq/ItalyFaq";
import ItalySeo from "./ItalySeo/ItalySeo";
import { Helmet } from "react-helmet";

const ItalyApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Italy Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Italy Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/italy-apostille-services-bangalore"
        />
      </Helmet>
      <ItalyHeading />
      <WhyBlock />
      <ItalyCard />
      <ItalyCertificate />
      <ItalyMofa />
      {/* <ItalyService /> */}
      <ItalyBloreCert />
      <ItalyBlore />
      <ItalySeo />
      <ItalyReq />
      {/* <ItalyAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <ItalyFaq />
    </div>
  );
};

export default ItalyApostille;
