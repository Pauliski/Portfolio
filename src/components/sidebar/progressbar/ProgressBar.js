import React from 'react'
import { ProgressBarContainer, ProgressBarTextContainer, ProgressBarWrapper } from './style'

const ProgressBar = ({skill, level}) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarTextContainer >
        <p>{skill}</p>
        <p>{level}%</p>
      </ProgressBarTextContainer>
        <ProgressBarContainer level={level}></ProgressBarContainer>
        {/* <progress></progress> */}
    </ProgressBarWrapper>
  )
}

export default ProgressBar