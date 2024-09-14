import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeMarquee from "../../Marquee/HomeMarquee";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import LithuaniaBlore from "./LithuaniaBlore/LithuaniaBlore";
import LithuaniaMofa from "./LithuaniaMofa/LithuaniaMofa";
import LithuaniaCertificate from "./LithuaniaCertificate/LithuaniaCertificate";
import LithuaniaCard from "./LithuaniaCard/LithuaniaCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import LithuaniaHeading from "./LithuaniaHeading/LithuaniaHeading";
import LithuaniaReq from "./LithuaniaReq/LithuaniaReq";
import LithuaniaBloreCert from "./LithuaniaBloreCert/LithuaniaBloreCert";
import LithuaniaFaq from "./LithuaniaFaq/LithuaniaFaq";
import LithuaniaSeo from "./LithuaniaSeo/LithuaniaSeo";
import { Helmet } from "react-helmet";

const LithuaniaApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Lithuania Apostille Services in Bangalore Karnataka at Lowest Price{" "}
        </title>
        <meta
          name="description"
          content="Lithuania Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/lithuania-apostille-services-bangalore"
        />
      </Helmet>
      <LithuaniaHeading />
      <WhyBlock />
      <LithuaniaCard />
      <LithuaniaCertificate />
      <LithuaniaMofa />
      {/* <LithuaniaService /> */}
      <LithuaniaBloreCert />
      <LithuaniaBlore />
      <LithuaniaSeo />
      <LithuaniaReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <LithuaniaFaq />
    </div>
  );
};

export default LithuaniaApostille;
