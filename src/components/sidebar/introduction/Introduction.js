import React from "react";
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

const Introduction = ({toggleSidebar}) => {
  return (
    <IntroductionWrapper>
      <IntroductionDetails>
        <IntroductionSvgContainer onClick={toggleSidebar} >
          <EllipsisVertical />
        </IntroductionSvgContainer>
        <IntroductionImageContainer>
          <IntroductionImage src="/assets/images/profilepix.jpg" />
          <IntroductionActiveStatus />
        </IntroductionImageContainer>
        <IntroductionName>PAUL AROKOOLA</IntroductionName>
        <IntroductionProfession>Javascript Developer</IntroductionProfession>
      </IntroductionDetails>
    </IntroductionWrapper>
  );
};

export default Introduction;
