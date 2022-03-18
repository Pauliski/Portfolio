import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Close from "../../../public/assets/icons/Close";
import { NavbarLinkButton, NavbarLinkListContainer, NavbarLinkWrapper } from "./style";

const NavbarLink = ({menuIsOpen, toggleMenu}) => {
  const {
    cardColor,
    buttonColor,
    fontColorOne,
    fontColorTwo,
    background,
    isLight,
    setIsLight,
  } = useContext(ThemeContext);
  return (
    <NavbarLinkListContainer menuIsOpen={menuIsOpen} backgroundColor={background}>
      <NavbarLinkButton onClick={toggleMenu}  color={fontColorOne}>
        <Close />
      </NavbarLinkButton>
      
      <NavbarLinkWrapper menuIsOpen={menuIsOpen} color={fontColorOne}>
        
          <li>
            <a href="#home">
            Home
             </a>
            </li>
       

        
          <li>
            <a href="#services">
            Services
             </a>
            </li>
       
        
          <li>
            <a href="#projects">
            Projects
            </a>
            </li>
        
        
          <li>
            <a href="#getInTouch">
            Get In Touch
            </a>
            </li>
        
      </NavbarLinkWrapper>
    </NavbarLinkListContainer>
  );
};

export default NavbarLink;
