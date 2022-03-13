import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import AllProgressBar from "../allProgressBar/AllProgressBar";
import CircularBar from "../circularBar/CircularBar";
import Download from "../download/Download";
import Footer from "../footer/Footer";
import Introduction from "../introduction/Introduction";
import Location from "../location/Location";
import OtherSkill from "../otherSkills/OtherSkill";
import ProgressBar from "../progressbar/ProgressBar";
import { SidebarSecondSection, SidebarWrapper } from "./style";

const Sidebar = ({ toggleSidebar, sidebarIsOpen }) => {
  const { cardColor, buttonColor, fontColorOne } = useContext(ThemeContext);
  return (
    <SidebarWrapper backgroundColor={cardColor} displaySidebar={sidebarIsOpen}>
      <Introduction toggleSidebar={toggleSidebar} />
      <SidebarSecondSection backgroundColor={buttonColor} color={fontColorOne}>
        <Location />
        <CircularBar displaySidebar={sidebarIsOpen} />
        <AllProgressBar />
        <OtherSkill />
        <Download />
        <Footer />
      </SidebarSecondSection>
    </SidebarWrapper>
  );
};

export default Sidebar;
