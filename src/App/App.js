import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/core";
import About from "../containers/About/About";
import Header from "../components/Header/Header";
import Home from "../containers/Home/Home";
import Footer from "../components/Footer/Footer";
import appTheme from "./AppTheme.js";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById("root"));
