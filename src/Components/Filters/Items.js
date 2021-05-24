import React from "react";
import { items, filters } from "../../shared/mockData";
import { useParams } from "@reach/router";
import TodoItem from "../TodoItem";

const Items = () => {
  const { id } = useParams();
  const usedFilters = filters[id];

  return (
    <div>
      {Object.values(items)
        .filter((i) => usedFilters.filterMethod(i))
        .map((i) => {
          return <TodoItem item={i} key={i.id} />;
        })}
    </div>
  );
};
export default Items;
