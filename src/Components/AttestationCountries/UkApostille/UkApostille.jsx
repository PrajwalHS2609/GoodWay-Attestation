import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import UkHeading from "./UkHeading/UkHeading";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import UkCard from "./UkCard/UkCard";
import UkCertificate from "./UkCertificate/UkCertificate";
import UkMofa from "./UkMofa/UkMofa";
// import UkService from "./UkService/UkService";
import UkBlore from "./UkBlore/UkBlore";
import UkReq from "./UkReq/UkReq";
import UkBloreCert from "./UkBloreCert/UkBloreCert";
import UkFaq from "./UkFaq/UkFaq";
import UkSeo from "./UkSeo/UkSeo";
import { Helmet } from "react-helmet";

const UkApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          UK Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="UK Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/uk-apostille-services-bangalore"
        />
      </Helmet>
      <UkHeading />
      <WhyBlock />
      <UkCard />
      <UkCertificate />
      <UkMofa />
      {/* <UkService /> */}
      <UkBloreCert />
      <UkBlore />
      <UkSeo />
      <UkReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <UkFaq />
    </div>
  );
};

export default UkApostille;
