import React from 'react'
import mofaBanner from "./../../../../vid_img/mofaBanner.jpg";
import TypeWriter from "../../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
import "./KuwaitVisaStampingHeader.css"
const KuwaitVisaStampingHeader = () => {
  return (
    <div className="kuwaitVisaStampingHeader">
    <div className="kuwaitVisaStampingHeaderCover">
      <TypeWriter txt="Kuwait Visa Stamping Service in " />
    </div>
    <img src={mofaBanner} alt="" loading="lazy" />
  </div>
  )
}

export default KuwaitVisaStampingHeader
