import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import "./index.scss";

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/first-page" component={FirstPage} />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
