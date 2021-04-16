import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";
import ModalProvider from "./Providers/ModalProvider";

const App = () => {
  return (
    <Theme>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </Theme>
  );
};
export default App;
