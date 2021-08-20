import React from "react";
import styled from "styled-components";
import { useCompletedTodos, useDefaultTodos } from "../../../hooks/selectors";
import TodayProjectItem from "./TodayProjectItem";
import useVisibiltyState from "../../../hooks/useVisibiltyState";
import { formatDateToTodoDate } from "../../../shared/date-formatter";
import SubmitFormInput from "../../Inputs/SubmitFormInput";

const HeaderContentTitleContainer = styled.div`
  display: flex;
  width: ${(props) => props.theme.spaces[27]};
  padding-bottom: ${(props) => props.theme.spaces[43]};
  max-width: ${(props) => props.theme.spaces[54]};
  margin: ${(props) => props.theme.spaces[8]} auto;
  border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
  transition: border-bottom-color 0.3s;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
`;

const TitleContainer = styled.div`
  border-radius: ${(props) => props.theme.spaces[1]};
  display: inline-block;
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  line-height: ${(props) => props.theme.spaces[69]};
  padding: ${(props) => props.theme.spaces[8]};
  margin: ${(props) => props.theme.spaces[8]};
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.theme.spaces[84]};
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: flex;
`;

const TitleDate = styled.div`
  color: grey;
  margin-left: ${(props) => props.theme.spaces[2]};
  font-size: ${(props) => props.theme.spaces[15]};
  font-weight: ${(props) => props.theme.spaces[26]};
  margin-top: ${(props) => props.theme.spaces[0]};
`;

const ContentContainer = styled.div`
  max-width: ${(props) => props.theme.spaces[54]};
  margin: ${(props) => props.theme.spaces[8]} auto;
  position: relative;
  z-index: ${(props) => props.theme.spaces[35]};
`;

const Container = styled.div``;

const HeaderContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spaces[12]};
  display: flex;
  background-color: #fff;
  flex-shrink: ${(props) => props.theme.spaces[24]};
  top: ${(props) => props.theme.spaces[24]};
  z-index: ${(props) => props.theme.spaces[84]};
  padding-top: ${(props) => props.theme.spaces[55]};
`;

const TodayItem = (props) => {
  const projectItems = useDefaultTodos();
  const item = React.useMemo(
    () => Object.values(projectItems).find((i) => i.id === props.id),
    [projectItems, props.id]
  );
  const todos = useCompletedTodos();
  const { toggle, handleToggle } = useVisibiltyState();
  const formatedCurrentDay = formatDateToTodoDate(new Date());

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos).filter(
      (i) => formatDateToTodoDate(i.date) <= formatedCurrentDay
    ).length;
  }, [todos, formatedCurrentDay]);

  const renderTodos = () => {
    return Object.values(todos)
      .filter((i) => formatDateToTodoDate(i.date) <= formatedCurrentDay)
      .filter((i) => i.date !== "")
      .map((i) => {
        console.log({ i, todos });
        return <TodayProjectItem item={i} key={i.id} />;
      });
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderContentTitleContainer>
          <TitleContainer>
            <Container>Today</Container>
            <TitleDate>{formatedCurrentDay}</TitleDate>
          </TitleContainer>
        </HeaderContentTitleContainer>
      </HeaderContainer>
      <ContentContainer>
        {renderTodos()}
        <SubmitFormInput toggle={toggle} handleToggle={handleToggle} />
        {/* {renderTodosCounter === 0 && (
          <MainInfoContent
            item={item}
            toggle={toggle}
            handleToggle={handleToggle}
          />
        )} */}
      </ContentContainer>
    </Container>
  );
};
export default TodayItem;
