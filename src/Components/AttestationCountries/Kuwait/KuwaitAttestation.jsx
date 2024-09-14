import React from "react";
import "./../BahrainAttestation/BahrainAttestation.css";
import Review from "../../Review/Review";
import Benefits from "../../Benefits/Benefits";
import OurServices from "../../HomePage/OurServices/OurServices";
import HomeMarquee from "../../Marquee/HomeMarquee";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import KuwaitHeading from "./KuwaitHeading/KuwaitHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import KuwaitCard from "./KuwaitCard/KuwaitCard";
import KuwaitCertificate from "./KuwaitCertificate/KuwaitCertificate";
import KuwaitMofa from "./KuwaitMofa/KuwaitMofa";
import KuwaitBlore from "./KuwaitBlore/KuwaitBlore";
import KuwaitReq from "./KuwaitReq/KuwaitReq";
import KuwaitFaq from "./KuwaitFaq/KuwaitFaq";
import KuwaitSeo from "./KuwaitSeo/KuwaitSeo";
import { Helmet } from "react-helmet";

const KuwaitAttestation = () => {
  return (
    <div className="bahrainAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kuwait Embassy Attestation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Kuwait Embassy Attestation Services in Banglore, Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/kuwait-embassy-attestation-bangalore"
        />
      </Helmet>
      <KuwaitHeading />
      <WhyBlock />
      <KuwaitCard />
      <KuwaitCertificate />
      <KuwaitMofa />
      <KuwaitBlore />
      <KuwaitSeo />
      <KuwaitReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <KuwaitFaq />
    </div>
  );
};

export default KuwaitAttestation;
