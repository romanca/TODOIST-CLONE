import React from "react";
import { filters } from "../../shared/mockData";
import FilterItem from "./FilterItem";

const FiltersList = () => {
  return (
    <div>
      {Object.values(filters).map((item) => (
        <FilterItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FiltersList;
