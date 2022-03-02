import React from "react";
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

const EducationCard = ({ body, title, date, buttonLabel, jobTitle }) => {
  return (
    <EducationCardContainer>
      <EducationCardWrapper>
        <EducationCardHeaderContainer>
          <>
           <EducationCardTitle>{title}</EducationCardTitle>
           <>{jobTitle}</>
          </>
         
          <EducationCardDateContainer>
            <EducationCardDate>{date}</EducationCardDate>
          </EducationCardDateContainer>
        </EducationCardHeaderContainer>
        <EducationCardBody>{body}</EducationCardBody>
        <EducationCardButton>{buttonLabel}</EducationCardButton>
      </EducationCardWrapper>
      <EducationCardIconContainer>
        <RotateSquare />
        <PulseCircle />
      </EducationCardIconContainer>
    </EducationCardContainer>
  );
};

export default EducationCard;
