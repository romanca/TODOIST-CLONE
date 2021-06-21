import React from "react";
import { Link as LinkRaw } from "@reach/router";

const Link = ({ children, to }) => {
  return (
    <LinkRaw to={to} style={{ textDecoration: "none" }}>
      {children}
    </LinkRaw>
  );
};
export default Link;
