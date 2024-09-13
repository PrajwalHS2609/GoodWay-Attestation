import React from 'react'
import PccHead from './PccHead/PccHead'
import PccHeadContent from './PccHeadContent/PccHeadContent'
import PccImp from './PccImp/PccImp'
import WhatIsPcc from './WhatIsPcc/WhatIsPcc'
import PccProcedure from './PccProcedure/PccProcedure'
import PccChallenge from './PccChallenge/PccChallenge'
import PccOverCome from './PccOverCome/PccOverCome'
import ImpEachStep from './ImpEachStep/ImpEachStep'
import PccUse from './PccUse/PccUse'
import PccExp from './PccExp/PccExp';
import HomeLink from '../HomePage/HomeLink.jsx/HomeLink'
import HomeMarquee from '../Marquee/HomeMarquee'
import OurServices from '../HomePage/OurServices/OurServices'
import Benefits from '../Benefits/Benefits'
import Review from '../Review/Review'
import Faq from '../HomePage/Faq/Faq'
import WhyBlock from '../WhyBlock/WhyBlock'

const PccPage = () => {
  return (
    <div className='pccPageContainer'>
      <PccHead/>
      <WhyBlock/>
      <PccHeadContent/>
      <PccImp/>
      <WhatIsPcc/>
      <PccProcedure/>
      <PccChallenge/>
      <PccOverCome/>
      <PccExp/>
      <ImpEachStep/>
      <PccUse/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  )
}

export default PccPage
