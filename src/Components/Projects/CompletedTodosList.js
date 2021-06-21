import React from "react";
import { useTodos } from "../../Providers/ItemProvider";
import TodoItem from "../TodoItem";
import styled from "styled-components";
import Icon from "../../shared/Icon";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useParams } from "@reach/router";

const CompletedTasksButtonContainer = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
  margin-top: -20px;
`;

const CheckBoxContainer = styled.div`
  z-index: ${(props) => props.theme.spaces[35]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  cursor: pointer;
  margin-right: 10px;
`;

const CheckBoxButton = styled.span`
  height: ${(props) => props.theme.spaces[37]};
  width: ${(props) => props.theme.spaces[37]};
  border: ${(props) => props.theme.spaces[8]} solid grey;
  border-radius: ${(props) => props.theme.spaces[25]};
`;

const CompletedTodosList = () => {
  const { todos } = useTodos();
  const { visible, handleVisible } = useVisibiltyState();
  const { id } = useParams();

  const renderCompletedTodos = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.visible)
      .filter((i) => i.categoryId === id)
      .map((i) => {
        return <TodoItem item={i} key={i.id} />;
      });
  }, [todos, id]);

  return (
    <div>
      {visible ? (
        <CompletedTasksButtonContainer onClick={handleVisible}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckBoxContainer>
              <CheckBoxButton>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 10,
                    fontWeight: 100,
                    color: "grey",
                  }}
                >
                  <Icon
                    name="check"
                    style={{ marginLeft: -1, marginTop: -2 }}
                    //   color={
                    //     item.priority.id === "priority1"
                    //       ? item.priority.color
                    //       : item.priority.id === "priority2"
                    //       ? item.priority.color
                    //       : item.priority.id === "priority3"
                    //       ? item.priority.color
                    //       : item.priority.id === "priority4" && item.priority.color
                    //   }
                  />
                </div>
              </CheckBoxButton>
            </CheckBoxContainer>
            <div>+ 6 completed tasks</div>
          </div>
        </CompletedTasksButtonContainer>
      ) : (
        renderCompletedTodos()
      )}
    </div>
  );
};

export default CompletedTodosList;
