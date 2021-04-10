import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Icon from "../shared/Icon";

const Container = styled.div`
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-color: ${(props) => props.theme.colors.muted1};
  background-color: ${(props) => props.theme.colors.muted};
  padding-left: 42px;
  padding-right: 42px;
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
`;

const Header = () => {
  return (
    <Container>
      <LeftSideButtonsContainer>
        <LeftIconButtonsContainer>
          <Icon name="bars" color="#909090" />
        </LeftIconButtonsContainer>
        <LeftIconButtonsContainer>
          <Icon name="home" color="#909090" />
        </LeftIconButtonsContainer>
        <SearchInput />
      </LeftSideButtonsContainer>
    </Container>
  );
};

export default Header;
