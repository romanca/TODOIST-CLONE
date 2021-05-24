import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import DropDown from "../DropDown";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[80]};
  width: 130px;
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;

const ProjectTitle = ({ item, to }) => {
  return (
    <ItemsContainer>
      <Link to={to} style={{ textDecoration: "none", width: 15 }}>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </Link>
      <DropDown item={item} />
    </ItemsContainer>

    // <Match path={to}>
    //   {({ match }) => (
    //     <div
    //       style={{
    //         background: match ? "red" : "",
    //         padding: 5,
    //         // backgroundColor: match ? "#ececec" : "",
    //         borderRadius: match ? 5 : "",
    //         width: 180,
    //       }}
    //     >
    //       <Link to={to} style={{ textDecoration: "none" }}>
    //         {item.title}
    //       </Link>
    //       <button onClick={handleOpenClose}>+</button>
    //       {open ? <DropDown item={item} handleSelected={handleSelected} /> : ""}
    //     </div>
    //   )}
    // </Match>
    // <div style={{ padding: 5 }}>
    //   <div
    //     style={{
    //       width: 100,
    //       height: 25,
    //       display: "flex",
    //       background: isSelected ? "red" : "",
    //       padding: 4,
    //       border: "1px solid black",
    //     }}
    //   >
    //     <Link to={to} activeClassName="active">
    //       {item.title}
    //     </Link>
    //   </div>
    //   <button onClick={handleOpenClose}>+</button>
    //   {open ? <DropDown item={item} /> : ""}
    // </div>

    // <div style={{ display: "flex" }}>
    //   {/* <ContentIconContainer>
    //       <Icon name="th" color="rgba(0,0,0,.54);" />
    //     </ContentIconContainer> */}
    //   <ItemsContainer
    //     onMouseEnter={handleToggle}
    //     onMouseLeave={handleToggle}
    //     onClick={() => handleSelected(item)}
    //   >
    //     <ContentIconContainer>
    //       <Icon name="dot" color="grey" style={{ fontSize: 12 }} />
    //     </ContentIconContainer>
    //     <ContentTitleContainer>
    //       <Title>{item.title}</Title>
    //     </ContentTitleContainer>
    //     {/* {!toggle ? (
    //       <CounterContainer>0</CounterContainer>
    //     ) : (
    //       <CounterContainer>
    //         <div>
    //           <div onClick={handleOpenClose}>
    //             <Icon
    //               name="horizontalDots"
    //               color="grey"
    //               style={{ fontSize: 12 }}
    //             />
    //           </div>
    //           {open ? (
    //             <DropDown item={item} handleSelected={handleSelected} />
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //       </CounterContainer>
    //     )} */}
    //   </ItemsContainer>
    // </div>
  );
};

export default ProjectTitle;
