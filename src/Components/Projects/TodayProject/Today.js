import React from "react";
import { Match } from "@reach/router";
import TodayTitle from "././TodayTitile";
import { useDefaultTodos } from "../../../hooks/selectors";
import { todayId } from "../../../shared/constants";
import Link from "../../../wrappers/Link";
import styled, { useTheme } from "styled-components";

const Container = styled.div``;

const Today = () => {
  const staticProjects = useDefaultTodos();
  const { spaces, colors } = useTheme();

  return (
    <Container>
      {Object.values(staticProjects)
        .filter((i) => i.id === todayId)
        .filter((i) => !i.visible)
        .map((i) => {
          const to = `today/${i.id}`;
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
                  <Link to={to}>
                    <TodayTitle item={i} />
                  </Link>
                </div>
              )}
            </Match>
          );
        })}
    </Container>
  );
};
export default Today;
