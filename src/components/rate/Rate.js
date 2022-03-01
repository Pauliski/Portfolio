import React, { useEffect, useState } from 'react'
import Star from '../../../public/assets/icons/Star'
import { RateContainer } from './style'

const Rate = ({rating}) => {
    const [rated, setRated] = useState()
    const defaultRating = Array(5).fill(0).map((_, i)=> i + 1).map(item => <Star />)
    const starRating = ()=>{
        return defaultRating.fill(<Star fill="#ffc107" />, 0, rating)
    }
    useEffect(()=>{
setRated(starRating())
    },[rating])
  return (
    <RateContainer>{rated}</RateContainer>
  )
}

export default Rate