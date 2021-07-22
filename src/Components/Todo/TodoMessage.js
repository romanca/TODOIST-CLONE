import React from "react";
import { useTodoActions } from "../../Providers/ItemProvider";
import { useModal } from "../../Providers/ModalProvider";
import styled from "styled-components";
import Icon from "../../shared/Icon";

const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.accent1};
  color: ${(props) => props.theme.colors.background1};
  margin-left: ${(props) => props.theme.spaces[30]};
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]};
  border-radius: ${(props) => props.theme.spaces[0]};
  text-align: center;
  cursor: pointer;
`;

const CancelButton = styled.button`
  margin-left: ${(props) => props.theme.spaces[30]};
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]};
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[15]} ${(props) => props.theme.spaces[29]};
  position: relative;
  display: inline-block;
  text-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.colors.background1};
  background: ${(props) => props.theme.colors.muted8};
  white-space: nowrap;
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  border-radius: ${(props) => props.theme.spaces[0]};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${(props) => props.theme.spaces[15]}
    ${(props) => props.theme.spaces[12]};
  background-color: inherit;
  border-top: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  border-bottom-left-radius: ${(props) => props.theme.spaces[30]};
  border-bottom-right-radius: ${(props) => props.theme.spaces[30]};
`;

const TextContainer = styled.div`
  text-align: left;
  padding-bottom: ${(props) => props.theme.spaces[69]};
  word-wrap: break-word;
  font-size: ${(props) => props.theme.spaces[36]};
  color: ${(props) => props.theme.colors.text};
`;

const SelectedTitleContainer = styled.span`
  font-weight: ${(props) => props.theme.spaces[34]};
`;

const ProjectMessageIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.spaces[32]};
  width: ${(props) => props.theme.spaces[32]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.text7};
  border-radius: ${(props) => props.theme.spaces[25]};
`;

const MessageIconContainer = styled.div`
  height: ${(props) => props.theme.spaces[5]};
  width: ${(props) => props.theme.spaces[5]};
`;

const IconContainer = styled.div`
  padding-bottom: ${(props) => props.theme.spaces[69]};
  text-align: left;
  color: ${(props) => props.theme.colors.text7};
`;

const ContentContainer = styled.div`
  padding: ${(props) => props.theme.spaces[33]}
    ${(props) => props.theme.spaces[12]};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.spaces[23]};
`;

const MainContainer = styled.div``;

const ContentText = styled.span`
  margin-right: ${(props) => props.theme.spaces[1]};
`;

const TodoMessage = () => {
  const { closeModalDialog } = useModal();
  const { selectedTodo, removeTodo } = useTodoActions();

  const handleDelete = (id) => {
    removeTodo(id);
    closeModalDialog();
  };

  return (
    <MainContainer>
      <ContentContainer>
        <IconContainer>
          <MessageIconContainer>
            <ProjectMessageIconContainer>
              <Icon name="info" />
            </ProjectMessageIconContainer>
          </MessageIconContainer>
        </IconContainer>
        <TextContainer>
          <ContentText> Are you sure you want to delete a</ContentText>
          <SelectedTitleContainer>
            {selectedTodo && selectedTodo.title}
          </SelectedTitleContainer>
          ?
        </TextContainer>
      </ContentContainer>
      <ButtonContainer>
        <CancelButton onClick={closeModalDialog}>Cancel</CancelButton>
        <DeleteButton onClick={() => handleDelete(selectedTodo.id)}>
          Delete
        </DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
};
export default TodoMessage;
