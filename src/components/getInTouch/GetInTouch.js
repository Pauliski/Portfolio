import React from 'react'
import Email from '../../../public/assets/icons/Email'
import Envelop from '../../../public/assets/icons/Envelop'
import User from '../../../public/assets/icons/User'
import Input from '../input/Input'
import TextArea from '../textarea/TextArea'
import { GetInTouchSessionTittle, GetInTouchWrapper } from './style'

const GetInTouch = () => {
  return (
    <div>
    <GetInTouchSessionTittle>
      Get in touch
    </GetInTouchSessionTittle>
    <GetInTouchWrapper>
        <Input icon={<User />}/>
        <Input icon={<Email />}/>
        <TextArea icon={<Envelop />}/>
    </GetInTouchWrapper>
    </div>
    
  )
}

export default GetInTouch