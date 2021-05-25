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
const ContentHeader = styled.div`
  display: flex;
  background-color: #fff;
  top: ${(props) => props.theme.spaces[28]};
  padding-top: ${(props) => props.theme.spaces[55]};
`;
const HeaderContent = styled.div`
  display: flex;
  width: ${(props) => props.theme.spaces[27]};
  padding-bottom: ${(props) => props.theme.spaces[43]};
  margin: ${(props) => props.theme.spaces[28]} auto;
  border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
  margin: ${(props) => props.theme.spaces[56]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[57]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[9]};
`;
const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
`;
const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
`;
const HeaderContentButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.muted5};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[58]};
`;
const HeaderButtonsIconContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.text3};
`;
const HeaderButtonTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-right: ${(props) => props.theme.spaces[2]};
  color: ${(props) => props.theme.colors.text3};
`;
const ContentHeaderDotsIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[33]};
  height: ${(props) => props.theme.spaces[33]};
  font-size: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text1};
`;

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
          <LayoutContainer>
            <Header item={i} handleOpenCloseSideBar={handleOpenCloseSideBar} />
            <div style={{ display: "flex" }}>
              {!i.opened ? <SideBar /> : ""}
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
{
  /* <MainInfoContent /> */
  /* Should be switched according to the content */
}
