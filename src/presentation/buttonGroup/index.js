import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

function index() {
  return (
    <div className="navLinks">
      <NavLink exact activeClassName="selected" to="/">
        All
      </NavLink>
      <NavLink activeClassName="selected" to="/active">
        Active
      </NavLink>
      <NavLink activeClassName="selected" to="/completed">
        Completed
      </NavLink>
    </div>
  );
}

export default index;
