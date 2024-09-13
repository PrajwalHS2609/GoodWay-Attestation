import React from 'react'
import "./UaeAbout.css"

const UaeAboutHead = (props) => {
  return (
    <div className='uaeAboutUsHeadContainer'>
      <h2>{props.head}</h2>
      <div className="uaeAboutUsHeadUnderline"></div>
    </div>
  )
}

export default UaeAboutHead
