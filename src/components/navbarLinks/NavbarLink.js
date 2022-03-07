import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavbarLinkWrapper } from "./style";

const NavbarLink = () => {
  const { cardColor, buttonColor, fontColorOne, fontColorTwo, background, isLight, setIsLight } = useContext(ThemeContext);
  return (
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
  );
};

export default NavbarLink;
