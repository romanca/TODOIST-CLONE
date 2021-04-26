import React from "react";
import { ThemeProvider } from "styled-components";


const Theme = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
