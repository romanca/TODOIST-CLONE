import React, { useEffect } from "react";
import Theme from "./Providers/ThemeProvider";
import styled from "styled-components";
import Icon from "./shared/Icon";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";

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

const App = () => {
  return (
    <Theme>
      <Header>
        <LeftSideButtonsContainer>
          <LeftIconButtonsContainer>
            <Icon name="bars" color="#909090" />
          </LeftIconButtonsContainer>
          <LeftIconButtonsContainer>
            <Icon name="home" color="#909090" />
          </LeftIconButtonsContainer>
          <SearchInput />
        </LeftSideButtonsContainer>
      </Header>
    </Theme>
  );
};
export default App;
