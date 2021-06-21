import { Match } from "@reach/router";
import React from "react";
import { filters } from "../../shared/mockData";
import Link from "../../wrappers/Link";
import FilterItem from "./FilterItem";

const FiltersList = () => {
  return (
    <div>
      {Object.values(filters).map((i) => {
        const to = `filter/${i.id}`;
        return (
          <Match path={to}>
            {({ match }) => (
              <div
                style={{
                  backgroundColor: match && "#ececec",
                  borderRadius: match && 5,
                  width: 180,
                }}
              >
                <Link to={to}>
                  <FilterItem key={i.id} item={i} />
                </Link>
              </div>
            )}
          </Match>
        );
      })}
    </div>
  );
};

export default FiltersList;
