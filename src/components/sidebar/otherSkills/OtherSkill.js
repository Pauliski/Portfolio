import React from "react";
import { skillArray } from "../../../staticData";
import Underline from "../underline/Underline";
import {
  OtherSkillsList,
  OtherSkillsWrapper,
} from "./style";

const OtherSkills = () => {
  return (
      <OtherSkillsWrapper>
        <OtherSkillsList>
          {skillArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </OtherSkillsList>
         <Underline />
      </OtherSkillsWrapper>
     
  );
};

export default OtherSkills;
