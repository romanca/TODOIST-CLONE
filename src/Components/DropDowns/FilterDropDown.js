import React from "react";
import styled from "styled-components";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import Icon from "../../shared/Icon";

// const HeaderButton = styled.button`
//   display: flex;
//   align-items: center;
//   color: grey;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   padding: ${(props) => props.theme.spaces[28]};
//   margin-right: -5px;
//   margin-top: 10px;
// `;

const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  padding: 4px;
  border-radius: 5px;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const HeaderButtonsIconContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.text3};
`;

const HeaderButtonTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-right: ${(props) => props.theme.spaces[2]};
  color: ${(props) => props.theme.colors.text3};
`;

const SelectedItemContainer = styled.div`
  //   position: absolute;
  z-index: ${(props) => props.theme.spaces[51]};
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.muted5};
  border-radius: ${(props) => props.theme.spaces[0]};
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted7};
  margin: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  min-width: ${(props) => props.theme.spaces[52]};
  font-size: ${(props) => props.theme.spaces[36]};
  left: ${(props) => props.theme.spaces[53]};
  margin-top: ${(props) => props.theme.spaces[48]};
`;
const SelectedItem = styled.div`
  cursor: pointer;
  padding: 4px 10px;
  margin: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[28]};
  :hover {
    background: ${(props) => props.theme.colors.background2};
    // border-radius: ${(props) => props.theme.spaces[1]};
  }
`;
const SelectedItemContent = styled.div`
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[48]};
  padding-bottom: ${(props) => props.theme.spaces[9]};
  padding-top: ${(props) => props.theme.spaces[9]};
  align-items: flex-start;
  display: flex;
`;
const SelectedItemIconContainer = styled.div`
  color: grey;
  height: ${(props) => props.theme.spaces[12]};
  width: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[48]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[37]};
`;
const Content = styled.div`
  line-height: ${(props) => props.theme.spaces[12]};
`;

const ContentIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.muted4};
  font-size: ${(props) => props.theme.spaces[15]};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const MainProjectDropDownContainer = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  transform: translate(1090px, 105px);
  background-color: #fff;
  border-collapse: separate;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  margin: 0;
  padding: 4px 0;
  width: 250px;
  z-index: 1000;
`;
const MenuItem = styled.div`
  padding: 4px 10px;
  display: flex;
  cursor: pointer;
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

const CheckBoxButton = styled.span`
  height: ${(props) => props.theme.spaces[37]};
  width: ${(props) => props.theme.spaces[37]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background4};
  border-radius: ${(props) => props.theme.spaces[25]};
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.spaces[28]};
  margin: ${(props) => props.theme.spaces[28]};
`;

const ContentHeaderDotsIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[33]};
  height: ${(props) => props.theme.spaces[33]};
  font-size: ${(props) => props.theme.spaces[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text1};
  font-size: 14px;
  background: red;
`;

const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: #333;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
  text-decoration: none;
  color: grey;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  background: transparent;
`;

const SortButtonTitle = styled.span`
  font-size: 12px;
  margin-left: 6px;
  margin-right: 6px;
`;

const FilterDropDown = () => {
  const { ref, open, handleOpenClose } = useVisibiltyState();

  return (
    <div ref={ref}>
      <SortButtonContainer onClick={handleOpenClose}>
        <SortButton>
          <Icon name="longArrowDown" style={{ fontSize: 16 }} />
          <Icon name="longArrowUp" style={{ marginLeft: 2, fontSize: 16 }} />
          <SortButtonTitle>Sort</SortButtonTitle>
        </SortButton>
      </SortButtonContainer>
      {open && (
        <MainProjectDropDownContainer>
          <div>
            <MenuItem>
              <IconMenuContainer>
                <Icon name="calendar1" />
              </IconMenuContainer>
              <Title>Sort by due date</Title>
            </MenuItem>
          </div>
          <div onClick={handleOpenClose}>
            <MenuItem>
              <IconMenuContainer>
                <Icon name="flag" />
              </IconMenuContainer>
              <Title>Sort by priority</Title>
            </MenuItem>
          </div>
          <MenuItem>
            <IconMenuContainer>
              <span>Aa</span>
            </IconMenuContainer>
            <Title>Sort aphabetically</Title>
          </MenuItem>
        </MainProjectDropDownContainer>
      )}
    </div>
    // <div
    //   style={{
    //     alignItems: "center",
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <HeaderButton onClick={handleOpenClose}>
    //     <Icon name="arrows" />
    //     <HeaderButtonTitleContainer>Sort</HeaderButtonTitleContainer>
    //   </HeaderButton>
    //   <div style={{ position: "absolute", marginTop: 125, zIndex: 1 }}>
    //     {open && (
    //       <div>
    //         <SelectedItemContainer>
    //           <SelectedItem>
    //             <SelectedItemContent>
    //               <SelectedItemIconContainer>
    //                 <Icon name="edit" />
    //               </SelectedItemIconContainer>
    //               <Content>Edit</Content>
    //             </SelectedItemContent>
    //           </SelectedItem>
    //           <SelectedItem>
    //             <SelectedItemContent>
    //               <SelectedItemIconContainer>
    //                 <Icon name="trash" />
    //               </SelectedItemIconContainer>
    //               <Content>Remove Project</Content>
    //             </SelectedItemContent>
    //           </SelectedItem>
    //         </SelectedItemContainer>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default FilterDropDown;
