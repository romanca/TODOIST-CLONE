import { Match } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { useDefaultTodos } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import { staticTodo } from "../../shared/constants";
import Link from "../../wrappers/Link";
import FilterItem from "../Filters/FilterItem";
import ProjectTitle from "../Projects/ProjectTitle";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const projects = useDefaultTodos();

  return (
    <div>
      {Object.values(projects)
        .filter((i) => i.id !== staticTodo.id)
        .filter((i) => i.favorite)
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
                  <FavoriteItem
                    to={to}
                    item={i}
  
                  />
                </div>
              )}
            </Match>
          );
        })}
    </div>
  );
};
export default FavoritesList;
