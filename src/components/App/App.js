import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Achievement from "../achievement/Achievement";
import AllRecommendation from "../allRecommendation/AllRecommendation";
import AllServiceCard from "../allServiceCard/AllServiceCard";
import Contact from "../contact/Contact";
import GetInTouch from "../getInTouch/GetInTouch";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar/Sidebar";
import ToggleButton from "../toggleButton/ToggleButton";
import WorkAndEducation from "../workAndEducation/WorkAndEducation";
import {
  AppHeroSection,
  AppSecondSection,
  AppSecondSectionContaner,
  AppWrapper,
} from "./style";

const App = () => {
  const { background, buttonColor } = useContext(ThemeContext);
  console.log(background)
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <AppWrapper>
      <Navbar toggleSidebar={toggleSidebar} />
      <AppSecondSectionContaner>
        <Sidebar toggleSidebar={toggleSidebar} sidebarIsOpen={displaySidebar} />
        <AppSecondSection backgroundColor={background}>
          <AppHeroSection>
            <Hero />
            <Achievement />
            <AllServiceCard />
            <AllRecommendation />
            <WorkAndEducation />
            <Contact />
            <GetInTouch />
          </AppHeroSection>
        </AppSecondSection>
      </AppSecondSectionContaner>
    </AppWrapper>
  );
};

export default App;
