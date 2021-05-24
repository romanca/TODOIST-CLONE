import React from "react";
import { Link as LinkRaw, Match } from "@reach/router";
// import styled from "styled-components";

const Link = ({ children, to }) => {
  return (
    // <Match path={to}>
    //   {({ match }) => (
    //     <div
    //       style={{
    //         backgroundColor: match ? "#ececec" : "",
    //         borderRadius: match ? 5 : "",
    //         width: 180,
    //       }}
    //     >
    //       <LinkRaw to={to} style={{ textDecoration: "none" }} />
    //     </div>
    //   )}
    // </Match>
    <LinkRaw to={to} style={{ textDecoration: "none" }}>
      {children}
    </LinkRaw>
  );
};
export default Link;
