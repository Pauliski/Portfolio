import React, {useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { projects } from "../../staticData";
import ProjectCard from "../projectCard/ProjectCard";
import { AllProjectHeader, AllProjectWrapper } from "./style";

const AllProject = () => {
    const { fontColorOne }  = useContext(ThemeContext)
  return (
    <div>
        <AllProjectHeader color={fontColorOne}>Projects</AllProjectHeader>
        <AllProjectWrapper>
      {projects.map((item, i) => (
        <ProjectCard
          title={item.title}
          about={item.about}
          demoLink={item.demoLink}
          codeLink={item.codeLink}
          key={i}
        />
      ))}
    </AllProjectWrapper>

    </div>
    
  );
};

export default AllProject;
