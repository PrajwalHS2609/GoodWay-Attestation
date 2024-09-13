import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import PhilippinesReq from "./PhilippinesReq/PhilippinesReq";
import PhilippinesBlore from "./PhilippinesBlore/PhilippinesBlore";
import PhilippinesMofa from "./PhilippinesMofa/PhilippinesMofa";
import PhilippinesCertificate from "./PhilippinesCertificate/PhilippinesCertificate";
import PhilippinesCard from "./PhilippinesCard/PhilippinesCard";
import WhyBlock from "../../WhyBlock/WhyBlock";
import PhilippinesHeading from "./PhilippinesHeading/PhilippinesHeading";
import PhilippinesService from "./PhilippinesService/PhilippinesService";
import PhilippinesAbout from "./PhilippinesAbout/PhilippinesAbout";
import PhilippinesFaq from "./PhilippinesFaq/PhilippinesFaq";

const PhilippinesAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <PhilippinesHeading />
      <WhyBlock />
      <PhilippinesCard />
      <PhilippinesCertificate />
      <PhilippinesMofa />
      <PhilippinesService />
      <PhilippinesBlore />
      <PhilippinesReq />
      <PhilippinesAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <PhilippinesFaq/>
    </div>
  );
};

export default PhilippinesAttestation;
