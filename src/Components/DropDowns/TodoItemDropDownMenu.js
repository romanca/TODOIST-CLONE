import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import { useTodoActions } from "../../Providers/ItemProvider";
import { useTodoMessageDialog } from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";
import { priorities } from "../../shared/mockData";

const MainTodoItemDropDownContainer = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  margin: 0;
  padding: 4px 0px;
  width: 250px;
  margin-left: -120px;
  z-index: 1000;
`;

const MenuItem = styled.div`
  padding: 4px 10px;
  display: flex;
`;

const IconMenuContainer = styled.div`
  color: grey;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

const MenuSeparator = styled.div`
  margin: 4px;
  border-bottom: 1px solid #ddd;
`;

const PriorityTitle = styled.div`
  font-size: 11px;
  margin-bottom: 1em;
  display: flex;
  justify-content: flex-start;
`;

const PriorityItem = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 1px;
  font-size: 20px;
`;

const PriorityItemIconContainer = styled.div`
  margin: 0px 0px 0px 26px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 1px;
  font-size: 20px;
  display: flex;
  justify-content: ;
`;

const PriorityItemContainer = styled.div`
  padding: 4px 10px;
`;

const IconItemsContainer = styled.div`
  display: flex;
  padding: 0px;
  margin-left: -8px;
`;

const TodoItemDropDown = ({ item, handleToggle }) => {
  const openTodoModal = useTodoMessageDialog();
  const { handleSelectedTodo, editTodo } = useTodoActions();
  const { ref, open, handleOpenClose } = useVisibiltyState();
  const [selectedPriority, setSelectedPriority] = React.useState(item.priority);

  const selectedItemPriority = selectedPriority;

  const selectPriority = (value) => () => {
    setSelectedPriority(value);
  };

  const handleEditSelectedTodo = React.useCallback(() => {
    const priority = selectedItemPriority;
    editTodo({ ...item, priority });
  }, [selectedItemPriority]);

  const handleSelectTodo = (item) => {
    handleSelectedTodo(item);
    handleOpenClose();
  };

  return (
    <div ref={ref}>
      <div onClick={() => handleSelectTodo(item)}>
        <Icon name="horizontalDots" />
      </div>
      {open ? (
        <MainTodoItemDropDownContainer>
          <MenuItem onClick={handleToggle}>
            <IconMenuContainer>
              <Icon name="edit" />
            </IconMenuContainer>
            <Title>Edit task</Title>
          </MenuItem>
          <div onClick={handleOpenClose}>
            <MenuItem onClick={openTodoModal}>
              <IconMenuContainer>
                <Icon name="trash" />
              </IconMenuContainer>
              <Title>Remove task</Title>
            </MenuItem>
          </div>
          <MenuSeparator />
          <PriorityItemContainer>
            <PriorityTitle>Priority</PriorityTitle>
            <IconItemsContainer>
              {Object.values(priorities).map((i) => (
                <div
                  key={i.id}
                  onClick={selectPriority(i)}
                  style={{ background: i.id === selectedPriority.id && "grey" }}
                >
                  <div
                    style={{
                      background: i.id === selectedPriority.id && "grey",
                    }}
                  >
                    <Icon
                      name={i.id === "priority4" ? "flag" : "fullFlag"}
                      color={i.color}
                    />
                  </div>
                  <button onClick={handleEditSelectedTodo}>add</button>
                </div>
              ))}
              {/* {Object.values(priorities).map((i) => (
                <div style={{ padding: 0 }} onClick={onOptionClicked(i)}>
                  <div
                    style={{ marginLeft: -15 }}
                    onClick={handleEditSelectedTodo}
                  >
                    <PriorityItemIconContainer
                    // style={{
                    //   border:
                    //     i.id === selectedPriority.id && "1px solid grey",
                    // }}
                    >
                      <Icon
                        name={i.id === "priority4" ? "flag" : "fullFlag"}
                        color={i.color}
                      />
                    </PriorityItemIconContainer>
                  </div>
                </div>
              ))} */}
            </IconItemsContainer>
          </PriorityItemContainer>
        </MainTodoItemDropDownContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItemDropDown;
