import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import Icon from "../../shared/Icon";
import { priorities } from "../../shared/mockData";

const PriorityPickerButton = styled.div`
  border-radius: ${(props) => props.theme.spaces[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.spaces[33]};
`;

const PriorityPickerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  margin-top: -5px;
  cursor: pointer;
`;

const PriorityPickerPopUp = styled.div`
  min-height: inherit;
  padding: 0;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  background: white;
  width: 275px;
`;

const PriorityPickerItem = styled.div`
  padding: 4px 10px;
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.div`
  flex-grow: 1;
  margin: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
`;

const PriorityIconContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const PriorityProjectPicker = ({ selectedPriority, selectPriority }) => {
  const { open, handleOpenClose, ref } = useVisibiltyState();

  return (
    <PriorityPickerContainer onClick={handleOpenClose} ref={ref}>
      <PriorityPickerButton>
        <Icon
          name={selectedPriority.id !== "priority4" ? "fullFlag" : "flag"}
          color={selectedPriority.color}
        />
      </PriorityPickerButton>
      <div style={{ position: "absolute", marginTop: 23 }} ref={ref}>
        {open && (
          <PriorityPickerPopUp>
            {Object.values(priorities).map((i) => (
              <PriorityPickerItem
                key={i.id}
                onClick={selectPriority(i)}
                style={{ background: i.id === selectedPriority.id && "grey" }}
              >
                <PriorityIconContainer>
                  <Icon
                    name={i.id === "priority4" ? "flag" : "fullFlag"}
                    color={i.color}
                  />
                </PriorityIconContainer>
                <ItemTitle>{i.title}</ItemTitle>
              </PriorityPickerItem>
            ))}
          </PriorityPickerPopUp>
        )}
      </div>
    </PriorityPickerContainer>
  );
};

export default PriorityProjectPicker;
