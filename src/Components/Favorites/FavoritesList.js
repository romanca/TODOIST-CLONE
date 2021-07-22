import { Match } from "@reach/router";
import React from "react";
import { useTheme } from "styled-components";
import { useDefaultTodos } from "../../hooks/selectors";
import { inboxId } from "../../shared/constants";
import FavoriteItem from "./FavoriteItem";
import styled from "styled-components";
import ProjectTitle from "../Projects/ProjectTitle";

const Container = styled.div``;

const FavoritesList = () => {
  const projects = useDefaultTodos();
  const { colors, spaces } = useTheme();

  return (
    <Container>
      {Object.values(projects)
        .filter((i) => i.id !== inboxId)
        .filter((i) => i.favorite)
        .map((i) => {
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
                  <FavoriteItem to={to} item={i} />
                </div>
              )}
            </Match>
          );
        })}
    </Container>
  );
};
export default FavoritesList;
