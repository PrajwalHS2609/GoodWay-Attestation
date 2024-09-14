import React from "react";
import TranslationHead from "./TranslationHead/TranslationHead";
import TranslationHeadContent from "./TranslationHeadContent/TranslationHeadContent";
import TranslationImp from "./TranslationImp/TranslationImp";
import TranslationCertWhy from "./TranslationCertWhy/TranslationCertWhy";
import TranslationCert from "./TranslationCert/TranslationCert";
import TranslationServ from "./TranslationServ/TranslationServ";
import TranslationTypes from "./TranslationTypes/TranslationTypes";
import TranslationDocs from "./TranslationDocs/TranslationDocs";
import TranslationProcess from "./TranslationProcess/TranslationProcess";
import WhyBlock from "../WhyBlock/WhyBlock";
import { Helmet } from "react-helmet";

const TranslationPage = () => {
  return (
    <div className="translationContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Foreign Language Translation Services in Bangalore Karnataka
        </title>
        <meta
          name="description"
          content="Foreign Language Translation Services in Bangalore Karnataka. Govt Approved, ISO Certified, Free Home Pick UP & Drop, Track Online."
        />
        <link
          rel="canonical"
          href="https://goodway-attestation.com/translation-attestation-bangalore"
        />
      </Helmet>
      <TranslationHead />
      <WhyBlock />
      <TranslationHeadContent />
      <TranslationImp />
      <TranslationCert />
      <TranslationCertWhy />
      <TranslationServ />
      <TranslationTypes />
      <TranslationDocs />
      <TranslationProcess />
    </div>
  );
};

export default TranslationPage;
