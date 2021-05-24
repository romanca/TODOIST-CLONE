import React from "react";
import Icon from "../../shared/Icon";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";

const MainContainer = styled.div``;
const MainBoxContainer = styled.div`
  display: block;
`;
const BoxContainer = styled.div`
  width: ${(props) => props.theme.spaces[45]};
  height: ${(props) => props.theme.spaces[46]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  position: absolute;
  inset: auto auto ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]};
  transform: translate(-25px, -50px);
  zindex: ${(props) => props.theme.spaces[47]};
  background-color: ${(props) => props.theme.colors.background1};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 /10%);
  padding: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[48]};
  line-height: ${(props) => props.theme.spaces[49]};
  font-size: ${(props) => props.theme.spaces[50]};
  border-radius: ${(props) => props.theme.spaces[0]};
`;
const BoxContentContainer = styled.div`
  font-weight: ${(props) => props.theme.spaces[26]};
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  padding: 7px ${(props) => props.theme.spaces[39]};
  width: ${(props) => props.theme.spaces[27]};
  height: ${(props) => props.theme.spaces[27]};
`;
const BoxContentTitle = styled.div`
  margin-bottom: ${(props) => props.theme.spaces[15]};
  display: flex;
  align-items: center;
`;
const BoxIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[9]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[36]};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.spaces[34]};
`;
const MainContentItemContainer = styled.div`
  display: block;
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
  text-align: left;
  display: flex;
`;
const ContentItemIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spaces[9]};
  color: ${(props) => props.theme.colors.muted7};
`;
const ContentItemTitleContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.spaces[36]};
  color: ${(props) => props.theme.colors.text};
`;
const InfoProjectsButtonContainer = styled.div`
  margin: ${(props) => props.theme.spaces[33]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]};
  border-radius: ${(props) => props.theme.spaces[0]};
  border: 1px solid ${(props) => props.theme.colors.muted9};
  display: inline-block;
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[43]};
  cursor: pointer;
`;
const InfoProjectsButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.spaces[12]};
`;
const InfoProjectsButtonIconContainer = styled.div`
  margin-right: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoProjectsButtonTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[36]};
  color: ${(props) => props.theme.colors.text};
`;

const InfoProjectsButton = () => {
  const { open, handleOpenClose } = useVisibiltyState();

  return (
    <MainContainer>
      {open ? (
        <MainBoxContainer>
          <BoxContainer>
            <BoxContentContainer>
              <BoxContentTitle>
                <BoxIconContainer>
                  <Icon name="bulb" color="rgb(255, 146, 51)" />
                </BoxIconContainer>
                <BoxTitleContainer>How can I use Projects?</BoxTitleContainer>
              </BoxContentTitle>
              <MainContentItemContainer>
                <ContentItemIconContainer>
                  <Icon name="check" />
                </ContentItemIconContainer>
                <ContentItemTitleContainer>
                  Separate work tasks from personal ones.
                </ContentItemTitleContainer>
              </MainContentItemContainer>
              <MainContentItemContainer>
                <ContentItemIconContainer>
                  <Icon name="check" />
                </ContentItemIconContainer>
                <ContentItemTitleContainer>
                  Create a step-by-step plan toward a goal.
                </ContentItemTitleContainer>
              </MainContentItemContainer>
              <MainContentItemContainer>
                <ContentItemIconContainer>
                  <Icon name="check" />
                </ContentItemIconContainer>
                <ContentItemTitleContainer>
                  Collaborate with teammates.
                </ContentItemTitleContainer>
              </MainContentItemContainer>
              <MainContentItemContainer>
                <ContentItemIconContainer>
                  <Icon name="check" />
                </ContentItemIconContainer>
                <ContentItemTitleContainer>
                  Share a to-do list with a loved one.
                </ContentItemTitleContainer>
              </MainContentItemContainer>
              <MainContentItemContainer>
                <ContentItemIconContainer>
                  <Icon name="check" />
                </ContentItemIconContainer>
                <ContentItemTitleContainer>
                  Save things to watch or read later.
                </ContentItemTitleContainer>
              </MainContentItemContainer>
            </BoxContentContainer>
          </BoxContainer>
        </MainBoxContainer>
      ) : (
        ""
      )}
      <InfoProjectsButtonContainer
        onMouseEnter={handleOpenClose}
        onMouseLeave={handleOpenClose}
      >
        <InfoProjectsButtonContentContainer>
          <InfoProjectsButtonIconContainer>
            <Icon name="bulb" color="rgb(255, 146, 51)" />
          </InfoProjectsButtonIconContainer>
          <InfoProjectsButtonTitleContainer>
            How can I use Projects?
          </InfoProjectsButtonTitleContainer>
        </InfoProjectsButtonContentContainer>
      </InfoProjectsButtonContainer>
    </MainContainer>
  );
};
export default InfoProjectsButton;
