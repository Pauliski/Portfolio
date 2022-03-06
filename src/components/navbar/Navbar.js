import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import EllipsisVertical from "../../../public/assets/icons/EllipsisVertical";
import Hamburger from "../../../public/assets/icons/Hamburger";
import Logo from "../logo/Logo";
import ToggleButton from "../toggleButton/ToggleButton";
import {
  NavbarName,
  NavbarSidebarToggler,
  NavbarSideMenuToggler,
  NavbarTogglers,
  NavbarWrapper,
} from "./style";

const Navbar = ({ toggleSidebar }) => {
  const { isLight, setIsLight } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(false);
  const onChanged = (e) => {
    setIsToggled(e.target.checked);
    setIsLight(!isLight);
  };
  return (
    <NavbarWrapper>
      <Logo />
      <NavbarSidebarToggler onClick={toggleSidebar}>
        <EllipsisVertical />
      </NavbarSidebarToggler>
      {/* <NavbarName>PAUL AROKOOLA</NavbarName> */}
      <NavbarTogglers>
        <ToggleButton onChanged={onChanged} />
        <NavbarSideMenuToggler>
          <Hamburger />
        </NavbarSideMenuToggler>
      </NavbarTogglers>
    </NavbarWrapper>
  );
};

export default Navbar;
