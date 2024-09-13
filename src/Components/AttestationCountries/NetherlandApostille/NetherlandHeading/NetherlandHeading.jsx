import React from 'react'
import TypeWriter from './../NetherlandTypeWriter/TypeWriter';
import netherlandAttBanner from "./../../../../vid&img/ApostilleVids/netherlands.mp4";
const NetherlandHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
            <div className="uaeAttHeadingCover"> </div>

    <TypeWriter />
    <video src={netherlandAttBanner} autoPlay loop muted />
  </div>
  )
}

export default NetherlandHeading
