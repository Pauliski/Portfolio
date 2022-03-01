import React from 'react'
import { ServiceCardBody, ServiceCardButton, ServiceCardHeader, ServiceCardWrapper } from './style'

const ServiceCard = ({body, title}) => {
  return (
    <ServiceCardWrapper>
        <ServiceCardHeader>{title}</ServiceCardHeader>
        <ServiceCardBody>{body}</ServiceCardBody>
        <ServiceCardButton>ORDER NOW</ServiceCardButton>
    </ServiceCardWrapper>
  )
}

export default ServiceCard