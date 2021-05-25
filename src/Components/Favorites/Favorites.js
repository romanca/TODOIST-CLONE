import React from "react";
import styled from "styled-components";
import { useStaticProjectsItems } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import { favoritesId, hamburgerId } from "../../shared/constants";
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

const Favorites = () => {
  const { handleSwitchItem } = useVisibiltyState();
  const favorites = useStaticProjectsItems();
  const { staticItems } = useProjectActions();

  const handleOpenCloseFavorites = (item) => {
    staticItems(item);
    handleSwitchItem();
  };

  return (
    <div>
      {Object.values(favorites)
        .filter((i) => i.id === favoritesId)
        .map((i) => (
          <div>
            <ProjectsItemsContainer onClick={() => handleOpenCloseFavorites(i)}>
              <ContentIconContainer>
                {!i.opened ? (
                  <ContentIconContainer>
                    <Icon name="rightArrow" color="rgba(0,0,0,.54);" />
                  </ContentIconContainer>
                ) : (
                  <ContentIconContainer>
                    <Icon name="rightDown" color="rgba(0,0,0,.54);" />
                  </ContentIconContainer>
                )}
              </ContentIconContainer>
              <ContentTitleContainer>
                <FavoritesMainTitle>{i.title}</FavoritesMainTitle>
              </ContentTitleContainer>
            </ProjectsItemsContainer>
            {i.opened ? <FavoritesList /> : ""}
          </div>
        ))}
    </div>
  );
};
export default Favorites;
