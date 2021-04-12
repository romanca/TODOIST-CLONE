import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const ItemsContainer = styled.div`
  height: 34px;
  width: 175px;
  display: flex;
  cursor: pointer;
  padding-left: 5px;
  :hover {
    background: #ececec;
    border-radius: 5px;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 12px;
`;

const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: 5px;
  justify-content: space-between;
  width: 125px;
  height: 24px;
  font-size: 14px;
  color: #333;
`;
const ContentIconContainer = styled.div`
  width: 28px;
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
