import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  IntroductionActiveStatus,
  IntroductionDetails,
  IntroductionImage,
  IntroductionImageContainer,
  IntroductionName,
  IntroductionProfession,
  IntroductionWrapper,
  IntroductionSvgContainer,
} from "./style";
import EllipsisVertical from "../../../../public/assets/icons/EllipsisVertical";
import { ThemeContext } from "../../../../context/ThemeContext";
import Close from "../../../../public/assets/icons/Close";

const Introduction = ({ toggleSidebar }) => {
  const { fontColorOne, fontColorTwo, cardColor, background, buttonColor } =
    useContext(ThemeContext);
  return (
    <IntroductionWrapper backgroundColor={background}>
      <IntroductionDetails>
        <IntroductionSvgContainer fill={buttonColor} onClick={toggleSidebar}>
          <Close />
        </IntroductionSvgContainer>
        <IntroductionImageContainer>
          <IntroductionImage src="/assets/images/mypic.png" />
          <IntroductionActiveStatus backgroundColor={buttonColor}/>
        </IntroductionImageContainer>
        <IntroductionName fontColor={fontColorOne}>PAUL AROKOOLA</IntroductionName>
        <IntroductionProfession fontColor={fontColorOne}>Javascript Developer</IntroductionProfession>
      </IntroductionDetails>
    </IntroductionWrapper>
  );
};

export default Introduction;
