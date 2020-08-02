import React from "react";

import Input from "../input";
import "./style.css";

function index({ saveTodo, toggleAllTodos, checkornot }) {
  return (
    <React.Fragment>
      <Input saveTodo={saveTodo} />
    </React.Fragment>
  );
}

export default index;
