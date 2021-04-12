import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const filters = [
  { title: "Assigned to me", number: 3 },
  { title: "Assigned to others", number: 4 },
  { title: "Priority 1", number: 9 },
  { title: "Priority 2", number: 3 },
  { title: "Priority 3", number: 2 },
  { title: "Priority 4", number: 1 },
  { title: "View all", number: 1 },
  { title: "No due date", number: 1 },
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
const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentIconContainer = styled.div`
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filters = () => {
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
      {filters.map((i) => (
        <ItemsContainer>
          <ContentIconContainer>
            <Icon name="drop" color="#158FAD" style={{ fontSize: 17 }} />
          </ContentIconContainer>
          <ContentTitleContainer>
            <Title>{i.title}</Title>
          </ContentTitleContainer>
          <CounterContainer>{i.number}</CounterContainer>
        </ItemsContainer>
      ))}
    </div>
  );
};
export default Filters;
