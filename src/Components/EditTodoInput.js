import React from "react";
import ProjectsPicker from "./Pickers/ProjectsPicker";
import styled from "styled-components";
import DatePicker from "./Pickers/DatePicker";
import { useTodoActions } from "../Providers/ItemProvider";
import { useDefaultTodos } from "../hooks/selectors";
import { useParams } from "@reach/router";
import { inboxId, todayId } from "../shared/constants";
import PriorityProjectPicker from "./Pickers/PriorityPicker";

const FormInput = styled.input`
  color: ${(props) => props.theme.colors.text5};
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
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.spaces[30]};
`;

const SubmitFormPickersContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${(props) => props.theme.spaces[30]};
  max-width: ${(props) => props.theme.spaces[27]};
`;

const EditTodoInput = ({ handleToggle, item }) => {
  const [date, setDate] = React.useState("");
  const { editTodo } = useTodoActions();
  const [title, setTitle] = React.useState(item.title);
  const projects = useDefaultTodos();
  const { id } = useParams();
  const project = id === todayId ? inboxId : item.categoryId;
  const defaultProject = Object.values(projects).find((i) => i.id === project);
  const [selectedPriority, setSelectedPriority] = React.useState(item.priority);
  const [selectedOption, setSelectedOption] = React.useState(defaultProject);
  const projectId = selectedOption.id || defaultProject.id;

  const selectedItemPriority = selectedPriority;

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  };

  const selectPriority = (value) => () => {
    setSelectedPriority(value);
  };

  const handleEditTodo = React.useCallback(() => {
    const categoryId = projectId;
    const priority = selectedItemPriority;
    if (categoryId) {
      editTodo({ ...item, title, date, categoryId, priority });
      handleToggle();
    }
  }, [
    title,
    date,
    projectId,
    selectedItemPriority,
    handleToggle,
    item,
    editTodo,
  ]);

  const handleChange = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  return (
    <MainToggleSubmitFormContainer>
      <div>
        <SubmitFormInputContainer>
          <FormInput
            placeholder="e.g., Renew gym every May 1st #Health"
            type="text"
            value={title}
            onChange={handleChange}
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
            <AddTaskButton type="button" onClick={handleEditTodo}>
              Add task
            </AddTaskButton>
          ) : (
            <AddTaskButton type="button" style={{ opacity: 0.5 }} disabled>
              Add task
            </AddTaskButton>
          )}
          <CancelButton onClick={handleToggle}>Cancel</CancelButton>
        </FormSubmitButtonsContainer>
      </div>
    </MainToggleSubmitFormContainer>
  );
};

export default EditTodoInput;
