import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Email from '../../../public/assets/icons/Email'
import Envelop from '../../../public/assets/icons/Envelop'
import User from '../../../public/assets/icons/User'
import Input from '../input/Input'
import TextArea from '../textarea/TextArea'
import { GetInTouchButton, GetInTouchSessionTittle, GetInTouchWrapper } from './style'

const GetInTouch = () => {
  const {cardColor, buttonColor, fontColorOne, background} = useContext(ThemeContext)
  return (
    <div>
    <GetInTouchSessionTittle color={fontColorOne}>
      Get in touch
    </GetInTouchSessionTittle>
    <GetInTouchWrapper backgroundColor={cardColor}>
        <Input icon={<User />}/>
        <Input icon={<Email />}/>
        <TextArea icon={<Envelop />}/>
        <GetInTouchButton backgroundColor={buttonColor} color={fontColorOne}>SEND MESSAGE</GetInTouchButton>
    </GetInTouchWrapper>
    </div>
    
  )
}

export default GetInTouch