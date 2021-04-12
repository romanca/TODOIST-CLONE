import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "./SideBar";

const LayoutContainer = styled.div``;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
      </div>
    </LayoutContainer>
  );
};
export default Layout;
