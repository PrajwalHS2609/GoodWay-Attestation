import React from "react";
import "./UaeAttestationPage.css";
import UaeAttestationHeading from "./UaeAttestationHeading/UaeAttestationHeading";
import UaeAttestationCardMain from "./UaeAttestationCard/UaeAttestationCardMain";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import UaeCertificate from "./UaeCertificate/UaeCertificate";
import UaeMofa from "./UaeMofa/UaeMofa";
import UaeBlore from "./UaeBlore/UaeBlore";
import UaeReq from "./UaeReq/UaeReq";
import UaeAbout from "./UaeAbout/UaeAbout";
import UaeService from "./UaeService/UaeService";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import UaeFaq from "./UaeFaq/UaeFaq";
import UaeSeo from "./UaeSeo/UaeSeo";
import { Helmet } from "react-helmet";


const UaeAttestationPage = () => {
  return (
    <div className="uaeAttestationPage">
            <Helmet>
        <meta charSet="utf-8" />
        <title>
        UAE Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="UAE Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/uae-embassy-attestation-bangalore"
        />
      </Helmet>
      <UaeAttestationHeading />
      <WhyBlock />
      <UaeAttestationCardMain />
      <UaeCertificate />
      <UaeMofa />
      <UaeService />
      <UaeBlore />
      <UaeSeo/>
      <UaeReq />
      <UaeAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <UaeFaq />
    </div>
  );
};

export default UaeAttestationPage;
