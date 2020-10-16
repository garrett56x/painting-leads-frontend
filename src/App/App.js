import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import About from "../containers/About/About";
import Header from "../components/Header/Header";
import Home from "../containers/Home/Home";
import Footer from "../components/Footer/Footer";
import theme from "./theme.js";

const appTheme = createMuiTheme(theme);

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
