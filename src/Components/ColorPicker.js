import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const selectItems = [
  {
    id: 1,
    color: "rgb(184, 37, 95)",
    title: "Berry Red",
  },
  {
    id: 2,
    color: "rgb(219, 64, 53)",
    title: "Red",
  },
  {
    id: 3,
    color: "rgb(255, 153, 51)",
    title: "Orange",
  },
  {
    id: 4,
    color: "rgb(250, 208, 0)",
    title: "Yellow",
  },
  {
    id: 5,
    color: "rgb(219, 64, 53)",
    title: "Olive Green",
  },
  {
    id: 6,
    color: "rgb(126, 204, 73)",
    title: "Lime Green",
  },
  {
    id: 7,
    color: "rgb(41, 148, 56)",
    title: "Green",
  },
  {
    id: 8,
    color: "rgb(106, 204, 188)",
    title: "Mint Green",
  },
  {
    id: 9,
    color: "rgb(21, 143, 173)",
    title: "Teal",
  },
  {
    id: 10,
    color: "rgb(20, 170, 245)",
    title: "Sky Blue",
  },
  {
    id: 11,
    color: "rgb(150, 195, 235)",
    title: "Light Blue",
  },
  {
    id: 12,
    color: "rgb(64, 115, 255)",
    title: "Blue",
  },
  {
    id: 13,
    color: "rgb(136, 77, 255)",
    title: "Grape",
  },
  {
    id: 14,
    color: "rgb(175, 56, 235)",
    title: "Violet",
  },
  {
    id: 15,
    color: "rgb(235, 150, 235)",
    title: "Lavender",
  },
  {
    id: 16,
    color: "rgb(224, 81, 148)",
    title: "Magenta",
  },
  {
    id: 17,
    color: "rgb(255, 141, 133)",
    title: "Salmon",
  },
  {
    id: 18,
    color: "rgb(128, 128, 128)",
    title: "Charcoal",
  },
  {
    id: 19,
    color: "rgb(184, 184, 184)",
    title: "Grey",
  },
  {
    id: 20,
    color: "rgb(204, 172, 147)",
    title: "Taupe",
  },
];

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
    background-color: #f3f3f3;
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
//chcecked item background is background-color: #f3f3f3;;
//if is checked and hovered background is #ccc

const defaultOption = selectItems[17];
const defaultItem = [
  <Icon name="dot" color={defaultOption.color} />,
  <ColorPickerIconTitle>{defaultOption.title}</ColorPickerIconTitle>,
];

const ColorPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(defaultItem);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };

  return (
    <FormField>
      <FormTitle>Color</FormTitle>
      <ColorPickerButton onClick={handleOpenClose}>
        <ColorPickerIconTitle>
          {selectedOption || defaultItem}
        </ColorPickerIconTitle>
      </ColorPickerButton>
      {open ? (
        <DropDownSelectColorPicker>
          {selectItems.map((i) => (
            <SelectItemContainer
              key={i.id}
              onClick={onOptionClicked([
                <Icon name="dot" color={i.color} />,
                <ColorPickerIconTitle>{i.title}</ColorPickerIconTitle>,
              ])}
            >
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Icon name="dot" color={i.color} />
                  <ColorPickerIconTitle>{i.title}</ColorPickerIconTitle>
                </div>
                <Icon name="check" color="#202020" />
              </div>
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
