import { Match } from "@reach/router";
import React from "react";
import styled, { useTheme } from "styled-components";
import { useDefaultTodos } from "../../hooks/selectors";
import { useTodos } from "../../Providers/ItemProvider";
import { inboxId } from "../../shared/constants";
import Icon from "../../shared/Icon";
import Link from "../../wrappers/Link";

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
  margin-top: ${(props) => props.theme.spaces[56]};
  color: ${(props) => props.theme.colors.muted5};
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

const StaticProjects = () => {
  const staticProjects = useDefaultTodos();
  const { todos } = useTodos();
  const { colors, spaces } = useTheme();

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.categoryId === inboxId)
      .filter((i) => !i.visible).length;
  }, [todos, inboxId]);

  return (
    <Container>
      {Object.values(staticProjects)
        .filter((i) => i.id === inboxId)
        .map((i) => {
          const to = `project/${i.id}`;
          return (
            <Match path={to}>
              {({ match }) => (
                <div
                  style={{
                    backgroundColor: match && colors["muted3"],
                    borderRadius: match && spaces[1],
                    width: spaces[86],
                  }}
                  key={i.id}
                >
                  <Link to={to}>
                    <ItemsContainer>
                      <Container>
                        <ContentIconContainer>
                          <Icon name="inbox" color={colors["primary2"]} />
                        </ContentIconContainer>
                        <ContentTitleContainer>
                          <Title>{i.title}</Title>
                        </ContentTitleContainer>
                      </Container>
                      <CounterContainer>
                        {renderTodosCounter() !== 0 && renderTodosCounter()}
                      </CounterContainer>
                    </ItemsContainer>
                  </Link>
                </div>
              )}
            </Match>
          );
        })}
    </Container>
  );
};
export default StaticProjects;
