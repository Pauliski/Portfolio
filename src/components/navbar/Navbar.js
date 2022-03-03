import React, {useContext, useState} from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import EllipsisVertical from '../../../public/assets/icons/EllipsisVertical'
import Hamburger from '../../../public/assets/icons/Hamburger'
import ToggleButton from '../toggleButton/ToggleButton'
import { NavbarName, NavbarSidebarToggler, NavbarSideMenuToggler, NavbarWrapper } from './style'


const Navbar = ({toggleSidebar}) => {
  const {isLight, setIsLight} = useContext(ThemeContext)
  const [isToggled, setIsToggled] = useState(false)
  const onChanged = (e)=>{
    setIsToggled(e.target.checked)
    setIsLight(!isLight)
  }
  return (
    <NavbarWrapper>
        <NavbarSidebarToggler onClick={toggleSidebar}>
            <EllipsisVertical />
        </NavbarSidebarToggler>
        <NavbarName>PAUL AROKOOLA</NavbarName>
        <ToggleButton onChanged={onChanged}/>
        <span>switch is {isToggled ? 'on' : 'off'}</span>
        <NavbarSideMenuToggler>
            <Hamburger />
        </NavbarSideMenuToggler>
        
    </NavbarWrapper>
  )
}

export default Navbar