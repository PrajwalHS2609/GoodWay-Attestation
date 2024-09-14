import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import AustriaHeading from "./AustriaHeading/AustriaHeading";
import AustriaBlore from "./AustriaBlore/AustriaBlore";
import AustriaReq from "./AustriaReq/AustriaReq";
import AustriaMofa from "./AustriaMofa/AustriaMofa";
import AustriaCertificate from "./AustriaCertificate/AustriaCertificate";
import AustriaCard from "./AustriaCard/AustriaCard";
import AustriaBloreCert from "./AustriaBloreCert/AustriaBloreCert";
import AustriaFaq from "./AustriaFaq/AustriaFaq";
import AustriaSeo from "./AustriaSeo/AustriaSeo";
import { Helmet } from "react-helmet";

const AustriaApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Austria Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Austria Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/austria-apostille-services-bangalore"
        />
      </Helmet>
      <AustriaHeading />
      <AustriaCard />
      <AustriaCertificate />
      <AustriaMofa />
      {/* <AustriaService /> */}
      <AustriaBloreCert />
      <AustriaBlore />
      <AustriaSeo />
      <AustriaReq />
      {/* <AustriaAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <AustriaFaq />
    </div>
  );
};

export default AustriaApostille;
