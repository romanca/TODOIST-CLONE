import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";
import ModalProvider from "./Providers/ModalProvider";
import { theme } from "./shared/theme";

const App = () => {
  return (
    <Theme theme={theme}>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </Theme>
  );
};
export default App;
