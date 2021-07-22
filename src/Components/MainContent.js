// import React from "react";
// import styled from "styled-components";
// import Icon from "../shared/Icon";
// import TodoItem from "./TodoItem";
// import SubmitFormInput from "./SubmitFormInput";
// import MainInfoContent from "./MainInfoContent";
// import useVisibiltyState from "../hooks/useVisibiltyState";
// import ProjectDropDown from "./ProjectDropDown";
// import { useProjectActions } from "../Providers/ItemProvider";

// const MainContentContainer = styled.div`
//   height: calc(100vh - 44px);
//   display: flex;
//   flex-grow: ${(props) => props.theme.spaces[35]};
//   justify-content: center;
// `;
// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: ${(props) => props.theme.spaces[35]};
//   max-width: ${(props) => props.theme.spaces[54]};
// `;
// const ContentHeader = styled.div`
//   display: flex;
//   background-color: #fff;
//   top: ${(props) => props.theme.spaces[28]};
//   padding-top: ${(props) => props.theme.spaces[55]};
// `;
// const HeaderContent = styled.div`
//   display: flex;
//   width: ${(props) => props.theme.spaces[27]};
//   padding-bottom: ${(props) => props.theme.spaces[43]};
//   margin: ${(props) => props.theme.spaces[28]} auto;
//   border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
//   align-items: flex-start;
//   justify-content: space-between;
//   word-break: break-word;
//   margin: ${(props) => props.theme.spaces[56]}
//     ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
//     ${(props) => props.theme.spaces[57]};
//   padding: ${(props) => props.theme.spaces[39]}
//     ${(props) => props.theme.spaces[9]};
// `;
// const HeaderButton = styled.button`
//   display: flex;
//   align-items: center;
//   color: grey;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   padding: ${(props) => props.theme.spaces[28]};
//   margin: ${(props) => props.theme.spaces[28]};
// `;
// const HeaderContentTitleContainer = styled.span`
//   font-size: ${(props) => props.theme.spaces[33]};
//   font-weight: ${(props) => props.theme.spaces[34]};
// `;
// const HeaderContentButtonsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   color: ${(props) => props.theme.colors.muted5};
//   justify-content: space-between;
//   width: ${(props) => props.theme.spaces[58]};
// `;
// const HeaderButtonsIconContainer = styled.div`
//   font-size: ${(props) => props.theme.spaces[33]};
//   color: ${(props) => props.theme.colors.muted10};
// `;
// const HeaderButtonTitleContainer = styled.div`
//   font-size: ${(props) => props.theme.spaces[36]};
//   margin-left: ${(props) => props.theme.spaces[1]};
//   margin-right: ${(props) => props.theme.spaces[2]};
// `;
// const ContentHeaderDotsIconContainer = styled.div`
//   width: ${(props) => props.theme.spaces[33]};
//   height: ${(props) => props.theme.spaces[33]};
//   font-size: ${(props) => props.theme.spaces[2]};
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: ${(props) => props.theme.colors.text};
//   background: red;
// `;

// const MainContent = () => {
//   const { open, handleOpenClose } = useVisibiltyState();
//   const { selectedProject } = useProjectActions();

//   return (
//     <MainContentContainer>
//       <ContentContainer>
//         <ContentHeader>
//           <HeaderContent>
//             <HeaderContentTitleContainer>
//               {selectedProject && selectedProject.title}
//             </HeaderContentTitleContainer>
//             <HeaderContentButtonsContainer>
//               <HeaderButton>
//                 <HeaderButtonsIconContainer>
//                   <Icon name="comment" />
//                 </HeaderButtonsIconContainer>
//                 <HeaderButtonTitleContainer>
//                   Comments
//                 </HeaderButtonTitleContainer>
//               </HeaderButton>
//               <HeaderButton>
//                 <HeaderButtonsIconContainer>
//                   <Icon name="arrows" />
//                   {/* <Icon name="longArrowDown" style={{ marginLeft: 2 }} /> */}
//                 </HeaderButtonsIconContainer>
//                 <HeaderButtonTitleContainer>Sort</HeaderButtonTitleContainer>
//               </HeaderButton>
//               <HeaderButton onClick={handleOpenClose}>
//                 {/* <ContentHeaderDotsIconContainer>
//                   <Icon name="circle" />
//                   <Icon name="circle" />
//                   <Icon name="circle" />
//                 </ContentHeaderDotsIconContainer> */}
//               </HeaderButton>
//             </HeaderContentButtonsContainer>
//             {open ? <ProjectDropDown /> : ""}
//           </HeaderContent>
//         </ContentHeader>
//         {/* <TodoItem />
//         <SubmitFormInput /> */}
//         {/* <MainInfoContent /> */}
//         {/* <MainInfoContent />
//         Should be switched according to the content  */}
//       </ContentContainer>
//     </MainContentContainer>
//   );
// };
// export default MainContent;
