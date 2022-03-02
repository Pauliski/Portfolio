import React from 'react'
import ContactCard from '../contactCard/ContactCard'
import { ContactSessionTitle, ContactWrapper } from './style'

const Contact = () => {
  return (
      <>
      <ContactSessionTitle>Contact information</ContactSessionTitle>
       <ContactWrapper>
        <ContactCard />
    </ContactWrapper>
      </>
   
  )
}

export default Contact