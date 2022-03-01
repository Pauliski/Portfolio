import React, { useState } from "react";
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
  return (
    
    <SidebarWrapper displaySidebar={sidebarIsOpen}>
      <Introduction toggleSidebar={toggleSidebar} />
      <SidebarSecondSection>
        <Location />
        <CircularBar displaySidebar={sidebarIsOpen} />
        <AllProgressBar />
        <OtherSkill />
       <Download />
      </SidebarSecondSection>
       <Footer />
    </SidebarWrapper>
  );
};

export default Sidebar;
