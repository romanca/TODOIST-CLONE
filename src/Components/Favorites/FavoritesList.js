import React from "react";
import FavoriteItem from "./FavoriteItem";

const favorites = [
  { title: "Todo 1 Todo 1Todo 1Todo 1Todo 1Todo 1Todo 1 ", number: 3 },
  { title: "Todo 2", number: 4 },
  { title: "Todo 3", number: 9 },
  { title: "Todo 4", number: 3 },
  { title: "Todo 5", number: 2 },
  { title: "Todo 6", number: 1 },
];

const FavoritesList = () => {
  return (
    <div>
      {favorites.map((i) => (
        <div style={{ display: "flex" }}>
          {/* <ContentIconContainer>
            <Icon name="th" color="rgba(0,0,0,.54);" />
          </ContentIconContainer> */}
          <FavoriteItem favorite={i} />
        </div>
      ))}
    </div>
  );
};
export default FavoritesList;
