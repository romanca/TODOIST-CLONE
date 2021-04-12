import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const projects = [
  { title: "Todo 1 Todo 1Todo 1Todo 1Todo 1Todo 1Todo 1 ", number: 3 },
  { title: "Todo 2", number: 4 },
  { title: "Todo 3", number: 9 },
  { title: "Todo 4", number: 3 },
  { title: "Todo 5", number: 2 },
  { title: "Todo 6", number: 1 },
];

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
const ProjectsItemsContainer = styled.div`
  height: 34px;
  width: 175px;
  display: flex;
  cursor: pointer;
  padding-left: 5px;
`;
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 12px;
`;
const PlusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  width: 24px;
  height: 24px;
  :hover {
    background: #ececec;
    border-radius: 5px;
    font-weight: 100;
  }
`;
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: 5px;
  justify-content: space-between;
  width: 115px;
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
const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsItemsContainer>
        <ContentIconContainer>
          <Icon name="rightArrow" color="rgba(0,0,0,.54);" />
        </ContentIconContainer>
        <ContentTitleContainer>
          <div
            style={{
              fontSize: 14,
              color: "#333",
              fontWeight: 700,
            }}
          >
            Projects
          </div>
          <PlusButtonContainer>
            <Icon
              name="plus"
              color="rgba(0,0,0,.54);"
              style={{ fontSize: 12 }}
            />
          </PlusButtonContainer>
        </ContentTitleContainer>
      </ProjectsItemsContainer>
      {projects.map((i) => (
        <div style={{ display: "flex" }}>
          {/* <ContentIconContainer>
            <Icon name="th" color="rgba(0,0,0,.54);" />
          </ContentIconContainer> */}
          <ItemsContainer>
            <ContentIconContainer>
              <Icon name="dot" color="grey" style={{ fontSize: 12 }} />
            </ContentIconContainer>
            <ContentTitleContainer>
              <Title>{i.title}</Title>
            </ContentTitleContainer>
            <CounterContainer>{i.number}</CounterContainer>
          </ItemsContainer>
        </div>
      ))}
    </div>
  );
};
export default Projects;
