import React from 'react'
import Input from '../input/Input'
import { ContactCardWrapper, ContactCardDetails } from './style'

const ContactCard = () => {
  return (
    <ContactCardWrapper>
        <ContactCardDetails>
            <p>Country</p>
            <p>Nigeria</p>
        </ContactCardDetails>
        <ContactCardDetails>
            <p>City</p>
            <p>Lagos</p>
        </ContactCardDetails>
        <ContactCardDetails>
            <p>Street</p>
            <p>Isolo</p>
        </ContactCardDetails>
    </ContactCardWrapper>
  )
}

export default ContactCard