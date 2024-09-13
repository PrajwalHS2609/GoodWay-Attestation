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

const GermanyAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <GermanyHeading />
      <WhyBlock />
      <GermanyCard />
      <GermanyCertificate />
      <GermanyMofa />
      {/* <GermanyAbout /> */}
      <GermanyService />
      <GermanyBloreCert />
      <GermanyBlore />
      <GermanySeo/>
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

export default GermanyAttestation;
