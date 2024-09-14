import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import VietnamHeading from "./VietnamHeading/VietnamHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import VietnamCard from "./VietnamCard/VietnamCard";
import VietnamCertificate from "./VietnamCertificate/VietnamCertificate";
import VietnamMofa from "./VietnamMofa/VietnamMofa";
import VietnamService from "./VietnamService/VietnamService";
import VietnamBlore from "./VietnamBlore/VietnamBlore";
import VietnamReq from "./VietnamReq/VietnamReq";
import VietnamFaq from "./VietnamFaq/VietnamFaq";
import VietnamSeo from "./VietnamSeo/VietnamSeo";
import { Helmet } from "react-helmet";

const VietnamAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Vietnam Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Vietnam Embassy Attestation Services in Bangalore Karnataka"
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/vietnam-embassy-attestation-bangalore"
        />
      </Helmet>
      <VietnamHeading />
      <WhyBlock />
      <VietnamCard />
      <VietnamCertificate />
      <VietnamMofa />
      <VietnamService />
      <VietnamBlore />
      <VietnamSeo />
      <VietnamReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <VietnamFaq />
    </div>
  );
};

export default VietnamAttestation;
