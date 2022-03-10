import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import {
  ButtonContainer,
  FirstButton,
  HeroBackground,
  HeroBackgroundContainer,
  HeroBackgroundImage,
  HeroBigText,
  HeroContainer,
  HeroFirstSection,
  HeroImage,
  HeroSectionOverlay,
  HeroSmallText,
  HeroWrapper,
  SecondButton,
} from "./style";

const Hero = () => {
  const { overlay, fontColorOne, buttonColor, fontColorTwo } =
    useContext(ThemeContext);
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <HeroSectionOverlay backgroundColor={overlay}></HeroSectionOverlay>
        <HeroFirstSection color={fontColorOne}>
          <div>
            <HeroSmallText>
              I'm here to create meaningful and lasting relationship with my
              clients
            </HeroSmallText>
            <HeroBigText>LET'S BUILD SOMETHING AMAZING TOGETHER</HeroBigText>
            <ButtonContainer>
              <a href="#getInTouch">
                <FirstButton backgroundColor={buttonColor}>
                  I need a Wesite
                </FirstButton>
              </a>
              <a href="#getInTouch">
                <SecondButton
                  backgroundColor={fontColorOne}
                  color={fontColorTwo}
                >
                  I'm looking to hire
                </SecondButton>
              </a>
            </ButtonContainer>
          </div>
        </HeroFirstSection>
        <HeroImage>
          <img src="assets/images/myprofilepix.png" alt="pix" />
        </HeroImage>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
