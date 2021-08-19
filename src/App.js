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
  const source = createHashSource();
  const history = createHistory(source);

  return (
    <LocationProvider history={history} >
      <ItemProvider>
        <Theme theme={theme}>
          <ModalProvider>
            <Router>
              <Layout exact path="/">
                <Redirect noThrow from="/" to="/app/project/inbox" />
                <ProjectItem path="/app/project/:id" />
                <TodayItem path="/app/today/:id" />
                <Items path="/app/filter/:id" />
              </Layout>
            </Router>
          </ModalProvider>
        </Theme>
      </ItemProvider>
    </LocationProvider>
  );
};

export default App;
