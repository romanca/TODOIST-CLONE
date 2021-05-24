import React from "react";
import styled from "styled-components";
import { useProjectMessageDialog } from "../Providers/ModalProvider";
import Icon from "../shared/Icon";

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

const ProjectDropDown = ({ handleOpenClose }) => {
  const removeProjectDialog = useProjectMessageDialog();

  return (
    <MainProjectDropDownContainer onClick={handleOpenClose}>
      <MenuItem>
        <IconMenuContainer>
          <Icon name="edit" />
        </IconMenuContainer>
        <Title>Edit project</Title>
      </MenuItem>
      <MenuItem onClick={removeProjectDialog}>
        <IconMenuContainer>
          <Icon name="trash" />
        </IconMenuContainer>
        <Title>Remove project</Title>
      </MenuItem>
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
  );
};
export default ProjectDropDown;
