import React from "react";
import styled from "styled-components";
import Favorites from "./Favorites/Favorites";
import Filters from "./Filters/Filters";
import Projects from "./Projects/Projects";
import StaticProjects from "./StaticProjects";

const SideBarContainer = styled.div`
  height: calc(100vh - 44px);
  width: ${(props) => props.theme.spaces[19]};
  border-right: ${(props) => props.theme.spaces[8]} solid grey;
  background-color: ${(props) => props.theme.colors.muted6};
  overflow: scroll;
`;
const MenuContainer = styled.div`
  box-sizing: border-box;
  padding-top: ${(props) => props.theme.spaces[20]};
  padding-left: ${(props) => props.theme.spaces[21]};
`;
const Space = styled.div`
  height: ${(props) => props.theme.spaces[15]};
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <MenuContainer>
        <StaticProjects />
        <Space />
        <Favorites />
        <Space />
        <Projects />
        <Space />
        <Filters />
      </MenuContainer>
    </SideBarContainer>
  );
};

export default SideBar;

// min-width: 220
// max-width: 420
// "homepage": "https://romanca.github.io/todoist-clone",
