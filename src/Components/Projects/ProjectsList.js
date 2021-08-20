import { Match } from "@reach/router";
import React from "react";
import styled, { useTheme } from "styled-components";
import { useDefaultTodos } from "../../hooks/selectors";
import { inboxId, todayId } from "../../shared/constants";
import ProjectTitle from "./ProjectTitle";

const Container = styled.div``;

const ProjectMessage = styled.div`
  width: ${(props) => props.theme.spaces[27]};
  color: grey;
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[68]};
  font-size: ${(props) => props.theme.spaces[36]};
`;

const ProjectsList = () => {
  const projects = useDefaultTodos();
  const { spaces, colors } = useTheme();
  const filteredProjects = Object.values(projects)
    .filter((i) => i.id !== inboxId)
    .filter((i) => i.id !== todayId);

  return (
    <Container>
      {filteredProjects && filteredProjects.length ? (
        <Container>
          {Object.values(filteredProjects).map((i) => {
            const to = `project/${i.id}`;
            return (
              <Match path={to}>
                {({ match }) => (
                  <div
                    style={{
                      backgroundColor: match && colors["muted3"],
                      borderRadius: match && spaces[1],
                      width: spaces[86],
                    }}
                  >
                    <ProjectTitle to={to} item={i} />
                  </div>
                )}
              </Match>
            );
          })}
        </Container>
      ) : (
        <ProjectMessage>You have no projects</ProjectMessage>
      )}
    </Container>
  );
};
export default ProjectsList;
