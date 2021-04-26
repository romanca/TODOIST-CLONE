import React from "react";
import { projects } from "../../shared/mockData";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  return (
    <div>
      {Object.values(projects).map((item) => (
        <ProjectItem key={item.id} item={item}>
          {item.title}
        </ProjectItem>
      ))}
    </div>
  );
};
export default ProjectsList;
