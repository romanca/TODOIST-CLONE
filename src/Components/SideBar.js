import React from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Projects from "./Projects";
import StaticProjects from "./StaticProjects";

const SideBarContainer = styled.div`
  height: calc(100vh - 44px);
  width: 220px;
  border-right: 1px solid grey;
  background-color: #fafafa;
`;
const MenuContainer = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  padding-left: 35px;
  position: fixed;
`;
const Space = styled.div`
  height: 12px;
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <MenuContainer>
        <StaticProjects />
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
