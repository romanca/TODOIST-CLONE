// import React from "react";
// import styled from "styled-components";
// import useVisibiltyState from "../../hooks/useVisibiltyState";
// import Icon from "../../shared/Icon";

// const MainProjectDropDownContainer = styled.div`
//   position: absolute;
//   inset: ${(props) => props.theme.spaces[28]} auto auto
//     ${(props) => props.theme.spaces[28]};
//   transform: translate(1090px, 105px);
//   background-color: #fff;
//   border-collapse: separate;
//   border-radius: ${(props) => props.theme.spaces[28]}px;
//   border: 1px solid #ddd;
//   box-shadow: ${(props) => props.theme.spaces[28]}px 1px 8px
//     ${(props) => props.theme.spaces[28]}px rgb(0 0 0 / 8%);
//   margin: ${(props) => props.theme.spaces[28]}px;
//   padding: 4px ${(props) => props.theme.spaces[28]}px;
//   width: 250px;
//   z-index: 1000;
// `;
// const MenuItem = styled.div`
//   padding: 4px 10px;
//   display: flex;
//   cursor: pointer;
// `;
// const IconMenuContainer = styled.div`
//   color: grey;
//   height: 24px;
//   width: 24px;
//   margin-right: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Title = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 13px;
// `;

// const SortButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   color: #333;
// `;

// const SortButton = styled.button`
//   display: flex;
//   align-items: center;
//   margin-left: 16px;
//   text-decoration: none;
//   color: grey;
//   border-radius: ${(props) => props.theme.spaces[28]}px;
//   cursor: pointer;
//   border: 1px solid transparent;
//   outline: none;
//   background: transparent;
// `;

// const SortButtonTitle = styled.span`
//   font-size: 12px;
//   margin-left: 6px;
//   margin-right: 6px;
// `;

// const Container = styled.div``;

// const FilterDropDown = () => {
//   const { ref, open, handleOpenClose } = useVisibiltyState();

//   return (
//     <Container ref={ref}>
//       <SortButtonContainer onClick={handleOpenClose}>
//         <SortButton>
//           <Icon name="longArrowDown" style={{ fontSize: 16 }} />
//           <Icon name="longArrowUp" style={{ marginLeft: 2, fontSize: 16 }} />
//           <SortButtonTitle>Sort</SortButtonTitle>
//         </SortButton>
//       </SortButtonContainer>
//       {open && (
//         <MainProjectDropDownContainer>
//           <Container>
//             <MenuItem>
//               <IconMenuContainer>
//                 <Icon name="calendar1" />
//               </IconMenuContainer>
//               <Title>Sort by due date</Title>
//             </MenuItem>
//           </Container>
//           <Container onClick={handleOpenClose}>
//             <MenuItem>
//               <IconMenuContainer>
//                 <Icon name="flag" />
//               </IconMenuContainer>
//               <Title>Sort by priority</Title>
//             </MenuItem>
//           </Container>
//           <MenuItem>
//             <IconMenuContainer>
//               <span>Aa</span>
//             </IconMenuContainer>
//             <Title>Sort aphabetically</Title>
//           </MenuItem>
//         </MainProjectDropDownContainer>
//       )}
//     </Container>
//   );
// };

// export default FilterDropDown;
