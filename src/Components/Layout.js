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
  width: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.theme.spaces[35]};
  max-width: ${(props) => props.theme.spaces[54]};
`;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

const Layout = (props) => {
  const items = useStaticProjectsItems();
  const { staticItems } = useProjectActions();
  const { handleSwitchItem } = useVisibiltyState();

  const handleOpenCloseSideBar = (item) => {
    staticItems(item);
    handleSwitchItem();
  };

  return (
    <Container>
      {Object.values(items)
        .filter((i) => i.id === hamburgerId)
        .map((i) => (
          <Container key={i.id}>
            <Header item={i} handleOpenCloseSideBar={handleOpenCloseSideBar} />
            <Content>
              {!i.opened && <SideBar />}
              <MainContentContainer>
                <ContentContainer>{props.children}</ContentContainer>
              </MainContentContainer>
            </Content>
          </Container>
        ))}
    </Container>
  );
};
export default Layout;
