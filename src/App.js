import {
  createHistory,
  LocationProvider
} from "@reach/router";
import createHashSource from "hash-source";
import React from "react";
import Layout from "./Components/Layout";
import ItemProvider from "./Providers/ItemProvider";
import ModalProvider from "./Providers/ModalProvider";
import Theme from "./Providers/ThemeProvider";
import { theme } from "./shared/theme";

const App = () => {
  const source = createHashSource();
  const history = createHistory(source);

  return (
    <LocationProvider history={history} >
      <ItemProvider>
        <Theme theme={theme}>
          <ModalProvider>
              <Layout />
          </ModalProvider>
        </Theme>
      </ItemProvider>
    </LocationProvider>
  );
};

export default App;
