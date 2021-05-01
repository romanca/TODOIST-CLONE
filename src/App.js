import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";
import ModalProvider from "./Providers/ModalProvider";
import { theme } from "./shared/theme";

const App = () => {
  // const todo = useTodoByIidFromParams();

  return (
    <Theme theme={theme}>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </Theme>
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
