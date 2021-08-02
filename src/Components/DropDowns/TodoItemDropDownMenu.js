import React from "react";
import styled, { useTheme } from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodoActions } from "../../Providers/ItemProvider";
import { useTodoMessageDialog } from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";
import { priorities } from "../../shared/mockData";

const MainTodoItemDropDownContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.background1};
  border-radius: ${(props) => props.theme.spaces[0]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  margin: ${(props) => props.theme.spaces[28]};
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  width: ${(props) => props.theme.spaces[52]};
  margin-left: ${(props) => props.theme.spaces[81]};
  z-index: ${(props) => props.theme.spaces[1000]};
`;

const MenuItem = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
  display: flex;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const IconMenuContainer = styled.div`
  color: grey;
  height: ${(props) => props.theme.spaces[12]};
  width: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[30]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[36]};
`;

const MenuSeparator = styled.div`
  margin: ${(props) => props.theme.spaces[9]};
  border-bottom: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
`;

const PriorityTitle = styled.div`
  font-size: ${(props) => props.theme.spaces[68]};
  margin-bottom: ${(props) => props.theme.spaces[82]};
  display: flex;
  justify-content: flex-start;
`;

const PriorityItemIconContainer = styled.div`
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[4]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  border-radius: ${(props) => props.theme.spaces[0]};
  cursor: pointer;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  padding: ${(props) => props.theme.spaces[8]};
  font-size: ${(props) => props.theme.spaces[33]};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

const PriorityItemContainer = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
`;

const IconItemsContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spaces[28]};
  margin-left: ${(props) => props.theme.spaces[83]};
`;

const Container = styled.div`
  z-index: ${(props) => props.theme.spaces[47]};
`;

const IconButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  border-radius: ${(props) => props.theme.spaces[0]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    width: ${(props) => props.theme.spaces[12]};
    height: ${(props) => props.theme.spaces[12]};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

const TodoItemDropDown = ({
  item,
  handleToggle,
  open,
  handleOpenClose,
  divRef,
}) => {
  const openTodoModal = useTodoMessageDialog();
  const { handleSelectedTodo, editTodo } = useTodoActions();
  const [selectedPriority, setSelectedPriority] = React.useState(item.priority);
  const { colors, spaces } = useTheme();

  const selectPriority = (i) => {
    editTodo({ ...item, priority: i });
    setSelectedPriority(i);
    handleOpenClose();
  };

  const handleSelectTodo = (item) => {
    handleSelectedTodo(item);
    handleOpenClose();
  };

  return (
    <Container>
      <IconButtonContainer
        onClick={() => handleSelectTodo(item)}
        style={{
          background: open && colors["muted3"],
        }}
      >
        <Icon name="horizontalDots" />
      </IconButtonContainer>
      {open && (
        <MainTodoItemDropDownContainer ref={divRef}>
          <MenuItem onClick={handleToggle}>
            <IconMenuContainer>
              <Icon name="edit" />
            </IconMenuContainer>
            <Title>Edit task</Title>
          </MenuItem>
          <Container onClick={handleOpenClose}>
            <MenuItem onClick={openTodoModal}>
              <IconMenuContainer>
                <Icon name="trash" />
              </IconMenuContainer>
              <Title>Remove task</Title>
            </MenuItem>
          </Container>
          <MenuSeparator />
          <PriorityItemContainer>
            <PriorityTitle>Priority</PriorityTitle>
            <IconItemsContainer>
              {Object.values(priorities).map((i) => (
                <PriorityItemIconContainer
                  style={{
                    border: i.id === selectedPriority.id && `1px solid #aaa`,
                    borderRadius: i.id === selectedPriority.id && spaces[0],
                  }}
                  key={i.id}
                  onClick={() => {
                    selectPriority(i);
                  }}
                >
                  <Icon
                    name={i.id === "priority4" ? "flag" : "fullFlag"}
                    color={i.color}
                  />
                </PriorityItemIconContainer>
              ))}
            </IconItemsContainer>
          </PriorityItemContainer>
        </MainTodoItemDropDownContainer>
      )}
    </Container>
  );
};

export default TodoItemDropDown;
