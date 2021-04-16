import React from "react";
import styled from "styled-components";

const CheckBoxInput = styled.input`
  position: absolute;
  opacity: ${(props) => props.theme.spaces[24]};
`;
const SwitchButton = styled.span`
  position: absolute;
  top: ${(props) => props.theme.spaces[0]};
  left: ${(props) => props.theme.spaces[0]};
  width: ${(props) => props.theme.spaces[15]};
  height: ${(props) => props.theme.spaces[15]};
  border-radius: ${(props) => props.theme.spaces[25]};
  background: ${(props) => props.theme.colors.background1};
`;
const AddToFavoritesContainer = styled.div`
  display: flex;
  font-weight: ${(props) => props.theme.spaces[26]};
  cursor: pointer;
  width: ${(props) => props.theme.spaces[27]};
  font-size: ${(props) => props.theme.spaces[14]};
  margin: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[29]};
`;
const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: visible;
  margin-right: ${(props) => props.theme.spaces[30]};
  width: ${(props) => props.theme.spaces[31]};
  height: ${(props) => props.theme.spaces[32]};
  min-height: auto;
  border-radius: ${(props) => props.theme.spaces[3]};
  background-color: ${(props) => props.theme.colors.muted4};
  cursor: pointer;
`;

const SwitchInput = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle((current) => !current);
  };

  return (
    <AddToFavoritesContainer>
      <SwitchContainer
        style={{ background: toggle ? "teal" : "" }}
        onClick={handleToggle}
      >
        {toggle ? <SwitchButton style={{ left: 17 }} /> : <SwitchButton />}
      </SwitchContainer>
      Add to favorites
    </AddToFavoritesContainer>
  );
};
export default SwitchInput;
