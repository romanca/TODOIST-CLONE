import React from "react";
import styled, { useTheme } from "styled-components";
import { useCompletedTodos } from "../../../hooks/selectors";
import { formatDateToTodoDate } from "../../../shared/date-formatter";
import Icon from "../../../shared/Icon";

const ItemsContainer = styled.div`
  font-weight: ${(props) => props.theme.spaces[26]};
  border-radius: ${(props) => props.theme.spaces[1]};
  width: ${(props) => props.theme.spaces[27]};
  height: ${(props) => props.theme.spaces[10]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const CounterContainer = styled.div`
  width: ${(props) => props.theme.spaces[85]};
  height: ${(props) => props.theme.spaces[10]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[15]};
  color: grey;
  cursor: pointer;
`;

const ContentTitleContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spaces[56]};
  color: #333;
  font-size: ${(props) => props.theme.spaces[14]};
  justify-content: center;
  align-items: center;
`;
const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[85]};
  height: ${(props) => props.theme.spaces[31]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

const TodayTitle = ({ item }) => {
  const todos = useCompletedTodos();
  const currentDate = formatDateToTodoDate(new Date());
  const { colors } = useTheme();

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => formatDateToTodoDate(i.date) <= currentDate)
      .filter((i) => i.date !== "")
      .map((i) => i).length;
  }, [todos, currentDate]);

  return (
    <ItemsContainer>
      <Container>
        <ContentIconContainer>
          <Icon name="today" color={colors["primary2"]} />
        </ContentIconContainer>
        <ContentTitleContainer key={item.id}>
          {item.title}
        </ContentTitleContainer>
      </Container>
      <CounterContainer>
        {renderTodosCounter() !== 0 && renderTodosCounter()}
      </CounterContainer>
    </ItemsContainer>
  );
};

export default TodayTitle;
