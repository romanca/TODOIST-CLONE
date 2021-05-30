import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useProjectActions } from "../../Providers/ItemProvider";
import {
  useEditProjectsDialog,
  useProjectMessageDialog,
} from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";

const MainProjectDropDownContainer = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  transform: translate(1090px, 105px);
  background-color: #fff;
  border-collapse: separate;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  margin: 0;
  padding: 4px 0;
  width: 250px;
  z-index: 1000;
`;
const MenuItem = styled.div`
  padding: 4px 10px;
  display: flex;
  cursor: pointer;
`;
const IconMenuContainer = styled.div`
  color: grey;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
const MenuSeparator = styled.div`
  margin: 4px;
  border-bottom: 1px solid #ddd;
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
  font-size: 10px;
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

const ContentHeaderDotsIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[33]};
  height: ${(props) => props.theme.spaces[33]};
  font-size: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text1};
`;

const ProjectDropDown = ({ item }) => {
  const removeProjectDialog = useProjectMessageDialog();
  const openEditProjectModal = useEditProjectsDialog();
  const { handleSelected } = useProjectActions();
  const { ref, open, handleOpenClose } = useVisibiltyState();

  const handleSelectProject = (item) => {
    handleOpenClose();
    handleSelected(item);
  };

  return (
    <div ref={ref}>
      <HeaderButton onClick={() => handleSelectProject(item)}>
        <ContentHeaderDotsIconContainer>
          <Icon name="circle" />
          <Icon name="circle" />
          <Icon name="circle" />
        </ContentHeaderDotsIconContainer>
      </HeaderButton>
      {open ? (
        <MainProjectDropDownContainer>
          <div onClick={handleOpenClose}>
            <MenuItem onClick={openEditProjectModal}>
              <IconMenuContainer>
                <Icon name="edit" />
              </IconMenuContainer>
              <Title>Edit project</Title>
            </MenuItem>
          </div>
          <div onClick={handleOpenClose}>
            <MenuItem onClick={removeProjectDialog}>
              <IconMenuContainer>
                <Icon name="trash" />
              </IconMenuContainer>
              <Title>Remove project</Title>
            </MenuItem>
          </div>
          <MenuSeparator />
          <MenuItem>
            <IconMenuContainer>
              <CheckBoxButton>
                <Icon name="check" />
              </CheckBoxButton>
            </IconMenuContainer>
            <Title>Show completed tasks</Title>
          </MenuItem>
          <MenuItem>
            <IconMenuContainer>
              <Icon name="archive" />
            </IconMenuContainer>
            <Title>Archive</Title>
          </MenuItem>
        </MainProjectDropDownContainer>
      ) : (
        ""
      )}
    </div>
  );
};
export default ProjectDropDown;
