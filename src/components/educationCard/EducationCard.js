import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import PulseCircle from "../pulseCircle/PulseCircle";
import RotateSquare from "../rotateSquare/RotateSquare";
import {
  EducationCardBody,
  EducationCardButton,
  EducationCardContainer,
  EducationCardDate,
  EducationCardDateContainer,
  EducationCardHeaderContainer,
  EducationCardIconContainer,
  EducationCardTitle,
  EducationCardWrapper,
} from "./style";

const EducationCard = ({ body, title, date, buttonLabel, jobTitle, previewLink }) => {
  const {cardColor, buttonColor, fontColorOne, fontColorTwo, background} = useContext(ThemeContext)
  return (
    <EducationCardContainer backgroundColor={cardColor}>
      <EducationCardWrapper >
        <EducationCardHeaderContainer>
          <>
           <EducationCardTitle color={fontColorOne}>{title}</EducationCardTitle>
           <div style={{color:`${fontColorTwo}`}}>{jobTitle}</div>
          </>
         
          <EducationCardDateContainer backgroundColor={background}>
            <EducationCardDate color={fontColorTwo}>{date}</EducationCardDate>
          </EducationCardDateContainer>
        </EducationCardHeaderContainer>
        <EducationCardBody color={fontColorTwo}>{body}</EducationCardBody>
        <a href={previewLink} target="_blank">
          <EducationCardButton color={buttonColor}>{buttonLabel}</EducationCardButton>
        </a>
        
      </EducationCardWrapper>
      <EducationCardIconContainer>
        <RotateSquare />
        <PulseCircle />
      </EducationCardIconContainer>
    </EducationCardContainer>
  );
};

export default EducationCard;
