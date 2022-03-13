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
      <NavbarLinkButton onClick={toggleMenu} color={fontColorOne}>
        <Close />
      </NavbarLinkButton>
      
      <NavbarLinkWrapper color={fontColorOne}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#getInTouch">
          <li>Get In Touch</li>
        </a>
      </NavbarLinkWrapper>
    </NavbarLinkListContainer>
  );
};

export default NavbarLink;
