import React from "react";
import styled from "styled-components";
import Icon from "../../shared/Icon";

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
const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[16]};
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

const ProjectItem = ({ item }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggleButtons = () => {
    setToggle((current) => !current);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <ContentIconContainer>
  <Icon name="th" color="rgba(0,0,0,.54);" />
</ContentIconContainer> */}
      <ItemsContainer
        onMouseEnter={handleToggleButtons}
        onMouseLeave={handleToggleButtons}
      >
        <ContentIconContainer>
          <Icon name="dot" color="grey" style={{ fontSize: 12 }} />
        </ContentIconContainer>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
        {!toggle ? (
          <CounterContainer>{item.number}</CounterContainer>
        ) : (
          <CounterContainer>
            <Icon name="horizontalDots" color="grey" style={{ fontSize: 12 }} />
          </CounterContainer>
        )}
      </ItemsContainer>
    </div>
  );
};
export default ProjectItem;
