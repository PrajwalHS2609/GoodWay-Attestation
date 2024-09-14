import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MalaysiaReq from "./MalaysiaReq/MalaysiaReq";
import MalaysiaBlore from "./MalaysiaBlore/MalaysiaBlore";
import MalaysiaMofa from "./MalaysiaMofa/MalaysiaMofa";
import MalaysiaCertificate from "./MalaysiaCertificate/MalaysiaCertificate";
import MalaysiaCard from "./MalaysiaCard/MalaysiaCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import MalaysiaHeading from "./MalaysiaHeading/MalaysiaHeading";
import MalaysiaService from "./MalaysiaService/MalaysiaService";
import MalaysiaSeo from "./MalaysiaSeo/MalaysiaSeo";
import { Helmet } from "react-helmet";

const MalaysiaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Malaysia Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Malaysia Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/malaysia-embassy-attestation-bangalore"
        />
      </Helmet>
      <MalaysiaHeading />
      <WhyBlock />
      <MalaysiaCard />
      <MalaysiaCertificate />
      <MalaysiaMofa />
      <MalaysiaService />
      <MalaysiaBlore />
      <MalaysiaSeo />
      <MalaysiaReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MalaysiaAttestation;
