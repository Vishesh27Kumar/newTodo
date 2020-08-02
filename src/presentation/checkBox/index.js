import React from "react";

import "./style.css";

function index({ onChangeHandler, id, isCompleted }) {
  return (
    <input
      type="checkbox"
      className="toggle"
      id={id}
      checked={isCompleted}
      onChange={onChangeHandler}
    />
  );
}

export default index;
