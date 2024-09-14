import React from "react";
import "./../BahrainAttestation/BahrainAttestation.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import AustraliaHeading from "./AustraliaHeading/AustraliaHeading";
import AustraliaMofa from "./AustraliaMofa/AustraliaMofa";
import WhyBlock from "../../WhyBlock/WhyBlock";
import AustraliaCard from './AustraliaCard/AustraliaCard';
import AustraliaCertificate from './AustraliaCertificate/AustraliaCertificate';
import AustraliaBlore from './AustraliaBlore/AustraliaBlore';
import AustraliaReq from './AustraliaReq/AustraliaReq';
import AustraliaService from "./AustraliaService/AustraliaService";
import AustraliaBloreCert from "./AustraliaBloreCert/AustraliaBloreCert";
import AustraliaFaq from "./AustraliaFaq/AustraliaFaq";
import AustraliaSeo from "./AustraliaSeo/AustraliaSeo";
import { Helmet } from "react-helmet";

const AustraliaApostille = () => {
  return (
    <div className="bahrainAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Australia Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Australia Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/australia-apostille-attestation-bangalore"
        />
      </Helmet>
      <AustraliaHeading/>
      <WhyBlock/>
      <AustraliaCard/>
      <AustraliaCertificate/>
      <AustraliaMofa/>
      <AustraliaService/>
      <AustraliaBloreCert/>
      <AustraliaBlore/>
      <AustraliaSeo/>
      <AustraliaReq/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <AustraliaFaq />
    </div>
  );
};

export default AustraliaApostille;
