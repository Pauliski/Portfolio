import React from 'react'
import { educations } from '../../staticData'
import EducationCard from '../educationCard/EducationCard'
import { EducationContainer, EducationLine, EducationSessionTitle, EducationWrapper } from './style'

const Education = () => {
  return (
      <div>
      <EducationSessionTitle>Education</EducationSessionTitle>
       <EducationWrapper>
        <EducationContainer>{educations.map((item, i)=><EducationCard title={item.title} body={item.body} buttonLabel={item.buttonLabel} date={item.date} />)}</EducationContainer>
        <EducationLine></EducationLine>
    </EducationWrapper>
    
      </div>
   
  )
}

export default Education