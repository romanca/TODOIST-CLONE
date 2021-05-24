import { Match } from "@reach/router";
import React from "react";
import { useDefaultTodos } from "../../hooks/selectors";
import { staticTodo } from "../../shared/constants";
import ProjectTitle from "./ProjectTitle";

const ProjectsList = () => {
  const projects = useDefaultTodos();

  return (
    <div>
      {Object.values(projects)
        .filter((i) => i.id !== staticTodo.id)
        .map((i) => {
          const to = `project/${i.id}`;
          return (
            <Match path={to}>
              {({ match }) => (
                <div
                  style={{
                    backgroundColor: match ? "#ececec" : "",
                    borderRadius: match ? 5 : "",
                    width: 180,
                  }}
                >
                  <ProjectTitle to={to} item={i} />
                </div>
              )}
            </Match>
          );
        })}
    </div>
  );
};
export default ProjectsList;
