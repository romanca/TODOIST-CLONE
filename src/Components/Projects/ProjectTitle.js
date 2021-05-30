import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodos } from "../../Providers/ItemProvider";
import DropDown from "../DropDowns/DropDown";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const ProjectTitle = ({ item, to }) => {
  const { todos } = useTodos();
  const {
    toggle,
    hover,
    handleHoverClose,
    handleToggleOpen,
    handleToggleClose,
    handleOpenClose,
    handleHover,
    ref,
    open,
    handleClose,
  } = useVisibiltyState();

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos).filter((i) => i.categoryId === item.id).length;
  }, [todos]);

  return (
    <ItemsContainer
      onMouseEnter={handleToggleOpen}
      onMouseLeave={open ? handleToggleOpen : handleToggleClose}
      style={{
        backgroundColor: hover ? "#ececec" : "",
        borderRadius: 3 && open ? "#ececec" : "",
        borderRadius: 3,
      }}
      ref={ref}
    >
      <Link to={to} style={{ textDecoration: "none", width: 15 }}>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </Link>
      {toggle ? (
        <DropDown
          item={item}
          handleHoverClose={handleHoverClose}
          handleHover={handleHover}
          open={open}
          handleOpenClose={handleOpenClose}
          handleClose={handleClose}
        />
      ) : (
        <ContentIconContainer>
          <CounterContainer>{renderTodosCounter()}</CounterContainer>
        </ContentIconContainer>
      )}
    </ItemsContainer>
  );
};

export default ProjectTitle;
