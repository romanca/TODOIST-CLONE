import React from "react";
import { useTodos } from "../../Providers/ItemProvider";
import TodoItem from "../Todo/TodoItem";
import styled, { useTheme } from "styled-components";
import Icon from "../../shared/Icon";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useParams } from "@reach/router";

const CompletedTasksButtonContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background3};
  padding-top: ${(props) => props.theme.spaces[30]};
  padding-bottom: ${(props) => props.theme.spaces[30]};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.muted5};
  margin-top: ${(props) => props.theme.spaces[98]};
`;

const CheckBoxContainer = styled.div`
  z-index: ${(props) => props.theme.spaces[35]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  cursor: pointer;
  margin-right: ${(props) => props.theme.spaces[30]};
`;

const CheckBoxButton = styled.span`
  height: ${(props) => props.theme.spaces[37]};
  width: ${(props) => props.theme.spaces[37]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.text7};
  border-radius: ${(props) => props.theme.spaces[25]};
`;

const CheckBoxIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[37]};
  height: ${(props) => props.theme.spaces[37]};
  border-radius: ${(props) => props.theme.spaces[25]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[48]};
  font-weight: ${(props) => props.theme.spaces[7]};
  color: ${(props) => props.theme.colors.text7};
`;

const CheckBoxContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;

const CompletedTodosList = () => {
  const { todos } = useTodos();
  const { visible, handleVisible } = useVisibiltyState();
  const { id } = useParams();
  const { spaces } = useTheme();

  const renderCompletedTodos = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.visible)
      .filter((i) => i.categoryId === id)
      .map((i) => {
        return <TodoItem item={i} key={i.id} />;
      });
  }, [todos, id]);

  return (
    <Container>
      {visible ? (
        <CompletedTasksButtonContainer onClick={handleVisible}>
          <CheckBoxContentContainer>
            <CheckBoxContainer>
              <CheckBoxButton>
                <CheckBoxIconContainer>
                  <Icon
                    name="check"
                    style={{ marginLeft: spaces[99], marginTop: spaces[56] }}
                  />
                </CheckBoxIconContainer>
              </CheckBoxButton>
            </CheckBoxContainer>
          </CheckBoxContentContainer>
        </CompletedTasksButtonContainer>
      ) : (
        renderCompletedTodos()
      )}
    </Container>
  );
};

export default CompletedTodosList;
