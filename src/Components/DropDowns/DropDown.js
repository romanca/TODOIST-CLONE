import React from "react";
import styled from "styled-components";
import { useProjectActions } from "../../Providers/ItemProvider";
import Icon from "../../shared/Icon";
import {
  useEditProjectsDialog,
  useProjectMessageDialog,
} from "../../Providers/ModalProvider";

const SelectedItemContainer = styled.div`
  position: absolute;
  z-index: ${(props) => props.theme.spaces[51]};
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.muted5};
  border-radius: ${(props) => props.theme.spaces[0]};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  margin: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  min-width: ${(props) => props.theme.spaces[52]};
  font-size: ${(props) => props.theme.spaces[36]};
  left: ${(props) => props.theme.spaces[53]};
  margin-top: ${(props) => props.theme.spaces[48]};
`;
const SelectedItem = styled.div`
  cursor: pointer;
  padding: ${(props) => props.theme.spaces[1]};
  margin: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  :hover {
    background: ${(props) => props.theme.colors.background2};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;
const SelectedItemContent = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[48]};
  padding-bottom: ${(props) => props.theme.spaces[9]};
  padding-top: ${(props) => props.theme.spaces[9]};
  align-items: flex-start;
  display: flex;
`;
const SelectedItemIconContainer = styled.div`
  color: grey;
  height: ${(props) => props.theme.spaces[12]};
  width: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[48]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[37]};
`;
const Content = styled.div`
  line-height: ${(props) => props.theme.spaces[12]};
`;
const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  font-size: ${(props) => props.theme.spaces[15]};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DropDown = ({
  item,
  handleHover,
  open,
  handleOpenClose,
  handleClose,
}) => {
  const { favoriteProjects, handleSelected } = useProjectActions();
  const openProjectModal = useProjectMessageDialog();
  const openEditProjectModal = useEditProjectsDialog();

  const handleFavoriteProject = (item) => {
    favoriteProjects(item);
    handleClose();
  };

  const handleRemoveProject = (item) => {
    handleSelected(item);
    handleClose();
  };

  const handleEditProject = (item) => {
    handleSelected(item);
    handleClose();
  };

  const handleSelectProject = (item) => {
    handleOpenClose();
    handleSelected(item);
    handleHover();
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <ContentIconContainer>
          <Icon name="th" color="rgba(0,0,0,.54);" />
        </ContentIconContainer> */}
      <CounterContainer>
        <ContentIconContainer onClick={() => handleSelectProject(item)}>
          <Icon
            name="horizontalDots"
            style={{
              fontSize: 15,
            }}
          />
        </ContentIconContainer>
        {open ? (
          <div>
            <SelectedItemContainer>
              <SelectedItem onClick={() => handleEditProject(item)}>
                <SelectedItemContent onClick={openEditProjectModal}>
                  <SelectedItemIconContainer>
                    <Icon name="edit" />
                  </SelectedItemIconContainer>
                  <Content>Edit</Content>
                </SelectedItemContent>
              </SelectedItem>
              <SelectedItem onClick={() => handleRemoveProject(item)}>
                <SelectedItemContent onClick={openProjectModal}>
                  <SelectedItemIconContainer>
                    <Icon name="trash" />
                  </SelectedItemIconContainer>
                  <Content>Remove Project</Content>
                </SelectedItemContent>
              </SelectedItem>
              {item.favorite ? (
                ""
              ) : (
                <SelectedItem onClick={() => handleFavoriteProject(item)}>
                  <SelectedItemContent>
                    <SelectedItemIconContainer>
                      <Icon name="hearth" />
                    </SelectedItemIconContainer>
                    <Content>Add to favorites</Content>
                  </SelectedItemContent>
                </SelectedItem>
              )}
            </SelectedItemContainer>
          </div>
        ) : (
          ""
        )}
      </CounterContainer>
    </div>
  );
};

export default DropDown;
