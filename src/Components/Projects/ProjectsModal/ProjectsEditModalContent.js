import React from "react";
import styled, { useTheme } from "styled-components";
import { useProjectActions } from "../../../Providers/ItemProvider";
import { useModal } from "../../../Providers/ModalProvider";
import Icon from "../../../shared/Icon";
import ColorPicker from "../../Pickers/ColorPicker";
import SwitchInput from "../../Inputs/SwitchInput";

const MainContentContainer = styled.div`
  width: ${(props) => props.theme.spaces[23]};
`;

const FormField = styled.div`
  margin-bottom: ${(props) => props.theme.spaces[33]};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const FormTitle = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  width: ${(props) => props.theme.spaces[25]};
  font-weight: ${(props) => props.theme.spaces[34]};
  display: block;
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[29]};
  color: ${(props) => props.theme.colors.text};
`;

const FormInput = styled.input`
  width: calc(100% - 12px);
  font-size: ${(props) => props.theme.spaces[14]};
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  padding: ${(props) => props.theme.spaces[1]};
  outline: none;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.theme.spaces[35]};
  box-sizing: border-box;
  width: ${(props) => props.theme.spaces[27]};
  overflow: auto;
  overflow-x: hidden;
  padding: ${(props) => props.theme.spaces[33]}
    ${(props) => props.theme.spaces[12]};
  background-color: inherit;
  padding: ${(props) => props.theme.spaces[33]}
    ${(props) => props.theme.spaces[12]};
`;

const ContentHeader = styled.div`
  position: relative;
  padding: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[12]};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.muted6};
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
`;

const ContentFooter = styled.div`
  display: flex;
  background-color: inherit;
  border-top: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  border-bottom-left-radius: ${(props) => props.theme.spaces[30]};
  padding: ${(props) => props.theme.spaces[15]}
    ${(props) => props.theme.spaces[12]};
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]} !important;
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  background: ${(props) => props.theme.colors.muted8};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  border-radius: ${(props) => props.theme.spaces[0]} !important;
  color: ${(props) => props.theme.colors.text} !important;
  outline: none;
  cursor: pointer;
`;

const AddButton = styled.button`
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]} !important;
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  text-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]};
  ${(props) => props.theme.spaces[28]} ${(props) =>
    props.theme.colors.background1};
  background-color: ${(props) => props.theme.colors.accent};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  border-radius: ${(props) => props.theme.spaces[0]} !important;
  color: ${(props) => props.theme.colors.background1} !important;
  margin-left: ${(props) => props.theme.spaces[30]};
  outline: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  display: block;
  margin: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]};
  font-size: ${(props) => props.theme.spaces[37]};
`;

const HeaderTitleContainer = styled.div`
  margin: ${(props) => props.theme.spaces[28]};
  padding: ${(props) => props.theme.spaces[14]}
    ${(props) => props.theme.spaces[28]};
  font-weight: ${(props) => props.theme.spaces[34]};
  flex-grow: ${(props) => props.theme.spaces[35]};
`;

const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spaces[0]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]};
  border: none;
  background-color: transparent;
  border-radius: ${(props) => props.theme.spaces[0]};
  color: ${(props) => props.theme.colors.text};
`;

const ProjectsEditModalContent = () => {
  const { closeModalDialog } = useModal();
  const { editProject, selectedProject } = useProjectActions();
  const [title, setTitle] = React.useState(selectedProject.title);
  const defaultItem = selectedProject.color;
  const [selectedOption, setSelectedOption] = React.useState(defaultItem);
  const colors = selectedOption || defaultItem;
  const { spaces } = useTheme();
  const [favorteItem, setFavoriteItem] = React.useState(
    selectedProject.favorite
  );

  const OptionClicked = (value) => () => {
    setSelectedOption(value);
  };
  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleEditProject = () => {
    const color = colors;
    const favorite = favorteItem;
    editProject({ ...selectedProject, title, color, favorite });
    closeModalDialog();
  };

  const handleFavoriteChange = () => {
    setFavoriteItem((current) => !current);
  };

  return (
    <MainContentContainer>
      <ContentHeader>
        <HeaderTitleContainer>
          <HeaderTitle>Edit project</HeaderTitle>
        </HeaderTitleContainer>
        <InfoIconContainer>
          <Icon name="questionMark" />
        </InfoIconContainer>
      </ContentHeader>
      <ContentContainer>
        <FormField>
          <FormTitle>Name</FormTitle>
          <FormInput type="text" value={title} onChange={handleChange} />
        </FormField>
        <ColorPicker
          selectedOption={selectedOption}
          OptionClicked={OptionClicked}
        />
        <FormField>
          <SwitchInput value={favorteItem} onChange={handleFavoriteChange} />
        </FormField>
      </ContentContainer>
      <ContentFooter>
        <CancelButton onClick={closeModalDialog}>Cancel</CancelButton>
        {title ? (
          <AddButton onClick={handleEditProject}>Save</AddButton>
        ) : (
          <AddButton
            onClick={handleEditProject}
            type="button"
            style={{ opacity: spaces[87] }}
            disabled
          >
            Add
          </AddButton>
        )}
      </ContentFooter>
    </MainContentContainer>
  );
};

export default ProjectsEditModalContent;
