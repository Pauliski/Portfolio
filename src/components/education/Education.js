import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { educations } from '../../staticData'
import EducationCard from '../educationCard/EducationCard'
import { EducationContainer, EducationLine, EducationSessionHolder, EducationSessionTitle, EducationWrapper } from './style'

const Education = () => {
  const {fontColorOne, fontColorTwo} = useContext(ThemeContext)
  return (
      <EducationSessionHolder>
      <EducationSessionTitle color={fontColorOne}>Education & Certification</EducationSessionTitle>
       <EducationWrapper>
        <EducationContainer>{educations.map((item, i)=><EducationCard title={item.title} body={item.body} buttonLabel={item.buttonLabel} date={item.date} key={i} previewLink={item.previewLink} />)}</EducationContainer>
        <EducationLine backgroundColor={fontColorTwo}></EducationLine>
    </EducationWrapper>
    
      </EducationSessionHolder>
   
  )
}

export default Education