import React from "react";
import styled, { useTheme } from "styled-components";
import { useDefaultTodos, useStaticProjectsItems } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import { favoritesId, inboxId } from "../../shared/constants";
import Icon from "../../shared/Icon";
import FavoritesList from "./FavoritesList";

const ProjectsItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.theme.spaces[1]};
`;

const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[16]};
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

const FavoritesMainTitle = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
  font-weight: ${(props) => props.theme.spaces[34]};
`;

const Container = styled.div``;

const Favorites = () => {
  const { handleSwitchItem } = useVisibiltyState();
  const favorites = useStaticProjectsItems();
  const { staticItems } = useProjectActions();
  const projects = useDefaultTodos();
  const projectsItems = React.useMemo(
    () =>
      Object.values(projects)
        .filter((i) => i.id !== inboxId)
        .filter((i) => i.favorite).length,
    [projects]
  );
  const { colors } = useTheme();

  const handleOpenCloseFavorites = React.useCallback(
    (item) => {
      staticItems(item);
      handleSwitchItem();
    },
    [staticItems, handleSwitchItem]
  );

  return (
    projectsItems !== 0 && (
      <Container>
        {Object.values(favorites)
          .filter((i) => i.id === favoritesId)
          .map((i) => (
            <Container>
              <ProjectsItemsContainer
                onClick={() => handleOpenCloseFavorites(i)}
              >
                <ContentIconContainer>
                  {!i.opened ? (
                    <ContentIconContainer>
                      <Icon name="rightArrow" color={colors["text6"]} />
                    </ContentIconContainer>
                  ) : (
                    <ContentIconContainer>
                      <Icon name="rightDown" color={colors["text6"]} />
                    </ContentIconContainer>
                  )}
                </ContentIconContainer>
                <ContentTitleContainer>
                  <FavoritesMainTitle>{i.title}</FavoritesMainTitle>
                </ContentTitleContainer>
              </ProjectsItemsContainer>
              {i.opened && <FavoritesList />}
            </Container>
          ))}
      </Container>
    )
  );
};
export default Favorites;
