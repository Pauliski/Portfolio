import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import {
  PreloaderBall,
  PreloaderBar,
  PreloaderBarAndText,
  PreloaderBarContainer,
  PreloaderText,
  PreloaderWrapper,
} from "./style";

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderBarAndText>
        <PreloaderBarContainer>
          <PreloaderBar></PreloaderBar>
          <PreloaderBar></PreloaderBar>
          <PreloaderBar></PreloaderBar>
          <PreloaderBar></PreloaderBar>
          <PreloaderBar></PreloaderBar>
          <PreloaderBall></PreloaderBall>
        </PreloaderBarContainer>
        <PreloaderText>Paul Arokoola</PreloaderText>
      </PreloaderBarAndText>
    </PreloaderWrapper>
  );
};

export default Preloader;
