import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import GermanyHeading from "./GermanyHeading/GermanyHeading";
import GermanyCard from "./GermanyCard/GermanyCard";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import GermanyCertificate from "./GermanyCertificate/GermanyCertificate";
import GermanyMofa from "./GermanyMofa/GermanyMofa";
// import GermanyService from "./GermanyService/GermanyService";
import GermanyBlore from "./GermanyBlore/GermanyBlore";
import GermanyReq from "./GermanyReq/GermanyReq";
import GermanyService from "./GermanyService/GermanyService";
import GermanyBloreCert from "./GermanyBloreCert/GermanyBloreCert";
import GermanyFaq from "./GermanyFaq/GermanyFaq";
import GermanySeo from "./GermanySeo/GermanySeo";
import { Helmet } from "react-helmet";

const GermanyApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Germany Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Germany Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/germany-apostille-services-bangalore"
        />
      </Helmet>
      <GermanyHeading />
      <WhyBlock />
      <GermanyCard />
      <GermanyCertificate />
      <GermanyMofa />
      {/* <GermanyAbout /> */}
      <GermanyService />
      <GermanyBloreCert />
      <GermanyBlore />
      <GermanySeo />
      <GermanyReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <GermanyFaq />
    </div>
  );
};

export default GermanyApostille;
