import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import About from "../containers/About/About";
import Home from "../containers/Home/Home";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          <header>
            <Link to="/">The Paint Connection</Link>
          </header>
          <Router>
            <Home path="/" />
            <About path="/about" />
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

render(<App />, document.getElementById("root"));
