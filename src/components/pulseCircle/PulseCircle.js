import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { PulseCircleWrapper } from './style'

const PulseCircle = () => {
  const {cardColor, buttonColor, fontColorOne, background} = useContext(ThemeContext)
  return (
      
          <PulseCircleWrapper borderColor={buttonColor} backgroundColor={cardColor}></PulseCircleWrapper>
      
    
  )
}

export default PulseCircle