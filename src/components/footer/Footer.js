import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Copyright from "../../../public/assets/icons/Copyright";
import { FooterWrapper } from "./style";

const Footer = () => {
    const { cardColor, fontColorOne, fontColorTwo, background } = useContext(ThemeContext);
  return (
    <FooterWrapper backgroundColor={cardColor} color={fontColorOne}>
      <Copyright />

      <p>Copyright 2022 | a.k.a Pauliski</p>
    </FooterWrapper>
  );
};

export default Footer;
