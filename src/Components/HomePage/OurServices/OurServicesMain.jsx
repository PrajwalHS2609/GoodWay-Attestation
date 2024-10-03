import React from "react";
import OurServicesCard from "./OurServicesCard";
import "./OurServices.css";
import appostille from "./../../../vid_img/Service Images/Attestation.png";
import attestation from "./../../../vid_img/Service Images/Apostille.png";
import mofa from "./../../../vid_img/Service Images/MOFA.png";
import pcc from "./../../../imgs/Pcc.png";
import mea from "./../../../vid_img/Service Images/MEA.png";
import wes from "./../../../vid_img/Service Images/Wes.png";
import translation from "./../../../vid_img/Service Images/Translation.png";
import hrd from "./../../../vid_img/Service Images/State HRD.png";
const OurServicesMain = () => {
  return (
    <div className="ourServicesMainContainer">
      <OurServicesCard
        img={attestation} alt="attestation"
        head="ATTESTATION"
        para="Attestation is the process of verifying the authenticity of documents by authorized officials,required for legal recognition in foreign countries."
      link="/certificate-attestation-bangalore"
      />
      <OurServicesCard
        img={appostille} alt="appostille"
        head="APOSTILLE"
        para="Apostille is a form of document authentication issued by a designated authority for use in countries that are members of the Hague Convention.."
      link="/certificate-apostille-bangalore"
      />
      <OurServicesCard
        img={hrd} alt="hrd"
        head="STATE HRD"
        para="State HRD (Human Resource Development) refers to the government department responsible for the attestation of educational documents for use abroad, verifying their authenticity."
     link="/state-hrd-home-department-attestation"
     />
      <OurServicesCard
        img={mofa} alt="mofa"
        head="MOFA"
        para="MOFA (Ministry of Foreign Affairs) is responsible for the attestation and legalization of documents for international use, ensuring their authenticity and validity in foreign countries."
      link="/mofa-attestation-services"
      />
      <OurServicesCard
        img={pcc} alt="pcc"
        head="PCC"
        para="PCC (Police Clearance Certificate) is an official document issued by police or government authorities certifying that an individual has no criminal record or pending cases."
     link="/pcc-attestation-bangalore"
     />
      <OurServicesCard
        img={mea} alt="mea"
        head="MEA"
        para="MEA (Ministry of External Affairs) is responsible for the attestation and legalization of documents for international use, ensuring their authenticity for foreign authorities."
      link="/mea-attestation-apostille-services"
      />
      <OurServicesCard
        img={wes} alt="wes"
        head="WES"
        para="WES (World Education Services) is an organization that evaluates and converts academic credentials from any country into their U.S. or Canadian equivalents for recognition."
     link="/wes-attestation-bangalore"
     />
      <OurServicesCard
        img={translation} alt="translation"
        head="Translation"
        para="Translation is the process of converting text from one language into another, ensuring the meaning and context remain accurate and clear in the target language."
     link="/translation-attestation-bangalore"
     />
    </div>
  );
};

export default OurServicesMain;
