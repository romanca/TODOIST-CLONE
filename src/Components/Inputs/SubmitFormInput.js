import React from "react";
import styled from "styled-components";
import { useParams } from "@reach/router";
import { useTodoActions } from "../../Providers/ItemProvider";
import { useDefaultTodos } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { inboxId, todayId } from "../../shared/constants";
import { priorities } from "../../shared/mockData";
import ProjectsPicker from "../Pickers/ProjectsPicker";
import PriorityProjectPicker from "../Pickers/PriorityPicker";
import DatePicker from "../Pickers/DatePicker";

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
  color: ${(props) => props.theme.colors.text};
  width: calc(100% - 8px);
  font-size: ${(props) => props.theme.spaces[14]};
  word-break: break-word;
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  outline: none;
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

const Container = styled.div``;

const SubmitFormInput = () => {
  const [date, setDate] = React.useState("");
  const { createTodo } = useTodoActions();
  const [title, setTitle] = React.useState("");
  const ref = React.useRef();
  const projects = useDefaultTodos();
  const { id } = useParams();
  const project = id === todayId ? inboxId : id;
  const defaultProject = Object.values(projects).find((i) => i.id === project);
  const [selectedOption, setSelectedOption] = React.useState({});
  const defaultPriority = priorities["priority4"];
  const [selectedPriority, setSelectedPriority] =
    React.useState(defaultPriority);
  const { toggle, handleToggle } = useVisibiltyState();
  const projectId =
    (selectedOption && selectedOption.id) ||
    (defaultProject && defaultProject.id);

  React.useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        ref.current && ref.current.focus();
      }, 1);
    }
  }, [ref, toggle]);

  const onOptionClicked = (i) => {
    setSelectedOption(i);
  };

  const handleCancel = () => {
    setDate("");
    handleToggle();
    setTitle("");
    setSelectedOption(projectId);
    setSelectedPriority(defaultPriority);
  };

  const handleToggleItem = () => {
    handleToggle();
    setSelectedOption(projectId);
  };

  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const selectPriority = (i) => {
    setSelectedPriority(i);
  };

  const handleSubmit = React.useCallback(() => {
    const categoryId = projectId;
    const priority = selectedPriority;
    const completed = false;
    const visible = false;
    if (categoryId) {
      createTodo(title, categoryId, date, priority, completed, visible);
      setTitle("");
      setDate("");
      setSelectedOption(categoryId);
      setSelectedPriority(defaultPriority);
    }
  }, [title, projectId, date, selectedPriority, createTodo, defaultPriority]);

  return (
    <MainToggleSubmitFormContainer>
      {!toggle ? (
        <AddButton onClick={handleToggleItem}>
          <AddButtonTitle>+</AddButtonTitle>
          Add task
        </AddButton>
      ) : (
        <Container>
          <SubmitFormInputContainer>
            <FormInput
              placeholder="Task name"
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
              <PriorityProjectPicker
                selectPriority={selectPriority}
                selectedPriority={selectedPriority}
              />
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
        </Container>
      )}
    </MainToggleSubmitFormContainer>
  );
};

export default SubmitFormInput;
