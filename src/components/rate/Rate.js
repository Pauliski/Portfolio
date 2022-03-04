import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Star from '../../../public/assets/icons/Star'
import { RateContainer } from './style'

const Rate = ({rating}) => {
  const {cardColor, buttonColor, fontColorOne} = useContext(ThemeContext)
    const [rated, setRated] = useState()
    const defaultRating = Array(5).fill(0).map((_, i)=> i + 1).map(item => <Star />)
    const starRating = ()=>{
        return defaultRating.fill(<Star fill={buttonColor} />, 0, rating)
    }
    useEffect(()=>{
setRated(starRating())
    },[rating, buttonColor])
  return (
    <RateContainer>{rated}</RateContainer>
  )
}

export default Rate