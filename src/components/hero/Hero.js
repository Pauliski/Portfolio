import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import {
  HeroBackground,
  HeroBackgroundContainer,
  HeroBackgroundImage,
  HeroContainer,
  HeroFirstSection,
  HeroImage,
  HeroSectionOverlay,
  HeroWrapper,
} from "./style";

const Hero = () => {
  const {overlay, fontColorOne} = useContext(ThemeContext)
  return (
    <HeroContainer>
       <HeroWrapper>
        <HeroSectionOverlay backgroundColor={overlay}>  
        </HeroSectionOverlay> 
          <HeroFirstSection color={fontColorOne}>
            <div>
              <p>I'm here to create meaningful and lasting relationship with my clients</p>
              <h1>LET'S BUILD SOMETHING AMAZING TOGETHER</h1>
            </div>
      </HeroFirstSection>
      <HeroImage>
        <img src="assets/images/profilepixfull.png" alt="pix" />
      </HeroImage>
       
    
   </HeroWrapper>
     
    </HeroContainer>
       
      
   
  );
};

export default Hero;
