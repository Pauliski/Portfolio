import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { achievements } from '../../staticData'
import { AchievementItems, AchievementWrapper } from './style'

const Achievement = () => {
  const { fontColorOne, buttonColor }  = useContext(ThemeContext)
  return (
    <AchievementWrapper>{achievements.map((item, i)=><AchievementItems numberColor={buttonColor} color={fontColorOne} id="services" key={i}>
        <p>{item.amount}</p>
        <p>{item.text}</p>
    </AchievementItems>)}</AchievementWrapper>
  )
}

export default Achievement