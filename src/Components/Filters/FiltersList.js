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
          <Link to={to}>
            <FilterItem key={i.id} item={i} />
          </Link>
        );
      })}
    </div>
  );
};

export default FiltersList;
