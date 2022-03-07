import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { educations } from '../../staticData'
import EducationCard from '../educationCard/EducationCard'
import { EducationContainer, EducationLine, EducationSessionTitle, EducationWrapper } from './style'

const Education = () => {
  const {fontColorOne} = useContext(ThemeContext)
  return (
      <div>
      <EducationSessionTitle color={fontColorOne}>Education</EducationSessionTitle>
       <EducationWrapper>
        <EducationContainer>{educations.map((item, i)=><EducationCard title={item.title} body={item.body} buttonLabel={item.buttonLabel} date={item.date} key={i}/>)}</EducationContainer>
        <EducationLine></EducationLine>
    </EducationWrapper>
    
      </div>
   
  )
}

export default Education