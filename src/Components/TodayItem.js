import React from "react";
import { useCompletedTodos, useDefaultTodos } from "../hooks/selectors";
import useVisibiltyState from "../hooks/useVisibiltyState";
import { formatDateToTodoDate } from "../shared/date-formatter";
import Icon from "../shared/Icon";
import styled from "styled-components";
import MainInfoContent from "./MainInfoContent";
import TodayProjectItem from "./TodayProjectItem";
import SubmitFormInput from "./SubmitFormInput";

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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContentHeader = styled.div`
  display: flex;
  background-color: #fff;
  top: ${(props) => props.theme.spaces[28]};
  padding-top: ${(props) => props.theme.spaces[55]};
`;

const HeaderContent = styled.div`
  display: flex;
  width: ${(props) => props.theme.spaces[27]};
  padding-bottom: ${(props) => props.theme.spaces[43]};
  margin: ${(props) => props.theme.spaces[28]} auto;
  border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
  margin: ${(props) => props.theme.spaces[56]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[57]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[9]};
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.spaces[28]};
  margin-right: -5px;
  margin-top: 10px;
`;

const HeaderButtonsIconContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.text3};
`;

const HeaderButtonTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-right: ${(props) => props.theme.spaces[2]};
  color: ${(props) => props.theme.colors.text3};
`;

// const ContentSection = styled.div``;

// const SectionHeader = styled.div`
//   display: flex;
//   align-items: center;
//   position: -webkit-sticky;
//   position: sticky;
//   top: var(--view-header-height);
//   background-color: #fff;
//   border: #ddd;
//   font-size: 14px;
//   border-bottom: 1px solid #f0f0f0;
//   padding: 0;
//   z-index: 2;
// `;

// const SectionHeaderTitle = styled.h2`
//   display: flex;
//   align-items: center;
//   position: -webkit-sticky;
//   position: sticky;
//   top: var(--view-header-height);
//   background-color: #fff;
//   border: #ddd;
//   font-size: 14px;
//   border-bottom: 1px solid #f0f0f0;
//   padding: 0;
//   z-index: 2;
//   width: 100%;
//   background: green;
// `;

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

  const renderTodos = React.useCallback(() => {
    return (
      <div>
        {Object.values(todos)
          .filter((i) => formatDateToTodoDate(i.date) <= formatedCurrentDay)
          .filter((i) => i.date !== "")
          .map((i) => {
            return <TodayProjectItem item={i} key={i.id} />;
          })}
      </div>
    );
  }, [todos, formatedCurrentDay]);

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
          paddingTop: 36,
        }}
      >
        <HeaderContentTitleContainer>
          <TitleContainer>
            <span>Today</span>
            <TitleDate>{formatedCurrentDay}</TitleDate>
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
        <SubmitFormInput toggle={toggle} handleToggle={handleToggle} />
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
