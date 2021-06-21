import { Match } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { useCompletedTodos, useDefaultTodos } from "../hooks/selectors";
import { todayId } from "../shared/constants";
import { formatDateToTodoDate } from "../shared/date-formatter";
import Icon from "../shared/Icon";
import Link from "../wrappers/Link";

const ItemsContainer = styled.div`
  font-weight: 400;
  border-radius: 5px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: 5px;
  }
`;

const CounterContainer = styled.div`
  width: 38px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: grey;
  cursor: pointer;
`;

const ContentTitleContainer = styled.div`
  display: flex;
  margin-top: -2px;
  color: #333;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;
const ContentIconContainer = styled.div`
  width: 38px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Today = () => {
  const todos = useCompletedTodos();
  const staticProjects = useDefaultTodos();
  const currentDate = formatDateToTodoDate(new Date());

  const renderCounter = Object.values(todos)
    .filter((i) => formatDateToTodoDate(i.date) <= currentDate)
    .filter((i) => i.date !== "")
    .map((i) => i).length;

  return (
    <div>
      {Object.values(staticProjects)
        .filter((i) => i.id === todayId)
        .filter((i) => !i.visible)
        .map((i) => {
          const to = `today/${i.id}`;
          return (
            <Match path={to}>
              {({ match }) => (
                <div
                  style={{
                    backgroundColor: match ? "#ececec" : "",
                    borderRadius: match ? 5 : "",
                    width: 180,
                  }}
                >
                  <Link to={to}>
                    <ItemsContainer>
                      <div style={{ display: "flex" }}>
                        <ContentIconContainer>
                          <Icon name="today" color="#246fe0" />
                        </ContentIconContainer>
                        <ContentTitleContainer key={i.id}>
                          {i.title}
                        </ContentTitleContainer>
                      </div>
                      <CounterContainer>{renderCounter}</CounterContainer>
                    </ItemsContainer>
                  </Link>
                </div>
              )}
            </Match>
          );
        })}
    </div>
  );
};
export default Today;
