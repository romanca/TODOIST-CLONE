import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";
import ModalProvider from "./Providers/ModalProvider";
import { theme } from "./shared/theme";
import { Redirect, Router } from "@reach/router";
import ProjectItem from "./Components/Projects/ProjectItem";
import Items from "./Components/Filters/Items";
import ItemProvider from "./Providers/ItemProvider";
import TodayProjectItem from "./Components/Projects/TodayProject/TodayProjectItem";

const App = () => {
  // const todo = useTodoByIidFromParams();

  return (
    <ItemProvider>
      <Theme theme={theme}>
        <ModalProvider>
          <Router>
            <Layout path="/">
              <Redirect noThrow from="/" to="project/inbox" />
              <ProjectItem path="project/:id" />
              <TodayProjectItem path="today/:id" />
              <Items path="filter/:id" />
            </Layout>
          </Router>
        </ModalProvider>
      </Theme>
    </ItemProvider>
  );
};

// const useTodos = () => {
//   const { todos } = useContext(Context);

//   return { data: Object.values(todos) };
// };

// const useTodoByIidFromParams = () => {
//   const { todos } = useContext(Context);

//   const { id } = useParams();

//   return todos[id];
// };

export default App;
