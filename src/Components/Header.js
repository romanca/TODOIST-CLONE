import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "../shared/Icon";
import SearchInput from "./Inputs/SearchInput";

const Container = styled.div`
  height: ${(props) => props.theme.spaces[17]};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-color: ${(props) => props.theme.colors.muted1};
  background-color: ${(props) => props.theme.colors.muted};
  padding-left: ${(props) => props.theme.spaces[18]};
  padding-right: ${(props) => props.theme.spaces[18]};
`;
const LeftSideButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftIconButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: ${(props) => props.theme.spaces[5]};
  height: ${(props) => props.theme.spaces[5]};
  font-weight: ${(props) => props.theme.spaces[7]};
  :hover {
    background: ${(props) => props.theme.colors.muted2};
    border-radius: ${(props) => props.theme.spaces[9]};
    cursor: pointer;
`;

const Header = ({ item, handleOpenCloseSideBar }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <LeftSideButtonsContainer>
        <LeftIconButtonsContainer onClick={() => handleOpenCloseSideBar(item)}>
          <Icon name="bars" color={colors["muted15"]} />
        </LeftIconButtonsContainer>
        <LeftIconButtonsContainer>
          <Icon name="home" color={colors["muted15"]} />
        </LeftIconButtonsContainer>
        <SearchInput />
      </LeftSideButtonsContainer>
    </Container>
  );
};

export default Header;
