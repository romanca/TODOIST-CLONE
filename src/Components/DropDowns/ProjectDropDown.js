import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import {
  useEditProjectsDialog,
  useProjectMessageDialog,
} from "../../Providers/ModalProvider";
import { inboxId } from "../../shared/constants";
import Icon from "../../shared/Icon";

const MainProjectDropDownContainer = styled.div`
  position: absolute;
  inset: ${(props) => props.theme.spaces[28]} auto auto
    ${(props) => props.theme.spaces[28]};
  transform: translate(1090px, 105px);
  background-color: ${(props) => props.theme.colors.background1};
  border-collapse: separate;
  border-radius: ${(props) => props.theme.spaces[0]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  margin: ${(props) => props.theme.spaces[28]};
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  width: ${(props) => props.theme.spaces[52]};
  z-index: ${(props) => props.theme.spaces[47]}; ;
`;
const MenuItem = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
  display: flex;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;
const IconMenuContainer = styled.div`
  color: grey;
  height: ${(props) => props.theme.spaces[12]};
  width: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[30]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[36]};
`;
const MenuSeparator = styled.div`
  margin: ${(props) => props.theme.spaces[9]};
  border-bottom: ${(props) => props.theme.spaces[8]}; solid ${(props) =>
  props.theme.colors.muted7};
`;

const CheckBoxButton = styled.span`
  height: ${(props) => props.theme.spaces[37]};
  width: ${(props) => props.theme.spaces[37]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background4};
  border-radius: ${(props) => props.theme.spaces[25]};
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.spaces[30]};
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
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

const ContentHeaderDotsIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[33]};
  height: ${(props) => props.theme.spaces[33]};
  font-size: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text1};
  padding: ${(props) => props.theme.spaces[0]};
`;

const Container = styled.div``;

const ProjectDropDown = ({ item, handleVisible, visible }) => {
  const removeProjectDialog = useProjectMessageDialog();
  const openEditProjectModal = useEditProjectsDialog();
  const { handleSelected } = useProjectActions();
  const { ref, open, handleOpenClose } = useVisibiltyState();

  const handleSelectProject = React.useCallback(
    (item) => {
      handleOpenClose();
      handleSelected(item);
    },
    [handleSelected, handleOpenClose]
  );

  const handleShowCompleted = React.useCallback(() => {
    handleOpenClose();
    handleVisible();
  }, [handleOpenClose, handleVisible]);

  return (
    <Container ref={ref}>
      <HeaderButton onClick={() => handleSelectProject(item)}>
        <ContentHeaderDotsIconContainer>
          <Icon name="circle" />
          <Icon name="circle" />
          <Icon name="circle" />
        </ContentHeaderDotsIconContainer>
      </HeaderButton>
      {open &&
        (item.id === inboxId ? (
          <MainProjectDropDownContainer onClick={handleShowCompleted}>
            {!visible ? (
              <MenuItem>
                <IconMenuContainer>
                  <CheckBoxButton>
                    <Icon name="check" />
                  </CheckBoxButton>
                </IconMenuContainer>
                <Title>Show completed tasks</Title>
              </MenuItem>
            ) : (
              <MenuItem>
                <IconMenuContainer>
                  <CheckBoxButton>
                    <Icon name="minus" />
                  </CheckBoxButton>
                </IconMenuContainer>
                <Title>Hide completed tasks</Title>
              </MenuItem>
            )}
          </MainProjectDropDownContainer>
        ) : (
          <MainProjectDropDownContainer>
            <Container onClick={handleOpenClose}>
              <MenuItem onClick={openEditProjectModal}>
                <IconMenuContainer>
                  <Icon name="edit" />
                </IconMenuContainer>
                <Title>Edit project</Title>
              </MenuItem>
            </Container>
            <Container onClick={handleOpenClose}>
              <MenuItem onClick={removeProjectDialog}>
                <IconMenuContainer>
                  <Icon name="trash" />
                </IconMenuContainer>
                <Title>Remove project</Title>
              </MenuItem>
            </Container>
            <MenuSeparator />
            {!visible ? (
              <MenuItem onClick={handleShowCompleted}>
                <IconMenuContainer>
                  <CheckBoxButton>
                    <Icon name="check" />
                  </CheckBoxButton>
                </IconMenuContainer>
                <Title>Show completed tasks</Title>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleShowCompleted}>
                <IconMenuContainer>
                  <CheckBoxButton>
                    <Icon name="minus" />
                  </CheckBoxButton>
                </IconMenuContainer>
                <Title>Hide completed tasks</Title>
              </MenuItem>
            )}
            {/* <MenuItem>
              <IconMenuContainer>
                <Icon name="archive" />
              </IconMenuContainer>
              <Title>Archive</Title>
            </MenuItem> */}
          </MainProjectDropDownContainer>
        ))}
    </Container>
  );
};
export default ProjectDropDown;
