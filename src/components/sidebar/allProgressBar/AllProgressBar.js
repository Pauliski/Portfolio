import React from 'react'
import ProgressBar from '../progressbar/ProgressBar'
import Underline from '../underline/Underline'
import { AllProgressBarWrapper } from './style'

const AllProgressBar = () => {
  return (
    <>
      <AllProgressBarWrapper>
        <ProgressBar skill="HTML" level={95}/>
        <ProgressBar skill="CSS" level={95}/>
        <ProgressBar skill="JS" level={92}/>
        <ProgressBar skill="Wordpress" level={40}/>
        <Underline />
    </AllProgressBarWrapper>
    
    </>
  
  )
}

export default AllProgressBar