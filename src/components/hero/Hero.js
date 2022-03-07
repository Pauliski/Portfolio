import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import {
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
} from "./style";

const Hero = () => {
  const {overlay, fontColorOne} = useContext(ThemeContext)
  return (
    <HeroContainer id="home">
       <HeroWrapper>
        <HeroSectionOverlay backgroundColor={overlay}>  
        </HeroSectionOverlay> 
          <HeroFirstSection color={fontColorOne}>
            <div>
              <HeroSmallText>I'm here to create meaningful and lasting relationship with my clients</HeroSmallText>
              <HeroBigText>LET'S BUILD SOMETHING AMAZING TOGETHER</HeroBigText>
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
