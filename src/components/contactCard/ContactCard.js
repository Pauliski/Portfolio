import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Input from '../input/Input'
import { ContactCardWrapper, ContactCardDetails } from './style'

const ContactCard = () => {
  const {cardColor, fontColorOne, fontColorTwo} = useContext(ThemeContext)
  return (
    <ContactCardWrapper backgroundColor={cardColor}>
        <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>Country</p>
            <p>Nigeria</p>
        </ContactCardDetails>
        <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>City</p>
            <p>Lagos</p>
        </ContactCardDetails>
        <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>Street</p>
            <p>Isolo</p>
        </ContactCardDetails>
    </ContactCardWrapper>
  )
}

export default ContactCard