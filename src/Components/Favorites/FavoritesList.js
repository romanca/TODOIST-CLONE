import { Match } from "@reach/router";
import React from "react";
import { useDefaultTodos } from "../../hooks/selectors";
import { inboxId } from "../../shared/constants";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const projects = useDefaultTodos();

  return (
    <div>
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
                    backgroundColor: match ? "#ececec" : "",
                    borderRadius: match ? 5 : "",
                    width: 180,
                  }}
                >
                  <FavoriteItem to={to} item={i} />
                </div>
              )}
            </Match>
          );
        })}
    </div>
  );
};
export default FavoritesList;
