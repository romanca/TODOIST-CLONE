import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  { id: 1, title: "Todo 1 Todo 1Todo 1Todo 1Todo 1Todo 1Todo 1 ", number: 3 },
  { id: 2, title: "Todo 2", number: 4 },
  { id: 3, title: "Todo 3", number: 9 },
  { id: 4, title: "Todo 4", number: 3 },
  { id: 5, title: "Todo 5", number: 2 },
  { id: 6, title: "Todo 6", number: 1 },
];

const ProjectsList = ({ handleToggleButtons, toggle }) => {
  return (
    <div>
      {projects.map((i) => (
        <ProjectItem
          key={i.id}
          handleToggleButtons={handleToggleButtons}
          toggle={toggle}
          project={i}
        >
          {i.title}
        </ProjectItem>
      ))}
    </div>
  );
};
export default ProjectsList;
