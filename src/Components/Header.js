import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-color: ${(props) => props.theme.colors.muted1};
  background-color: ${(props) => props.theme.colors.muted};
  padding-left: 42px;
  padding-right: 42px;
`;

const Header = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Header;
