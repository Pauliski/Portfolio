import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { myServices } from '../../staticData'
import ServiceCard from '../serviceCard/ServiceCard'
import { AllServiceCardHeader, AllServiceCardWrapper } from './style'

const AllServiceCard = () => {
  const { fontColorOne }  = useContext(ThemeContext)
  return (
      <>
      <AllServiceCardHeader color={fontColorOne}>My Services</AllServiceCardHeader>
       <AllServiceCardWrapper>{myServices.map((items, i)=> <ServiceCard key={i} body={items.body} title={items.title}/>)}</AllServiceCardWrapper>
      </>
   
  )
}

export default AllServiceCard