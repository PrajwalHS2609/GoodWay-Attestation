import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import OmanHeading from "./OmanHeading/OmanHeading";
import OmanReq from './OmanReq/OmanReq';
import OmanBlore from "./OmanBlore/OmanBlore";
import OmanService from "./OmanService/OmanService";
import OmanMofa from "./OmanMofa/OmanMofa";
import OmanCertificate from "./OmanCertificate/OmanCertificate";
import OmanCard from "./OmanCard/OmanCard";
import WhyBlock from './../../WhyBlock/WhyBlock';
import OmanBloreCert from "./OmanBloreCert/OmanBloreCert";
import OmanFaq from './OmanFaq/OmanFaq';
import OmanSeo from "./OmanSeo/OmanSeo";

const OmanAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <OmanHeading/>
      <WhyBlock />
      <OmanCard />
      <OmanCertificate />
      <OmanMofa />
      <OmanService />
      <OmanBloreCert/>
      <OmanBlore />
      <OmanSeo/>
      <OmanReq />
      {/* <OmanAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <OmanFaq />
    </div>
  );
};

export default OmanAttestation;
