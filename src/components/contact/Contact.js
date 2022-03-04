import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import ContactCard from '../contactCard/ContactCard'
import { ContactSessionTitle, ContactWrapper } from './style'

const Contact = () => {
  const {cardColor, fontColorOne, fontColorTwo} = useContext(ThemeContext)
  return (
      <>
      <ContactSessionTitle color={fontColorOne}>Contact information</ContactSessionTitle>
       <ContactWrapper>
        <ContactCard />
    </ContactWrapper>
      </>
   
  )
}

export default Contact