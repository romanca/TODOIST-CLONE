import React from "react";
import styled from "styled-components";
import Icon from "../../shared/Icon";

const ItemsContainer = styled.div`
  font-weight: 400;
  border-radius: 5px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: 5px;
  }
`;

const ContentTitleContainer = styled.div`
  margin-top: -2px;
  color: #333;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentIconContainer = styled.div`
  width: 38px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterItem = ({ item }) => {
  return (
    <ItemsContainer>
      <div style={{ display: "flex" }}>
        <ContentIconContainer>
          <Icon name="drop" color="#158FAD" />
        </ContentIconContainer>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </div>
    </ItemsContainer>
  );
};

export default FilterItem;
