import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => (
  <div className="Links">
    <NavLink exact activeClassName="Link--active" className="Link" to="/first-page/first-page-inner-first">
      FirstPageInnerFirst
    </NavLink>
    <NavLink activeClassName="Link--active" className="Link" to="/first-page/first-page-inner-second">
      FirstPageInnerSecond
    </NavLink>
  </div>
);

export default Links;
