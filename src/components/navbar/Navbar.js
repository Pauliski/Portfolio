import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Close from "../../../public/assets/icons/Close";
import EllipsisVertical from "../../../public/assets/icons/EllipsisVertical";
import Hamburger from "../../../public/assets/icons/Hamburger";
import Moon from "../../../public/assets/icons/Moon";
import Sun from "../../../public/assets/icons/Sun";
import Logo from "../logo/Logo";
import NavbarLink from "../navbarLinks/NavbarLink";
import ToggleButton from "../toggleButton/ToggleButton";
import {
  NavbarAllLink,
  NavbarAllLinkMobile,
  NavbarCloseMenuButton,
  NavbarMenuContainer,
  NavbarName,
  NavbarSidebarToggler,
  NavbarSideMenuToggler,
  NavbarTogglers,
  NavbarTogglersIconContainer,
  NavbarWrapper,
} from "./style";

const Navbar = ({ toggleSidebar, toggleMenu, menuIsOpen }) => {
  const {
    cardColor,
    buttonColor,
    fontColorOne,
    fontColorTwo,
    background,
    isLight,
    setIsLight,
  } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(false);
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onChanged = (e) => {
    setIsToggled(e.target.checked);
    setIsLight(!isLight);
  };
  // const toggleMenu = () => {
  //   setMenuIsOpen(!menuIsOpen);
  // };
  return (
    <NavbarWrapper backgroundColor={background}>
      <NavbarSidebarToggler onClick={toggleSidebar}>
        <EllipsisVertical />
      </NavbarSidebarToggler>
      <Logo />
      <NavbarAllLink>
        <NavbarLink />
      </NavbarAllLink>

      <NavbarTogglers color={fontColorOne}>
        <NavbarTogglersIconContainer>
          <Sun />
        </NavbarTogglersIconContainer>
        <ToggleButton onChanged={onChanged} />
        <NavbarTogglersIconContainer>
          <Moon />
        </NavbarTogglersIconContainer>

        <NavbarSideMenuToggler color={fontColorOne} onClick={toggleMenu}>
          <Hamburger />
        </NavbarSideMenuToggler>
      </NavbarTogglers>
      {/* <NavbarAllLinkMobile backgroundColor={cardColor} menuIsOpen={menuIsOpen}>
        <NavbarCloseMenuButton
          onClick={toggleMenu}
          backgroundColor={background}
          color={fontColorOne}
        >
          <Close />
        </NavbarCloseMenuButton>
        <NavbarMenuContainer>
          <button onClick={toggleMenu}>
            <NavbarLink />
          </button>
        </NavbarMenuContainer>
      </NavbarAllLinkMobile> */}
    </NavbarWrapper>
  );
};

export default Navbar;
