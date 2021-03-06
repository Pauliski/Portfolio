import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Achievement from "../achievement/Achievement";
import AllProject from "../allProject/AllProject";
import AllRecommendation from "../allRecommendation/AllRecommendation";
import AllServiceCard from "../allServiceCard/AllServiceCard";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import GetInTouch from "../getInTouch/GetInTouch";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import NavbarLink from "../navbarLinks/NavbarLink";
import Preloader from "../preloader/Preloader";
import ProjectCard from "../projectCard/ProjectCard";
import Sidebar from "../sidebar/Sidebar/Sidebar";
import ToggleButton from "../toggleButton/ToggleButton";
import WorkAndEducation from "../workAndEducation/WorkAndEducation";
import {
  AppHeroSection,
  AppNavbarContainer,
  AppNavLinkContainer,
  AppOverlay,
  AppPreloaderContainer,
  AppSecondSection,
  AppSecondSectionContaner,
  AppWrapper,
} from "./style";

const App = () => {
  const { background, buttonColor } = useContext(ThemeContext);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const closeSidebar = () => {
    setDisplaySidebar(false);
    setMenuIsOpen(false);
  };
  return (
    <AppWrapper>
      {/* <Preloader /> */}

      <AppNavbarContainer>
        <Navbar
          toggleSidebar={toggleSidebar}
          menuIsOpen={menuIsOpen}
          toggleMenu={toggleMenu}
          displaySidebar={displaySidebar}
        />
      </AppNavbarContainer>

      <AppOverlay
        displaySidebar={displaySidebar}
        menuIsOpen={menuIsOpen}
        onClick={closeSidebar}
      ></AppOverlay>

      <AppSecondSectionContaner>
        <Sidebar toggleSidebar={toggleSidebar} sidebarIsOpen={displaySidebar} />
        <AppNavLinkContainer backgroundColor={background}>
          <NavbarLink menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        </AppNavLinkContainer>

        <AppSecondSection backgroundColor={background}>
          <AppHeroSection>
            <Hero />
            <Achievement />
            <AllServiceCard />
            <AllProject />
            <AllRecommendation />
            <WorkAndEducation />
            <Contact />
            <GetInTouch />
            <Footer />
          </AppHeroSection>
        </AppSecondSection>
      </AppSecondSectionContaner>
    </AppWrapper>
  );
};

export default App;
