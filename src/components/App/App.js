import React, { useState } from "react";
import Achievement from "../achievement/Achievement";
import AllRecommendation from "../allRecommendation/AllRecommendation";
import AllServiceCard from "../allServiceCard/AllServiceCard";
import Education from "../education/Education";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import PulseCircle from "../pulseCircle/PulseCircle";
import Recommendations from "../recommendations/Recommendations";
import RotateSquare from "../rotateSquare/RotateSquare";
import ServiceCard from "../serviceCard/ServiceCard";
import Sidebar from "../sidebar/Sidebar/Sidebar";
import {
  AppHeroSection,
  AppSecondSection,
  AppSecondSectionContaner,
  AppWrapper,
} from "./style";

const App = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <AppWrapper>
      <Navbar toggleSidebar={toggleSidebar} />
      <AppSecondSectionContaner>
        <Sidebar toggleSidebar={toggleSidebar} sidebarIsOpen={displaySidebar} />
        <AppSecondSection>
          <AppHeroSection>
            <Hero />
            <Achievement />
            <AllServiceCard />
            <AllRecommendation />
            <Education />
          </AppHeroSection>
        </AppSecondSection>
      </AppSecondSectionContaner>
    </AppWrapper>
  );
};

export default App;
