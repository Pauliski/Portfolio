import React from 'react'
import Education from '../education/Education'
import WorkHistory from '../workHistory/WorkHistory'
import { WorkAndEducationWrapper } from './style'

const WorkAndEducation = () => {
  return (
    <WorkAndEducationWrapper>
        <Education />
        <WorkHistory />
    </WorkAndEducationWrapper>
  )
}

export default WorkAndEducation