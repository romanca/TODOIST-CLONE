import React from "react";
import { useProjectActions } from "../../../Providers/ItemProvider";
import { useModal } from "../../../Providers/ModalProvider";
import Icon from "../../../shared/Icon";
import styled from "styled-components";
import { useParams } from "@reach/router";

const DeleteButton = styled.button`
  background-color: #dd4b39;
  color: #fff;
  margin-left: 10px;
  padding: 6px 12px 7px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 13px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
`;
const CancelButton = styled.button`
  margin-left: 10px;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 12px 7px;
  position: relative;
  display: inline-block;
  text-shadow: 0 1px 0 #fff;
  background: #f3f3f3;
  white-space: nowrap;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #202020;
  text-align: center;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 24px;
  background-color: inherit;
  border-top: 1px solid #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TextContainer = styled.div`
  text-align: left;
  padding-bottom: 25px;
  word-wrap: break-word;
  font-size: 13px;
  color: #202020;
`;

const SelectedTitleContainer = styled.span`
  font-weight: 700;
`;

const ProjectMessageIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  border: 1px solid grey;
  border-radius: 50%;
`;

const MessageIconContainer = styled.div`
  height: 28px;
  width: 28px;
`;

const IconContainer = styled.div`
  padding-bottom: 25px;
  text-align: left;
  color: grey;
`;

const ContentContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const MainContainer = styled.div``;

const ContentText = styled.span`
  margin-right: 5px;
`;

const ProjectMessage = () => {
  const { closeModalDialog } = useModal();
  const { selected, removeProject } = useProjectActions();

  const handleDelete = (id) => {
    removeProject(id);
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
            {selected && selected.title}
          </SelectedTitleContainer>
          ?
        </TextContainer>
      </ContentContainer>
      <ButtonContainer>
        <CancelButton onClick={closeModalDialog}>Cancel</CancelButton>
        <DeleteButton onClick={() => handleDelete(selected.id)}>
          Delete
        </DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
};
export default ProjectMessage;
