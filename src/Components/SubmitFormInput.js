import React from "react";
import Icon from "../shared/Icon";
import ProjectsPicker from "./Pickers/ProjectsPicker";
import styled from "styled-components";
import DatePicker from "./Pickers/DatePicker";

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

const SubmitFormInput = () => {
  const [toggle, setToggle] = React.useState(false);
  const [date, setDate] = React.useState();

  const handleToggleSubmitForm = () => {
    setToggle((current) => !current);
  };

  return (
    <MainToggleSubmitFormContainer>
      {!toggle ? (
        <AddButton onClick={handleToggleSubmitForm}>
          <AddButtonTitle>+</AddButtonTitle>
          Add task
        </AddButton>
      ) : (
        <div>
          <SubmitFormInputContainer>
            <FormInput placeholder="e.g., Renew gym every May 1st #Health" />
            <SubmitFormContentButtonsContainer>
              <SubmitFormPickersContainer>
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  placeholder={"Schedule"}
                />
                <ProjectsPicker />
              </SubmitFormPickersContainer>
              <FormFlagButtonContainer>
                <FormFlagButton>
                  <Icon name="flag" />
                </FormFlagButton>
              </FormFlagButtonContainer>
            </SubmitFormContentButtonsContainer>
          </SubmitFormInputContainer>
          <FormSubmitButtonsContainer>
            <AddTaskButton>Add task</AddTaskButton>
            <CancelButton onClick={handleToggleSubmitForm}>Cancel</CancelButton>
          </FormSubmitButtonsContainer>
        </div>
      )}
    </MainToggleSubmitFormContainer>
  );
};

export default SubmitFormInput;
