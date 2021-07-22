import React from "react";
import styled, { useTheme } from "styled-components";
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
  margin-top: ${(props) => props.theme.spaces[75]};
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[0]};
  }
`;

const PriorityPickerPopUp = styled.div`
  min-height: inherit;
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  background: white;
  width: ${(props) => props.theme.spaces[71]};
  position: fixed;
  margin-top: ${(props) => props.theme.spaces[91]};
`;

const PriorityPickerItem = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]};
  display: flex;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.muted8};
  }
`;

const ItemTitle = styled.div`
  flex-grow: 1;
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[9]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${(props) => props.theme.spaces[12]};
  line-height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[36]};
`;

const PriorityIconContainer = styled.div`
  height: ${(props) => props.theme.spaces[12]};
  width: ${(props) => props.theme.spaces[12]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[33]};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriorityProjectPicker = ({ selectedPriority, selectPriority }) => {
  const { open, handleOpenClose, ref } = useVisibiltyState();
  const { spaces, colors } = useTheme();

  return (
    <PriorityPickerContainer onClick={handleOpenClose} ref={ref}>
      <PriorityPickerButton>
        <Icon
          name={selectedPriority.id !== "priority4" ? "fullFlag" : "flag"}
          color={selectedPriority.color}
        />
      </PriorityPickerButton>
      <ContentContainer ref={ref}>
        {open && (
          <PriorityPickerPopUp>
            {Object.values(priorities).map((i) => (
              <PriorityPickerItem
                key={i.id}
                onClick={() => selectPriority(i)}
                style={{
                  background: i.id === selectedPriority.id && colors["muted8"],
                }}
              >
                <PriorityIconContainer>
                  <Icon
                    name={i.id === "priority4" ? "flag" : "fullFlag"}
                    color={i.color}
                  />
                </PriorityIconContainer>
                <ItemTitle>{i.title}</ItemTitle>
                {i.id === selectedPriority.id && (
                  <Icon
                    name="check"
                    style={{ fontSize: spaces[15], color: colors["muted12"] }}
                  />
                )}
              </PriorityPickerItem>
            ))}
          </PriorityPickerPopUp>
        )}
      </ContentContainer>
    </PriorityPickerContainer>
  );
};

export default PriorityProjectPicker;
