import React from "react";
import CircularBarIcon from "../../../../public/assets/icons/CircularBarIcon";
import {
  CircularBarBottomLine,
  CircularBarWrapper,
  SvgContainer,
} from "./style";

const CircularBar = ({ displaySidebar }) => {
  return (
    <CircularBarWrapper>
      <SvgContainer>
        <CircularBarIcon
          displaySidebar={displaySidebar}
          percent={100}
          language="Yoruba"
        />
        <CircularBarIcon
          displaySidebar={displaySidebar}
          percent={90}
          language="English"
        />
      </SvgContainer>
      <CircularBarBottomLine></CircularBarBottomLine>
    </CircularBarWrapper>
  );
};

export default CircularBar;
