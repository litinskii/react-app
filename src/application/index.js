import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Links from "./components/Links";
import "./index.scss";

ReactDOM.render(
  <Router>
    <Fragment>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/first-page" component={FirstPage} />
      <Route path="/second-page" component={SecondPage} />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
