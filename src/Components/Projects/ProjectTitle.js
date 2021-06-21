import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodos } from "../../Providers/ItemProvider";
import Icon from "../../shared/Icon";
import DropDown from "../DropDowns/DropDown";

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

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TogglingButtonContainer = styled.div`
  width: 38px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2px;
  font-size: 12px;
  color: grey;
  cursor: pointer;
`;

const ContentTitleContainer = styled.div`
  display: flex;
  margin-top: -2px;
  color: #333;
  font-size: 14px;
`;

const ContentIconContainer = styled.div`
  width: 38px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
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

  const renderTodosCounter = React.useCallback(() => {
    return Object.values(todos).filter((i) => i.categoryId === item.id).length;
  }, [todos, item.id]);

  return (
    <ItemsContainer
      style={{
        backgroundColor: hover && "#ececec",
        borderRadius: 5 && open && "#ececec",
        // borderRadius: 5,
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
          renderTodosCounter()
        )}
      </TogglingButtonContainer>
    </ItemsContainer>
  );
};

export default ProjectTitle;
