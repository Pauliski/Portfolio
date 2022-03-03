import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { skillArray } from "../../../staticData";
import Underline from "../underline/Underline";
import {
  OtherSkillsList,
  OtherSkillsWrapper,
} from "./style";

const OtherSkills = () => {
  const {buttonColor, fontColorTwo} = useContext(ThemeContext)
  return (
      <OtherSkillsWrapper >
        <OtherSkillsList color={fontColorTwo} buttonColor={buttonColor}>
          {skillArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </OtherSkillsList>
         <Underline />
      </OtherSkillsWrapper>
     
  );
};

export default OtherSkills;
