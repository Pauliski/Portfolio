import React from 'react'
import EllipsisVertical from '../../../public/assets/icons/EllipsisVertical'
import Hamburger from '../../../public/assets/icons/Hamburger'
import { NavbarName, NavbarSidebarToggler, NavbarSideMenuToggler, NavbarWrapper } from './style'

const Navbar = ({toggleSidebar}) => {
  return (
    <NavbarWrapper>
        <NavbarSidebarToggler onClick={toggleSidebar}>
            <EllipsisVertical />
        </NavbarSidebarToggler>
        <NavbarName>PAUL AROKOOLA</NavbarName>
        <NavbarSideMenuToggler>
            <Hamburger />
        </NavbarSideMenuToggler>
        
    </NavbarWrapper>
  )
}

export default Navbar