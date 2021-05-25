import { Match } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { useDefaultTodos } from "../hooks/selectors";
import { useProjectActions, useTodos } from "../Providers/ItemProvider";
import { inboxId, staticTodo } from "../shared/constants";
import Icon from "../shared/Icon";
import Link from "../wrappers/Link";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  font-size: ${(props) => props.theme.spaces[15]};
`;

const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[22]};
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;
const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticProjects = () => {
  const staticProjects = useDefaultTodos();
  const { todos } = useTodos();
  const { handleSelected } = useProjectActions();

  return (
    <div>
      {Object.values(staticProjects)
        .filter((i) => i.id === staticTodo.id)
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
                >
                  <Link to={to} onClick={() => handleSelected(console.log(i))}>
                    <ItemsContainer key={i.id}>
                      <ContentIconContainer>
                        <Icon name="inbox" color="#246fe0" />
                      </ContentIconContainer>
                      <ContentTitleContainer>
                        {i.title}
                        <CounterContainer>
                          {
                            Object.values(todos).filter(
                              (i) => i.categoryId === inboxId
                            ).length
                          }
                        </CounterContainer>
                      </ContentTitleContainer>
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
