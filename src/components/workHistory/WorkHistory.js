import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { workHistories } from "../../staticData";
import EducationCard from "../educationCard/EducationCard";
import {
  WorkHistoryContainer,
  WorkHistoryLine,
  WorkHistorySessionTitle,
  WorkHistoryWrapper,
} from "./style";

const WorkHistory = () => {
  const {fontColorOne} = useContext(ThemeContext)
  return (
    <div>
      <WorkHistorySessionTitle color={fontColorOne}>Work History</WorkHistorySessionTitle>
      <WorkHistoryWrapper>
        <WorkHistoryContainer>
          {workHistories.map((item, i) => (
            <EducationCard
              body={item.body}
              title={item.title}
              jobTitle={item.jobTitle}
              date={item.date}
              buttonLabel={item.buttonLabel}
              key={i}
            />
          ))}
        </WorkHistoryContainer>
        <WorkHistoryLine></WorkHistoryLine>
      </WorkHistoryWrapper>
    </div>
  );
};

export default WorkHistory;
