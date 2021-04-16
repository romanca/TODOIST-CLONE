import React from "react";
import FilterItem from "./FilterItem";

const filters = [
  { title: "Assigned to me", number: 3 },
  { title: "Assigned to others", number: 4 },
  { title: "Priority 1", number: 9 },
  { title: "Priority 2", number: 3 },
  { title: "Priority 3", number: 2 },
  { title: "Priority 4", number: 1 },
  { title: "View all", number: 1 },
  { title: "No due date", number: 1 },
];

const FiltersList = () => {
  return (
    <div>
      {filters.map((item) => (
        <FilterItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FiltersList;
