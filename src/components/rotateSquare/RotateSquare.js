import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { RotateSquareWrapper } from './style'

const RotateSquare = () => {
  const {cardColor} = useContext(ThemeContext)
  return (
    <RotateSquareWrapper backgroundColor={cardColor}></RotateSquareWrapper>
  )
}

export default RotateSquare