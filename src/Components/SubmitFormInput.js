import React from "react";
import Icon from "../shared/Icon";
import ProjectsPicker from "./Pickers/ProjectsPicker";
import styled from "styled-components";
import DatePicker from "./Pickers/DatePicker";
import { useTodoActions } from "../Providers/ItemProvider";
import { useParams } from "@reach/router";
import { useDefaultTodos } from "../hooks/selectors";
import { inboxId, todayId } from "../shared/constants";

const AddButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.theme.spaces[27]};
  border: transparent;
  outline: none;
  cursor: pointer;
  color: grey;
  margin-top: ${(props) => props.theme.spaces[14]};
  background: transparent;
`;
const AddButtonTitle = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.theme.spaces[25]};
  color: ${(props) => props.theme.colors.accent1};
  height: ${(props) => props.theme.spaces[67]};
  justify-content: flex-start;
  margin-right: ${(props) => props.theme.spaces[68]};
  width: ${(props) => props.theme.spaces[67]};
  font-size: ${(props) => props.theme.spaces[69]};
`;
const FormInput = styled.input`
  color: ${(props) => props.theme.colors.text5};
  width: calc(100% - 8px);
  font-size: ${(props) => props.theme.spaces[14]};
  word-break: break-word;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
`;
const FormFlagButton = styled.div`
  border-radius: ${(props) => props.theme.spaces[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  color: ${(props) => props.theme.colors.muted10};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.spaces[33]};
`;
const FormFlagButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${(props) => props.theme.spaces[30]};
`;
const FormSubmitButtonsContainer = styled.div`
  padding-top: ${(props) => props.theme.spaces[30]};
`;
const AddTaskButton = styled.button`
  background-color: ${(props) => props.theme.colors.accent1};
  color: ${(props) => props.theme.colors.background};
  margin-right: ${(props) => props.theme.spaces[1]};
  border-radius: ${(props) => props.theme.spaces[0]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]};
  padding: ${(props) => props.theme.spaces[30]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  position: relative;
  display: inline-block;
  text-align: center;
  outline: none;
  cursor: pointer;
`;
const CancelButton = styled.button`
  color: ${(props) => props.theme.colors.text3};
  cursor: pointer;
  font-size: ${(props) => props.theme.spaces[36]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const MainToggleSubmitFormContainer = styled.div`
  display: block;
  padding-bottom: ${(props) => props.theme.spaces[32]};
  margin-bottom: ${(props) => props.theme.spaces[32]};
  margin-top: ${(props) => props.theme.spaces[30]};
`;
const SubmitFormInputContainer = styled.div`
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  border-radius: ${(props) => props.theme.spaces[1]};
  padding: ${(props) => props.theme.spaces[30]}
    ${(props) => props.theme.spaces[30]} ${(props) => props.theme.spaces[28]};
  cursor: text;
`;
const SubmitFormContentButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces[30]};
`;
const SubmitFormPickersContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${(props) => props.theme.spaces[30]};
  max-width: ${(props) => props.theme.spaces[27]};
`;

const ProjectsPickerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.spaces[5]};
  padding: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[43]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted9};
  border-radius: ${(props) => props.theme.spaces[1]};
  color: ${(props) => props.theme.colors.text3};
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ProjectPickerIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainProjectPickersBoxContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  width: ${(props) => props.theme.spaces[71]};
  height: ${(props) => props.theme.spaces[71]};
  padding: ${(props) => props.theme.spaces[28]};
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  z-index: ${(props) => props.theme.spaces[47]};
  margin-top: 40px;
  position: absolute;
`;

const ProjectsPickerBoxPopperContainer = styled.div`
  position: absolute;
  left: ${(props) => props.theme.spaces[28]};
  transform: translate(133px, 0px);
  z-index: ${(props) => props.theme.spaces[47]};
  margin-top: ${(props) => props.theme.spaces[73]};
  height: ${(props) => props.theme.spaces[28]};
  width: ${(props) => props.theme.spaces[28]};
  border: ${(props) => props.theme.spaces[9]} solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.muted7};
