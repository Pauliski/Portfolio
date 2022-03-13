import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'
import { ProgressBarContainer, ProgressBarTextContainer, ProgressBarWrapper } from './style'

const ProgressBar = ({skill, level}) => {
  const {buttonColor, fontColorOne, fontColorTwo} = useContext(ThemeContext)
  return (
    <ProgressBarWrapper>
      <ProgressBarTextContainer fontColorOne={fontColorOne} fontColorTwo={fontColorTwo} >
        <p>{skill}</p>
        <p>{level}%</p>
      </ProgressBarTextContainer>
        <ProgressBarContainer level={level} buttonColor={buttonColor}></ProgressBarContainer>
        {/* <progress></progress> */}
    </ProgressBarWrapper>
  )
}

export default ProgressBar