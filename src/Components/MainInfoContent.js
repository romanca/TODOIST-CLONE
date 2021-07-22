import React from "react";
import styled, { useTheme } from "styled-components";
import pick1 from "../images/pick1.jpeg";
import hat4 from "../images/hat4.jpeg";
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

const Container = styled.div``

const MainInfoContent = ({ item, toggle, handleToggle }) => {
  const { spaces } = useTheme();
  return (
    <MainInfoContainer>
      {item && item.id !== todayId ? (
        <MainInfoContentContainer>
          <ImageContainer>
            <img src={pick1} width={spaces[19]} height={spaces[61]} />
          </ImageContainer>
          <MainInfoContentTitle>Keep your tasks organized</MainInfoContentTitle>
          <InfoContent>
            Group your tasks by goal or area of your life. Drag and drop to
            rearrange tasks or create sub-tasks.
          </InfoContent>
          <InfoProjectsButton />
        </MainInfoContentContainer>
      ) : (
        <Container>
          {!toggle && (
            <MainInfoContentContainer>
              <ImageContainer>
                <img src={hat4} width={spaces[19]} height={spaces[52]} />
              </ImageContainer>
              <MainInfoContentTitle>
                What tasks are on your mind?
              </MainInfoContentTitle>
              {/* <AddButton onClick={handleToggle}>Add a task</AddButton> */}
            </MainInfoContentContainer>
          )}
        </Container>
      )}
    </MainInfoContainer>
  );
};
export default MainInfoContent;
