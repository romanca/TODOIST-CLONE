import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodos } from "../../Providers/ItemProvider";
import FavoriteItemDropDown from "./FavoriteItemDropDown";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spaces[1]};
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
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[80]};
  width: 130px;
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  font-size: ${(props) => props.theme.spaces[15]};
`;

const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FavoriteItem = ({ to, item }) => {
  const { toggle, handleToggleOpen } = useVisibiltyState();
  const todos = useTodos();

  return (
    <ItemsContainer onMouseEnter={handleToggleOpen}>
      <Link to={to} style={{ textDecoration: "none", width: 15 }}>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </Link>
      {toggle ? (
        <FavoriteItemDropDown item={item} />
      ) : (
        <ContentIconContainer>
          <CounterContainer>
            {
              Object.values(todos).filter((i) => i.categoryId === item.id)
                .length
            }
          </CounterContainer>
        </ContentIconContainer>
      )}
    </ItemsContainer>
  );
};
export default FavoriteItem;
