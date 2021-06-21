import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "./SideBar";
import useVisibiltyState from "../hooks/useVisibiltyState";
import { useProjectActions } from "../Providers/ItemProvider";
import { useStaticProjectsItems } from "../hooks/selectors";
import { hamburgerId } from "../shared/constants";

const MainContentContainer = styled.div`
  height: calc(100vh - 44px);
  display: flex;
  flex-grow: ${(props) => props.theme.spaces[35]};
  justify-content: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.theme.spaces[35]};
  max-width: ${(props) => props.theme.spaces[54]};
`;

const LayoutContainer = styled.div``;

const Layout = (props) => {
  const items = useStaticProjectsItems();
  const { staticItems } = useProjectActions();
  const { handleSwitchItem } = useVisibiltyState();

  const handleOpenCloseSideBar = (item) => {
    staticItems(item);
    handleSwitchItem();
  };

  return (
    <div>
      {Object.values(items)
        .filter((i) => i.id === hamburgerId)
        .map((i) => (
          <LayoutContainer key={i.id}>
            <Header item={i} handleOpenCloseSideBar={handleOpenCloseSideBar} />
            <div style={{ display: "flex" }}>
              {!i.opened && <SideBar />}
              <MainContentContainer>
                <ContentContainer>{props.children}</ContentContainer>
              </MainContentContainer>
            </div>
          </LayoutContainer>
        ))}
    </div>
  );
};
export default Layout;

//notes

/* <MainInfoContent /> */
/* Should be switched according to the content */
