import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";

const anim = keyframes`
0%{
        stroke-dashoffset: 157;
    },
    100%{
        stroke-dashoffset: ${(props) => calc(157 * (props.percent / 100))};
    }
`;
const animClose = keyframes`
0%{
        stroke-dashoffset: ${(props) => calc(157 * (props.percent / 100))};
    },
    100%{
        stroke-dashoffset: 157;
    }`;

const CircularBarCover = styled.div`
  width: 100%;
`;
const CircularBarIconWrapper = styled.div`
  position: relative;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.625rem;
`;
const SvgContainer = styled.div`
  position: relative;
  height: 3.4375rem;
  width: 3.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SvgStyle = styled.svg`
  /* margin: 5px; */
  height: 100%;
  fill: none;
  stroke-width: 5;
  stroke: #ffc107;
  stroke: ${(props) => props.buttonColor};
  stroke-dasharray: 157;
  animation-name: ${(props) => (props.displaySidebar ? anim : animClose)};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-direction: forwards;
  ${(props) =>
    props.percent
      ? `stroke-dashoffset: calc(156 - (156 * (${props.percent} / 100)));`
      : ""}
`;

const CircularBarIconText = styled.h5`
  position: absolute;
  display: flex;
  /* color: #ffffff; */
  color: ${(props) => props.fontColorOne};
`;
const CircularBarIconLanguageText = styled.h5`
  margin-top: 0.625rem;
  color: #ffffff;
  color: ${(props) => props.fontColorOne};
`;

const CircularBarIcon = ({ displaySidebar, percent, language }) => {
  const { cardColor, buttonColor, fontColorOne } = useContext(ThemeContext);
  return (
    <div>
      <CircularBarIconWrapper>
        <SvgContainer>
          <SvgStyle
            displaySidebar={displaySidebar}
            percent={percent}
            buttonColor={buttonColor}
          >
            <circle cx="25" cy="25" r="25"></circle>
          </SvgStyle>
          <CircularBarIconText fontColorOne={fontColorOne}>
            {percent}
            <span>%</span>
          </CircularBarIconText>
        </SvgContainer>

        <CircularBarIconLanguageText fontColorOne={fontColorOne}>
          {language}
        </CircularBarIconLanguageText>
      </CircularBarIconWrapper>
    </div>
  );
};

export default CircularBarIcon;
