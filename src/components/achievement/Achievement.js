import React from 'react'
import { achievements } from '../../staticData'
import { AchievementItems, AchievementWrapper } from './style'

const Achievement = () => {
  return (
    <AchievementWrapper>{achievements.map((item, i)=><AchievementItems>
        <p>{item.amount}</p>
        <p>{item.text}</p>
    </AchievementItems>)}</AchievementWrapper>
  )
}

export default Achievement