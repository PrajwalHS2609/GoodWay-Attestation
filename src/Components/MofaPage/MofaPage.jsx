import React from "react";
import "./MofaPage.css";
import MofaHead from "./MofaHead/MofaHead";
import MofaContent from "./MofaContent/MofaHeadContent";
import MofaMain from "./MofaMain/MofaMain";
import MofaBlore from "./MofaBlore/MofaBlore";
import MofaTime from "./MofaTime/MofaTime";
import MofaBloreCert from "./MofaBloreCert/MofaBloreCert";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import MofaCertIncop from "./MofaCertIncop/MofaCertIncop";
import ImpDoc from "./ImpDoc/ImpDoc";
import TypesDocs from "./TypesDocs/TypesDocs";
import IncopCert from "./IncopCert/IncopCert";
import MofaDocService from "./MofaDocService/MofaDocService";
import MofaBenefits from "./MofaBenefits/MofaBenefits";
import WhyBlock from "../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";
const MofaPage = () => {
  return (
    <div className="mofaContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          MOFA Attestation Services in Bangalore for all types of Commercial
          Documents
        </title>
        <meta
          name="description"
          content="MOFA Attestation Services in Bangalore for all types of Commercial Documents. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/mofa-attestation-services"
        />
      </Helmet>
      <MofaHead />
      <WhyBlock />
      <MofaContent />
      <MofaMain />
      <MofaBlore />
      <MofaTime />
      <MofaBloreCert />
      <MofaCertIncop />
      <ImpDoc />
      <TypesDocs />
      <IncopCert />
      <MofaDocService />
      <MofaBenefits />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MofaPage;
