import React from "react";
import { useDefaultTodos } from "../hooks/selectors";
import useVisibiltyState from "../hooks/useVisibiltyState";
import { useTodos } from "../Providers/ItemProvider";
import {
  formatDateToProjectDate,
  formatDateToTodoDate,
} from "../shared/date-formatter";
import Icon from "../shared/Icon";
import styled from "styled-components";
import MainInfoContent from "./MainInfoContent";
import TodayProjectItem from "./TodayProjectItem";

const HeaderContentTitleContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.3s;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
`;

const TitleContainer = styled.div`
  border-radius: 5px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: flex;
`;

const TitleDate = styled.div`
  color: grey;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
  margin-top: 3px;
`;

const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: #333;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
  text-decoration: none;
  color: grey;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  background: transparent;
`;

const SortButtonTitle = styled.span`
  font-size: 12px;
  margin-left: 6px;
  margin-right: 6px;
`;

const ContentContainer = styled.div`
  padding-left: 55px;
  padding-right: 55px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.div``;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: var(--view-header-height);
  background-color: #fff;
  border: #ddd;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0;
  z-index: 2;
`;

const SectionHeaderTitle = styled.h2`
  display: flex;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: var(--view-header-height);
  background-color: #fff;
  border: #ddd;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0;
  z-index: 2;
  width: 100%;
  background: green;
`;

const TodayItem = (props) => {
  const projectItems = useDefaultTodos();
  const item = React.useMemo(
    () => Object.values(projectItems).find((i) => i.id === props.id),
    [projectItems]
  );
  const titleDate = formatDateToProjectDate(new Date());
  const { todos } = useTodos();
  const { toggle, handleToggle } = useVisibiltyState();
  const formatedCurrentDay = formatDateToTodoDate(new Date());

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos).filter(
      (i) => formatDateToTodoDate(i.date) <= formatedCurrentDay
    ).length;
  }, [todos]);

  const renderTodos = React.useCallback(() => {
    return (
      <div>
        {Object.values(todos)
          .filter((i) => formatDateToTodoDate(i.date) <= formatedCurrentDay)
          .map((i) => {
            return <TodayProjectItem item={i} key={i.id} />;
          })}
      </div>
    );
  }, [todos]);

  return (
    <div>
      <div
        style={{
          marginBottom: 24,
          display: "flex",
          backgroundColor: "#fff",
          flexShrink: 0,
          top: 0,
          zIndex: 2,
          paddingLeft: 55,
          paddingRight: 55,
          paddingTop: 36,
        }}
      >
        <HeaderContentTitleContainer>
          <TitleContainer>
            <span>Today</span>
            <TitleDate>{titleDate}</TitleDate>
          </TitleContainer>
        </HeaderContentTitleContainer>
        <SortButtonContainer>
          <SortButton>
            <Icon name="longArrowDown" style={{ fontSize: 16 }} />
            <Icon name="longArrowUp" style={{ marginLeft: 2, fontSize: 16 }} />
            <SortButtonTitle>Sort</SortButtonTitle>
          </SortButton>
        </SortButtonContainer>
      </div>
      <ContentContainer>
        {/* <ContentSection>
          <SectionHeader>
            <SectionHeaderTitle>Overdue</SectionHeaderTitle>
          </SectionHeader>
        </ContentSection> */}
        {renderTodosCounter() !== 0 && renderTodos()}
        {renderTodosCounter() === 0 && (
          <MainInfoContent
            item={item}
            toggle={toggle}
            handleToggle={handleToggle}
          />
        )}
      </ContentContainer>
    </div>
  );
};
export default TodayItem;
