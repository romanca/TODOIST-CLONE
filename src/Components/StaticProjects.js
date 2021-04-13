import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  font-size: ${(props) => props.theme.spaces[15]};
`;

const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[22]};
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;
const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaticProjects = () => {
  return (
    <div>
      <ItemsContainer>
        <ContentIconContainer>
          <Icon name="inbox" color="#246fe0" />
        </ContentIconContainer>
        <ContentTitleContainer>
          <span>Inbox</span>
          <CounterContainer>6</CounterContainer>
        </ContentTitleContainer>
      </ItemsContainer>
      <ItemsContainer>
        <ContentIconContainer>
          <Icon name="today" color="#058527" />
        </ContentIconContainer>
        <ContentTitleContainer>
          <span>Today</span>
          <CounterContainer>3</CounterContainer>
        </ContentTitleContainer>
      </ItemsContainer>
      <ItemsContainer>
        <ContentIconContainer>
          <Icon name="calendar" color="#692fc2" />
        </ContentIconContainer>
        <ContentTitleContainer>
          <span>Upcoming</span>
          <CounterContainer>9</CounterContainer>
        </ContentTitleContainer>
      </ItemsContainer>
    </div>
  );
};
export default StaticProjects;
