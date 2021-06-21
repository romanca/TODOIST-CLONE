import React from "react";
import styled from "styled-components";
import pick1 from "../pick1.jpeg";
import hat4 from "../hat4.jpeg";
import InfoProjectsButton from "./Projects/InfoProjectsButton";
import { todayId } from "../shared/constants";

const MainInfoContainer = styled.div`
  width: ${(props) => props.theme.spaces[27]};
`;
const MainInfoContentContainer = styled.div`
  position: relative;
  width: ${(props) => props.theme.spaces[59]};
  margin: auto;
  text-align: center;
  margin-top: ${(props) => props.theme.spaces[60]};
`;
const ImageContainer = styled.div`
  margin: auto;
  width: ${(props) => props.theme.spaces[19]};
  height: ${(props) => props.theme.spaces[61]};
`;
const MainInfoContentTitle = styled.div`
  margin-top: ${(props) => props.theme.spaces[32]};
  font-size: ${(props) => props.theme.spaces[37]};
  margin: ${(props) => props.theme.spaces[32]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[43]};
`;
const InfoContent = styled.div`
  color: ${(props) => props.theme.colors.text4};
  margin: ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[28]};
  font-size: ${(props) => props.theme.spaces[36]};
`;

 

const MainInfoContent = ({ item, toggle, handleToggle }) => {
  return (
    <MainInfoContainer>
      {item.id !== todayId ? (
        <MainInfoContentContainer>
          <ImageContainer>
            <img src={pick1} width="220" height="200" />
          </ImageContainer>
          <MainInfoContentTitle>Keep your tasks organized</MainInfoContentTitle>
          <InfoContent>
            Group your tasks by goal or area of your life. Drag and drop to
            rearrange tasks or create sub-tasks.
          </InfoContent>
          <InfoProjectsButton />
        </MainInfoContentContainer>
      ) : (
        <div>
          {!toggle && (
            <MainInfoContentContainer>
              <ImageContainer>
                <img src={hat4} width="220" height="250" />
              </ImageContainer>
              <MainInfoContentTitle>
                What tasks are on your mind?
              </MainInfoContentTitle>
              {/* <AddButton onClick={handleToggle}>Add a task</AddButton> */}
            </MainInfoContentContainer>
          )}
        </div>
      )}
    </MainInfoContainer>
  );
};
export default MainInfoContent;
