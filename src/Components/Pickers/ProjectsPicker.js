import React from "react";
import Icon from "../../shared/Icon";
import styled from "styled-components";
import { defaultProject, projects } from "../../shared/mockData";

const ProjectsPickerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #555;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;
const ProjectPickerIconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainProjectPickersBoxContainer = styled.div`
  background-color: #fff;
  width: 275px;
  height: 275px;
  padding: 0px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  position: absolute;
  inset: 5px auto auto 140px;
  transform: translate(295px, 245px);
  z-index: 1000;
`;
const ProjectsPickerBoxPopperContainer = styled.div`
  position: absolute;
  left: 0px;
  transform: translate(133px, 0px);
  z-index: 1000;
  margin-top: -12px;
  height: 0px;
  width: 0px;
  border: 6px solid transparent;
  border-bottom-color: #ddd;
`;
const ProjectsPickerBoxPopper = styled.div`
  content: "";
  position: absolute;
  border: 6px solid transparent;
  border-bottom-color: #fff;
  left: -6px;
  top: -5px;
`;
const ProjectsPickerInputContainer = styled.div`
  display: flex;
  padding: 4px 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;
const Input = styled.input`
  border: 0px;
  height: 24px;
  outline: none;
  background-color: #ffffff;
  padding: 1px 2px;
  display: inline-block;
  text-align: start;
`;
const ProjectsPickerBoxContentContainer = styled.div`
  padding: 0px;
  margin: 0px;
  max-height: 300px;
`;
const ProjectsPickerBoxContentItemContainer = styled.div`
  padding: 4px 0px;
  margin: 0px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProjectsPickerBoxContentItemTitle = styled.span`
  margin: 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  height: 24px;
  line-height: 1.5;
  width: 215px;
  color: #555;
`;

const ProjectsPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState([]);

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    console.log(selectedOption);
  };

  return (
    <div>
      <ProjectsPickerButton onClick={handleOpenClose}>
        <ProjectPickerIconContainer>
          <Icon
            name="dot"
            style={{ fontSize: 8 }}
            color="rgb(128, 128, 128);"
          />
        </ProjectPickerIconContainer>
        {/* <div style={{ backgroundColor: "lightblue" }}>{selectedOption}</div> */}
        {selectedOption.title || "Mangoes"}
      </ProjectsPickerButton>
      {open ? (
        <MainProjectPickersBoxContainer>
          <ProjectsPickerBoxPopperContainer>
            <ProjectsPickerBoxPopper></ProjectsPickerBoxPopper>
          </ProjectsPickerBoxPopperContainer>
          <ProjectsPickerInputContainer>
            <Input type="text" placeholder="Type a project" />
          </ProjectsPickerInputContainer>
          <ProjectsPickerBoxContentContainer>
            <ProjectsPickerBoxContentItemContainer>
              <ProjectPickerIconContainer>
                <Icon name="inbox" color="#246fe0" />
              </ProjectPickerIconContainer>
              <ProjectsPickerBoxContentItemTitle>
                Inbox
              </ProjectsPickerBoxContentItemTitle>
            </ProjectsPickerBoxContentItemContainer>
            {Object.values(projects).map((item) => (
              <ProjectsPickerBoxContentItemContainer
                onClick={onOptionClicked(item)}
              >
                <ProjectPickerIconContainer>
                  <Icon name="dot" color="grey" style={{ fontSize: 10 }} />
                </ProjectPickerIconContainer>
                <ProjectsPickerBoxContentItemTitle>
                  {item.title}
                </ProjectsPickerBoxContentItemTitle>
              </ProjectsPickerBoxContentItemContainer>
            ))}
          </ProjectsPickerBoxContentContainer>
        </MainProjectPickersBoxContainer>
      ) : (
        ""
      )}
    </div>
  );
};
export default ProjectsPicker;
