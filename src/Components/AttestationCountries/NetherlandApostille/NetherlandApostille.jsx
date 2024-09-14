import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import NetherlandHeading from "./NetherlandHeading/NetherlandHeading";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import NetherlandCard from "./NetherlandCard.jsx/NetherlandCard";
import NetherlandCertificate from "./NetherlandCertificate/NetherlandCertificate";
import NetherlandMofa from "./NetherlandMofa/NetherlandMofa";
import NetherlandBlore from "./NetherlandBlore/NetherlandBlore";
import NetherlandReq from "./NetherlandReq/NetherlandReq";
import NetherlandBloreCert from "./NetherlandBloreCert/NetherlandBloreCert";
import NetherlandFaq from "./NetherlandFaq/NetherlandFaq";
import NetherlandSeo from "./NetherlandSeo/NetherlandSeo";
import { Helmet } from "react-helmet";

const NetherlandApostille = () => {
  return (
    <div className="uaeAttestationPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Netherlands Apostille Services in Bangalore Karnataka at Lowest Price
        </title>
        <meta
          name="description"
          content="Netherlands Apostille Services in Banglore, Karnataka at Lowest Price. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/netherlands-apostille-services-bangalore"
        />
      </Helmet>
      <NetherlandHeading />
      <WhyBlock />
      <NetherlandCard />
      <NetherlandCertificate />
      <NetherlandMofa />
      {/* <NetherlandAbout /> */}
      {/* <NetherlandService /> */}
      <NetherlandBloreCert />
      <NetherlandBlore />
      <NetherlandSeo />
      <NetherlandReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <NetherlandFaq />
    </div>
  );
};

export default NetherlandApostille;
