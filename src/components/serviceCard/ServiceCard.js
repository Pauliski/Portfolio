import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { ServiceCardBody, ServiceCardButton, ServiceCardHeader, ServiceCardWrapper } from './style'

const ServiceCard = ({body, title}) => {
  const {cardColor, buttonColor, fontColorOne} = useContext(ThemeContext)
  return (
    <ServiceCardWrapper backgroundColor={cardColor}>
        <ServiceCardHeader color={fontColorOne}>{title}</ServiceCardHeader>
        <ServiceCardBody>{body}</ServiceCardBody>
        <ServiceCardButton color={buttonColor}>ORDER NOW</ServiceCardButton>
    </ServiceCardWrapper>
  )
}

export default ServiceCard