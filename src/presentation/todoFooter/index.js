import React from "react";

import NavLinks from "../buttonGroup";
import "./style.css";

function index({ todos, deleteCompletedHandler }) {
  const activeTodos = todos.filter((todo) => todo["isCompleted"] === false)
    .length;
  const completedTodos = todos.filter((todo) => todo["isCompleted"] === true)
    .length;
  if (activeTodos > 0 || completedTodos > 0) {
    return (
      <div className="footer">
        <p>
          {activeTodos} {activeTodos === 1 ? "item left" : "items left"}
        </p>
        <NavLinks />
        <button className="clearCompleted" onClick={deleteCompletedHandler}>
          Clear Completed
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default index;
