import React from 'react'
import { ToggleButtonCheckbox, ToggleButtonSlider, ToggleButtonWrapper } from './style'

const ToggleButton = ({onChanged}) => {
  return (
    <ToggleButtonWrapper>
        <ToggleButtonCheckbox type="checkbox" onChange={(e)=>onChanged(e)}/>
        <ToggleButtonSlider />
    </ToggleButtonWrapper>
    
  )
}

export default ToggleButton