import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";
import ModalProvider from "./Providers/ModalProvider";
import { theme } from "./shared/theme";
import {
  createHistory,
  LocationProvider,
  Redirect,
  Router,
} from "@reach/router";
import ProjectItem from "./Components/Projects/ProjectItem";
import Items from "./Components/Filters/Items";
import ItemProvider from "./Providers/ItemProvider";
import TodayItem from "./Components/Projects/TodayProject/TodayItem";
import createHashSource from "hash-source";

const App = () => {
  let source = createHashSource();
  let history = createHistory(source);

  return (
    <ItemProvider>
      <Theme theme={theme}>
        <ModalProvider>
          <LocationProvider history={history}>
            <Router>
              <Layout path="/">
                <Redirect noThrow from="/" to="/project/inbox" />
                <ProjectItem path="project/:id" />
                <TodayItem path="today/:id" />
                <Items path="filter/:id" />
              </Layout>
            </Router>
          </LocationProvider>
        </ModalProvider>
      </Theme>
    </ItemProvider>
  );
};

export default App;
