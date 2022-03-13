import React, {useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { LogoContainer, LogoNameTag, LogoWrapper } from './style'

const Logo = () => {
  const { cardColor, buttonColor, fontColorOne, fontColorTwo, background } = useContext(ThemeContext);
  return (
    <LogoWrapper color={fontColorOne}>
        <LogoContainer backgroundColor={fontColorOne} color={cardColor}>PA</LogoContainer>
        <LogoNameTag color={fontColorOne}>PAULISKI</LogoNameTag>
    </LogoWrapper>
  )
}

export default Logo