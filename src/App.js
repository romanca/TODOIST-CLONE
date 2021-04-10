import React from "react";
import Theme from "./Providers/ThemeProvider";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Theme>
      <Layout />
    </Theme>
  );
};
export default App;
