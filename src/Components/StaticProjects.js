import { Match } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { useDefaultTodos } from "../hooks/selectors";
import { useTodos } from "../Providers/ItemProvider";
import { inboxId } from "../shared/constants";
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

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const StaticProjects = () => {
  const staticProjects = useDefaultTodos();
  const { todos } = useTodos();

  return (
    <div>
      {Object.values(staticProjects)
        .filter((i) => i.id === inboxId)
        .map((i) => {
          const to = `project/${i.id}`;
          return (
            <Match path={to}>
              {({ match }) => (
                <div
                  style={{
                    backgroundColor: match ? "#ececec" : "",
                    borderRadius: match ? 5 : "",
                    width: 180,
                  }}
                  key={i.id}
                >
                  <Link to={to}>
                    <ItemsContainer>
                      <div style={{ display: "flex" }}>
                        <ContentIconContainer>
                          <Icon name="inbox" color="#246fe0" />
                        </ContentIconContainer>
                        <ContentTitleContainer>
                          <Title>{i.title}</Title>
                        </ContentTitleContainer>
                      </div>
                      <CounterContainer>
                        {
                          Object.values(todos)
                            .filter((i) => i.categoryId === inboxId)
                            .filter((i) => !i.visible).length
                        }
                      </CounterContainer>
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
export default StaticProjects;
