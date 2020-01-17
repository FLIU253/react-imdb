import React from "react";
import Home from "./Home";
import Header from "./elements/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
