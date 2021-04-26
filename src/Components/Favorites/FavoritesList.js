import React from "react";
import { favorites } from "../../shared/mockData";
import FavoriteItem from "./FavoriteItem";
import styled from "styled-components";

const FavoritesListContainer = styled.div`
  display: flex;
`;

const FavoritesList = () => {
  return (
    <div>
      {Object.values(favorites).map((item) => (
        <FavoritesListContainer style={{ display: "flex" }}>
          {/* <ContentIconContainer>
            <Icon name="th" color="rgba(0,0,0,.54);" />
          </ContentIconContainer> */}
          <FavoriteItem item={item} key={item.id} />
        </FavoritesListContainer>
      ))}
    </div>
  );
};
export default FavoritesList;
