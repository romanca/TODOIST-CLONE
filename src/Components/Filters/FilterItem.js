import React from "react";
import styled, { useTheme } from "styled-components";
import Icon from "../../shared/Icon";

const ItemsContainer = styled.div`
  font-weight: ${(props) => props.theme.spaces[26]};
  border-radius: ${(props) => props.theme.spaces[1]};
  width: ${(props) => props.theme.spaces[27]};
  height: ${(props) => props.theme.spaces[10]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const ContentTitleContainer = styled.div`
  margin-top: ${(props) => props.theme.spaces[56]};
  color: ${(props) => props.theme.colors.muted5};
  font-size: ${(props) => props.theme.spaces[14]};
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
  width: ${(props) => props.theme.spaces[85]};
  height: ${(props) => props.theme.spaces[31]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

const FilterItem = ({ item }) => {
  const { colors } = useTheme();

  return (
    <ItemsContainer>
      <Container>
        <ContentIconContainer>
          <Icon name="drop" color={colors["primary1"]} />
        </ContentIconContainer>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </Container>
    </ItemsContainer>
  );
};

export default FilterItem;
