import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { workHistories } from "../../staticData";
import EducationCard from "../educationCard/EducationCard";
import {
  WorkHistoryContainer,
  WorkHistoryLine,
  WorkHistorySessionHolder,
  WorkHistorySessionTitle,
  WorkHistoryWrapper,
} from "./style";

const WorkHistory = () => {
  const {fontColorOne, fontColorTwo} = useContext(ThemeContext)
  return (
    <WorkHistorySessionHolder>
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
        <WorkHistoryLine backgroundColor={fontColorTwo}></WorkHistoryLine>
      </WorkHistoryWrapper>
    </WorkHistorySessionHolder>
  );
};

export default WorkHistory;
