import React from "react";
import "./AttestationBlore.css";
import AttestationBloreHead from "./AttestationBloreHead";
import AttestationBloreMain from "./AttestationBloreMain";
import blore from "./../../../vid_img/blore.jpg"
const AttestationBlore = () => {
  return (
    <div className="attestationBloreContiner">
      <AttestationBloreHead span="Attestation" head=" Services in Bengaluru" />
      <AttestationBloreMain
        mainImg={blore}
        mainHead="Certificate Attestation In India"
        mainPara1="Earth is very small to shift from one place to another without any barrier, if you prove yourself genuine. There are many reasons for a person to hang around to other places. Might be graduating for higher degrees, job opportunities, official purpose, holiday, some might plan to settle down as their dreams and many more. To satisfy all these needs we have to follow some process and procedures where in we need to prove ourselves an authenticated person."
        mainPara2="It is mandatory to attest your documents/certificates when you have to stay anywhere out of your country without any issues for your planned period of time in that country. You necessitate the document attestation any time in a path of life, for number of reasons like: some medical emergency, want to study abroad, for job, need to shift and so on. For all this, everyone require to do some documentation."
      />
    </div>
  );
};

export default AttestationBlore;
