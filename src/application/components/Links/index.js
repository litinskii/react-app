import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.scss";

const Links = () => (
  <div className="Links">
    <NavLink exact activeClassName="Link--active" className="Link" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="Link--active" className="Link" to="/first-page">
      FirstPage
    </NavLink>
    <NavLink activeClassName="Link--active" className="Link" to="/second-page">
      SecondPage
    </NavLink>
  </div>
);

export default Links;
