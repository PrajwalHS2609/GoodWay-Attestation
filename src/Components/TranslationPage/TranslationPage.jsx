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

const TranslationPage = () => {
  return (
    <div className="translationContainer">
      <TranslationHead />
      <WhyBlock />
      <TranslationHeadContent />
      <TranslationImp />
      <TranslationCert />
      <TranslationCertWhy />
      <TranslationServ />
      <TranslationTypes />
      <TranslationDocs/>
      <TranslationProcess/>
    </div>
  );
};

export default TranslationPage;
