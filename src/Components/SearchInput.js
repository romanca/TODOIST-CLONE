import React from "react";
import styled from "styled-components";
import Icon from "../shared/Icon";

const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  height: ${(props) => props.theme.spaces[4]};
  width: ${(props) => props.theme.spaces[6]};
  border-radius: ${(props) => props.theme.spaces[0]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background};
  margin-left: ${(props) => props.theme.spaces[1]};
`;
const Input = styled.input`
  background: ${(props) => props.theme.colors.background};
  border: none;
  outline: none;
  width: ${(props) => props.theme.spaces[27]};
  display: inline-block;
  text-align: start;
`;
const IconSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.spaces[3]};
  padding-right: ${(props) => props.theme.spaces[3]};
  color: ${(props) => props.theme.colors.text2};
  background: ${(props) => props.theme.colors.background};
`;
// const IconCrossContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding-left: ${(props) => props.theme.spaces[3]};
//   padding-right: ${(props) => props.theme.spaces[3]};
//   color: ${(props) => props.theme.colors.text};
//   background: ${(props) => props.theme.colors.background};
//   transform: rotate(45deg);
//   font-size: 40px;
//   :hover {
//     background: ${(props) => props.theme.colors.muted2};
//     border-radius: ${(props) => props.theme.spaces[9]};
//     cursor: pointer;
//   }
// `;
const CrossContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  padding-left: ${(props) => props.theme.spaces[3]};
  padding-right: ${(props) => props.theme.spaces[3]};
  color: ${(props) => props.theme.colors.text};
  font-size: 28px;
  background: transparent;
  // width: 24px;
  height: 24px;
  // transform: rotate(45deg);
  // :hover {
  //   background: ${(props) => props.theme.colors.muted2};
  //   border-radius: ${(props) => props.theme.spaces[9]};
  //   cursor: pointer;
`;
const Plus = styled.div`
  transform: rotate(45deg);
`;
const SearchInput = () => {
  const [expand, setExpand] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef(null);
  const expandedWidth = 450;

  React.useEffect(() => {
    if (document.activeElement === inputRef) {
      setExpand(true);
    }
  }, []);

  const handleVisible = () => {
    setVisible((current) => !current);
  };
  const handleExpand = () => {
    setExpand(true);
    handleVisible();
  };

  const handleClose = () => {
    handleVisible();
    setExpand(false);
  };
  return (
    <SearchContainer style={{ width: expand ? expandedWidth : "" }}>
      <IconSearchContainer>
        <Icon name="search" />
      </IconSearchContainer>
      <Input
        placeholder="Find"
        onFocus={handleExpand}
        onBlur={handleClose}
        ref={inputRef}
      />
      {visible ? (
        <CrossContainer
        >
          <Plus>+</Plus>
        </CrossContainer>
      ) : (
        ""
      )}
    </SearchContainer>
  );
};
export default SearchInput;
