import React from 'react'
import "./SeoContent.css"
import SeoContentHead from './SeoContentHead'
import SeoContentMain from './SeoContentMain'

const SeoContent = () => {
  return (
    <div className='seoContentContainer'>
      <SeoContentHead/>
      <SeoContentMain/>
    </div>
  )
}

export default SeoContent
