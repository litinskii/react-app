import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./FirstPage.scss";
import FirstPageInnerFirst from "./FirstPageInnerFirst";
import FirstPageInnerSecond from "./FirstPageInnerSecond";
import Links from "./Links";

const FirstPage = () => (
  <div className="FirstPage">
    <Links />
    <Switch>
      <Route path="/first-page/first-page-inner-first/:id" component={FirstPageInnerFirst} />
      <Route path="/first-page/first-page-inner-second" component={FirstPageInnerSecond} />
      <Redirect from="/first-page" to="/first-page/first-page-inner-first/1" />
    </Switch>
  </div>
);

export default FirstPage;
