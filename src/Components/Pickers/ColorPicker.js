import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import Icon from "../../shared/Icon";
import { selectedItems } from "../../shared/mockData";

const ColorPickerIconTitle = styled.span`
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[2]};
  font-size: ${(props) => props.theme.spaces[14]};
`;
const DropDownSelectColorPicker = styled.div`
  max-height: ${(props) => props.theme.spaces[38]};
  overflow-y: scroll;
  overflow-x: hidden;
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted1};
  width: ${(props) => props.theme.spaces[27]};
  border-radius: ${(props) => props.theme.spaces[1]};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.colors.muted1};
  background: ${(props) => props.theme.colors.background1};
`;

const SelectItemContainer = styled.div`
  width: ${(props) => props.theme.spaces[27]};
  font-size: ${(props) => props.theme.spaces[14]};
  padding: ${(props) => props.theme.spaces[1]};
  display: flex;
  justify-content: space-bettween;
  align-items: center;
  background-color: inherit;
  outline: none;
  :hover {
    background-color: ${(props) => props.theme.colors.muted8};
  }
`;
const ColorPickerButton = styled.button`
  width: ${(props) => props.theme.spaces[27]};
  font-size: ${(props) => props.theme.spaces[14]};
  border-radius: ${(props) => props.theme.spaces[1]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  padding: ${(props) => props.theme.spaces[1]};
  display: flex;
  background-color: inherit;
  outline: none;
`;

const FormField = styled.div`
  margin-bottom: ${(props) => props.theme.spaces[33]};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const FormTitle = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  width: ${(props) => props.theme.spaces[25]};
  font-weight: ${(props) => props.theme.spaces[34]};
  display: block;
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[29]};
  color: ${(props) => props.theme.colors.text};
`;
const SelectedItemContentContainer = styled.div`
  width: ${(props) => props.theme.spaces[41]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
//chcecked item background is background-color: #f3f3f3;;
//if is checked and hovered background is #ccc

const ColorPicker = ({ selectedOption, OptionClicked }) => {
  const { open, handleClose, handleOpenClose } = useVisibiltyState();

  return (
    <FormField>
      <FormTitle>Color</FormTitle>
      <ColorPickerButton onClick={handleOpenClose}>
        <ColorPickerIconTitle>
          <Icon name="dot" color={selectedOption.color} />
          {selectedOption.title}
        </ColorPickerIconTitle>
      </ColorPickerButton>
      {open ? (
        <DropDownSelectColorPicker>
          {Object.values(selectedItems).map((i) => (
            <SelectItemContainer key={i.id}>
              <SelectedItemContentContainer onClick={handleClose}>
                <div>
                  <Icon name="dot" color={i.color} />
                  <ColorPickerIconTitle onClick={OptionClicked(i)}>
                    {i.title}
                  </ColorPickerIconTitle>
                </div>
                <div>
                  <Icon name="check" color="#202020" />
                </div>
              </SelectedItemContentContainer>
            </SelectItemContainer>
          ))}
        </DropDownSelectColorPicker>
      ) : (
        ""
      )}
    </FormField>
  );
};
export default ColorPicker;
