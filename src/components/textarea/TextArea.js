import React from 'react'
import { TextareaField, TextareaIconContainer, TextareaWrapper } from './style'

const TextArea = ({icon}) => {
  return (
    <TextareaWrapper>
        <TextareaField />
        <TextareaIconContainer>
                {icon}
        </TextareaIconContainer>
    </TextareaWrapper>
  )
}

export default TextArea