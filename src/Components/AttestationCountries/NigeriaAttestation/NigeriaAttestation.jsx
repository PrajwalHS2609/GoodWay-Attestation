import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import NigeriaService from "./NigeriaService/NigeriaService";
import WhyBlock from "../../WhyBlock/WhyBlock";
import NigeriaHeading from "./NigeriaHeading/NigeriaHeading";
import NigeriaCard from "./NigeriaCard/NigeriaCard";
import NigeriaCertificate from "./NigeriaCertificate/NigeriaCertificate";
import NigeriaMofa from "./NigeriaMofa/NigeriaMofa";
import NigeriaBlore from "./NigeriaBlore/NigeriaBlore";
import NigeriaReq from "./NigeriaReq/NigeriaReq";
import NigeriaSeo from "./NigeriaSeo/NigeriaSeo";
import { Helmet } from "react-helmet";

const NigeriaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nigeria Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Nigeria Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/nigeria-embassy-attestation-bangalore"
        />
      </Helmet>
      <NigeriaHeading />
      <WhyBlock />
      <NigeriaCard />
      <NigeriaCertificate />
      <NigeriaMofa />
      <NigeriaService />
      <NigeriaBlore />
      <NigeriaSeo />
      <NigeriaReq />
      {/* <NigeriaAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default NigeriaAttestation;
