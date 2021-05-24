import React from "react";
import { useParams } from "@reach/router";
import TodoItem from "../TodoItem";
import SubmitFormInput from "../SubmitFormInput";
import { useTodos } from "../../Providers/ItemProvider";

const ProjectItem = () => {
  const { todos } = useTodos();
  const { id } = useParams();

  const renderProjects = () => {
    return (
      <div>
        {Object.values(todos)
          .filter((i) => i.categoryId === id)
          .map((i) => {
            return <TodoItem item={i} key={i.id} />;
          })}
        <SubmitFormInput />
      </div>
    );
  };

  return renderProjects();
};
export default ProjectItem;
