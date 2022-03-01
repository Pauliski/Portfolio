import React from 'react'
import { myServices } from '../../staticData'
import ServiceCard from '../serviceCard/ServiceCard'
import { AllServiceCardHeader, AllServiceCardWrapper } from './style'

const AllServiceCard = () => {
  return (
      <>
      <AllServiceCardHeader>My Services</AllServiceCardHeader>
       <AllServiceCardWrapper>{myServices.map((items, i)=> <ServiceCard key={i} body={items.body} title={items.title}/>)}</AllServiceCardWrapper>
      </>
   
  )
}

export default AllServiceCard