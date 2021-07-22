import { Link } from "@reach/router";
import React from "react";
import styled, { useTheme } from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodos } from "../../Providers/ItemProvider";
import Icon from "../../shared/Icon";
import DropDown from "../DropDowns/DropDown";

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

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TogglingButtonContainer = styled.div`
  width: ${(props) => props.theme.spaces[85]};
  height: ${(props) => props.theme.spaces[10]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces[56]};
  font-size: ${(props) => props.theme.spaces[15]};
  color: grey;
  cursor: pointer;
`;

const ContentTitleContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spaces[56]};
  color: ${(props) => props.theme.colors.muted5};
  font-size: ${(props) => props.theme.spaces[14]};
`;

const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[85]};
  height: ${(props) => props.theme.spaces[31]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[30]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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
  const { colors, spaces } = useTheme();

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos)
      .filter((i) => i.categoryId === item.id)
      .filter((i) => !i.visible).length;
  }, [todos, item.id]);

  return (
    <ItemsContainer
      style={{
        backgroundColor: hover && colors["muted3"],
        borderRadius: spaces[1] && open && colors["muted3"],
      }}
      onMouseEnter={handleToggleOpen}
      onMouseLeave={open ? handleToggleOpen : handleToggleClose}
      ref={ref}
    >
      <StyledLink to={to}>
        <ContentIconContainer>
          <Icon name="dot" color={item.color.color} />
        </ContentIconContainer>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </StyledLink>
      <TogglingButtonContainer>
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
          renderTodosCounter() !== 0 && renderTodosCounter()
        )}
      </TogglingButtonContainer>
    </ItemsContainer>
  );
};

export default ProjectTitle;
