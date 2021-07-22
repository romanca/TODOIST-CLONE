import React from "react";
import styled, { useTheme } from "styled-components";
import Toggle from "react-styled-toggle";

const AddToFavoritesContainer = styled.div`
  display: flex;
  font-weight: ${(props) => props.theme.spaces[26]};
  cursor: pointer;
  width: ${(props) => props.theme.spaces[27]};
  font-size: ${(props) => props.theme.spaces[14]};
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[29]};
`;

const SwitchInput = ({ value, onChange }) => {
  const { spaces, colors } = useTheme();
  return (
    <AddToFavoritesContainer>
      <Toggle
        width={spaces[93]}
        height={spaces[94]}
        sliderWidth={spaces[95]}
        sliderHeight={spaces[95]}
        translate={spaces[96]}
        backgroundColorChecked={colors["primary3"]}
        checked={value}
        onChange={onChange}
      />
      <span style={{ marginLeft: spaces[30] }}>Add to favorites</span>
    </AddToFavoritesContainer>
  );
};
export default SwitchInput;