`;

const ProjectsPickerBoxPopper = styled.div`
  position: absolute;
  border: ${(props) => props.theme.spaces[2]} solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.background1};
  left: ${(props) => props.theme.spaces[74]};
  top: ${(props) => props.theme.spaces[75]};
`;

const ProjectsPickerInputContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
  align-items: center;
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
`;

const Input = styled.input`
  border: ${(props) => props.theme.spaces[28]};
  height: ${(props) => props.theme.spaces[12]};
  outline: none;
  background-color: ${(props) => props.theme.colors.background1};
  padding: ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[39]};
  display: inline-block;
  text-align: start;
`;

const ProjectsPickerBoxContentContainer = styled.div`
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
  max-height: ${(props) => props.theme.spaces[76]};
`;

const ProjectsPickerBoxContentItemContainer = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[30]};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProjectsPickerBoxContentItemTitle = styled.span`
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[30]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  height: ${(props) => props.theme.spaces[12]};
  line-height: ${(props) => props.theme.spaces[77]};
  width: ${(props) => props.theme.spaces[78]};
  color: ${(props) => props.theme.colors.text3};
`;

const SubmitFormInput = ({ toggle, handleToggle }) => {
  const [date, setDate] = React.useState("");
  const { createTodo } = useTodoActions();
  const [title, setTitle] = React.useState("");
  const ref = React.useRef();
  const projects = useDefaultTodos();
  const { id } = useParams();
  const defaultProject = Object.values(projects).find((i) => i.id === id);
  const [selectedOption, setSelectedOption] = React.useState({});
  // const defaultProject =
  //   project.id === todayId ? projects["inbox"] : project.id;

  const projectId = selectedOption.id || defaultProject.id;

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  };

  React.useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        ref.current && ref.current.focus();
      }, 1);
    }
  }, [ref, toggle]);

  const handleSubmit = React.useCallback(() => {
    const categoryId = projectId;
    if (projectId) {
      createTodo(title, categoryId, date);
      setTitle("");
      setDate("");
      setSelectedOption(projectId);
    }
  }, [title, projectId, date]);

  const handleCancel = () => {
    setDate("");
    handleToggle();
    setTitle("");
  };

  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  return (
    <MainToggleSubmitFormContainer>
      {!toggle ? (
        <AddButton onClick={handleToggle}>
          <AddButtonTitle>+</AddButtonTitle>
          Add task
        </AddButton>
      ) : (
        <div>
          <SubmitFormInputContainer>
            <FormInput
              placeholder="e.g., Renew gym every May 1st #Health"
              type="text"
              value={title}
              onChange={handleChange}
              ref={ref}
            />
            <SubmitFormContentButtonsContainer>
              <SubmitFormPickersContainer>
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  placeholder={"Schedule"}
                />
                <ProjectsPicker
                  onOptionClicked={onOptionClicked}
                  selectedOption={selectedOption}
                  defaultProject={defaultProject}
                  projects={projects}
                />
              </SubmitFormPickersContainer>
              <FormFlagButtonContainer>
                <FormFlagButton>
                  <Icon name="flag" />
                </FormFlagButton>
              </FormFlagButtonContainer>
            </SubmitFormContentButtonsContainer>
          </SubmitFormInputContainer>
          <FormSubmitButtonsContainer>
            {title ? (
              <AddTaskButton onClick={handleSubmit} type="button">
                Add task
              </AddTaskButton>
            ) : (
              <AddTaskButton
                onClick={handleSubmit}
                type="button"
                style={{ opacity: 0.5 }}
                disabled
              >
                Add task
              </AddTaskButton>
            )}
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          </FormSubmitButtonsContainer>
        </div>
      )}
    </MainToggleSubmitFormContainer>
  );
};

export default SubmitFormInput;
