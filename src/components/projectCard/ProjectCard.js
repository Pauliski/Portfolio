import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Code from "../../../public/assets/icons/Code";
import ExternalLinkIcon from "../../../public/assets/icons/ExternalLinkIcon";
import Underline from "../underline/Underline";
import {
  ProjectCardAbout,
  ProjectCardBottom,
  ProjectCardButton,
  ProjectCardButtonContainer,
  ProjectCardContainer,
  ProjectCardTitle,
  ProjectCardWrapper,
} from "./style";

const ProjectCard = ({ title, about, codeLink, demoLink }) => {
  const { cardColor, buttonColor, fontColorOne, fontColorTwo } = useContext(ThemeContext);
  return (
    <ProjectCardWrapper backgroundColor={cardColor}>
      <ProjectCardContainer>
        <ProjectCardTitle color={fontColorOne}>{title}</ProjectCardTitle>
        <ProjectCardAbout color={fontColorTwo}>{about}</ProjectCardAbout>
      </ProjectCardContainer>
      <ProjectCardBottom color={fontColorTwo}>
        <Underline />
        <ProjectCardButtonContainer >
          <a href={codeLink} target="_blank">
            <ProjectCardButton color={buttonColor}>
              <Code />
              <span> Code</span>
            </ProjectCardButton>
          </a>
          <a href={demoLink} target="_blank">
            <ProjectCardButton color={buttonColor}>
              <ExternalLinkIcon />
              <span>Demo</span>
            </ProjectCardButton>
          </a>
        </ProjectCardButtonContainer>
      </ProjectCardBottom>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
